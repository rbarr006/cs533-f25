import os, re, subprocess, statistics, pathlib

SITES_FILE = "my_sites.txt"
RESP_DIR = "responses"
OUTPUT_MD = "results.md"
OUTPUT_STATS = "stats.txt"

pathlib.Path(RESP_DIR).mkdir(exist_ok=True)

def fetch_headers(url: str) -> str:
    # Use curl to follow redirects (-L), return headers only (-I), ignore bad certs (-k), be quiet (-s)
    cmd = ["curl", "-s", "-I", "-L", "-k", url]
    try:
        return subprocess.check_output(cmd, text=True, timeout=30)
    except subprocess.CalledProcessError:
        return ""
    except subprocess.TimeoutExpired:
        return ""

def clean_name(url: str) -> str:
    return re.sub(r"[/:]", "_", re.sub(r"^https?://", "", url.strip()))

def parse_one(header_text: str):
    # final status code: last HTTP/X YYY block
    status_codes = re.findall(r"HTTP/\S+\s+(\d+)", header_text)
    final_status = status_codes[-1] if status_codes else ""

    # all set-cookie lines in final response chain (often the last block matters most)
    cookies = re.findall(r"(?im)^set-cookie:\s*(.+)$", header_text)

    # attribute counters
    http_only = sum("httponly" in c.lower() for c in cookies)
    secure = sum(re.search(r"(?i)(^|;)\s*secure(=|;|$)", c) is not None for c in cookies)

    # SameSite
    same_strict = sum(re.search(r"(?i)samesite\s*=\s*strict", c) is not None for c in cookies)
    same_lax    = sum(re.search(r"(?i)samesite\s*=\s*lax", c) is not None for c in cookies)
    same_none   = sum(re.search(r"(?i)samesite\s*=\s*none", c) is not None for c in cookies)

    # Path
    path_root = sum(re.search(r"(?i)path\s*=\s*/(\s*;|$)", c) is not None for c in cookies)
    path_other = sum(re.search(r"(?i)path\s*=\s*/[^;]*(;|$)", c) is not None for c in cookies)

    return {
        "status": final_status,
        "count": len(cookies),
        "http_only": http_only,
        "secure": secure,
        "same_strict": same_strict,
        "same_lax": same_lax,
        "same_none": same_none,
        "path_root": path_root,
        "path_other": path_other,
        "cookies": cookies,
    }

def main():
    rows = []
    with open(SITES_FILE) as f:
        sites = [line.strip() for line in f if line.strip()]

    for url in sites:
        print(f"Fetching {url} ...")
        headers = fetch_headers(url)
        fname = f"{clean_name(url)}.txt"
        with open(os.path.join(RESP_DIR, fname), "w") as out:
            out.write(headers)

        data = parse_one(headers)
        rows.append((url, data))

    # Write Markdown table for README
    with open(OUTPUT_MD, "w") as md:
        md.write("| Site | Final Status | #Cookies | #HttpOnly | #Secure | SameSite Strict | Lax | None | Path '/' | Path other |\n")
        md.write("|------|--------------|----------|-----------|---------|-----------------|-----|------|---------|-----------|\n")
        for url, d in rows:
            md.write(f"| {url} | {d['status']} | {d['count']} | {d['http_only']} | {d['secure']} | {d['same_strict']} | {d['same_lax']} | {d['same_none']} | {d['path_root']} | {d['path_other']} |\n")

    counts = [d["count"] for _, d in rows]
    if counts:
        mean = statistics.mean(counts)
        median = statistics.median(counts)
        with open(OUTPUT_STATS, "w") as st:
            st.write(f"Min cookies/site: {min(counts)}\n")
            st.write(f"Max cookies/site: {max(counts)}\n")
            st.write(f"Mean cookies/site: {mean:.2f}\n")
            st.write(f"Median cookies/site: {median}\n")

    print("\nDone. Generated:", OUTPUT_MD, "and", OUTPUT_STATS, "and saved raw headers in", RESP_DIR)

if __name__ == "__main__":
    main()
