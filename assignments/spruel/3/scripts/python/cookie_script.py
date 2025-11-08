from playwright.sync_api import sync_playwright, Error
from mdutils.mdutils import MdUtils


def run():
    def navigate_and_print_cookies(browser_type_name: str, p):
        if browser_type_name == "chromium":
            browser = p.chromium.launch(
                headless=False,
                args=[
                    "--disable-http2",
                ],
            )
        else:
            raise ValueError("Unsupported browser type")

        headers = ["URL", "Status Code", "Cookie Name", "HttpOnly", "Secure", "SameSite", "Path"]
        rows = []
        headers2 = ["URL", "# of cookies", "# of HttpOnly", "# of Secure", "# of SameSite", "# of Strict", "# of Lax", "# of None SameSite",  "# of Path" , "# of Path Sets"]
        rows2 = []
        with open("urls.txt", "r", encoding="utf-8") as f:
            for line in f:
                context = browser.new_context(
                    ignore_https_errors=True,
                    user_agent=(
                        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
                    ),
                    locale="en-US",
                    extra_http_headers={
                        "Accept-Language": "en-US,en;q=0.9",
                    },
                )
                url = "http://"
                url += line.strip("\n")
                context.clear_cookies()
                page = context.new_page()
                response = None
                status = None
                try:
                    response = page.goto(url, wait_until="domcontentloaded", timeout=45000)
                    page.wait_for_load_state("load")
                except Error as e:
                    status = e
                    print(f"Error navigating to {url}: {e}")

                if status or response.status != 200:
                    try:
                         response = page.reload(wait_until="domcontentloaded", timeout=45000)
                         page.wait_for_load_state("load")
                         input("Take a look at the page and when ready press Enter to continue...")
                         status = None
                    except Error as e:
                        status = e
                        print(f"Error reloading {url}: {e}")
                cookies = context.cookies()
                print("Starting page: " + url)
                print("Ending page: " + page.url)
                status = str(status if  status  else response.status )
                print("Return Code: " +  status)
                print(f"{len(cookies)} Cookies for {url}:")
                cookie_counts = {"httpOnly": 0, "secure":0, "sameSite": 0, "strict":0, "lax":0, "none":0, "path": 0, "path_set":0}

                with open("log.txt", "a", encoding="utf-8") as log:
                    if response:
                        log.write("Response for " + url + "\n")
                        log.write(str(response.headers) +"\n\n")
                        print (response)
                    else:
                        log.write("No response for " + url + "\n\n")
                        print("No response for " + url)

                for cookie in cookies:
                    print(cookie)
                    rows.append([url, status, cookie["name"], cookie["httpOnly"], cookie["secure"], cookie["sameSite"], cookie["path"]])
                    cookie_counts["httpOnly"] += 1 if cookie["httpOnly"] else 0
                    cookie_counts["secure"] += 1 if cookie["secure"] else 0
                    cookie_counts["sameSite"] += 1 if cookie["sameSite"] else 0
                    cookie_counts["strict"] += 1 if cookie["sameSite"] == "Strict" else 0
                    cookie_counts["lax"] += 1 if cookie["sameSite"] == "Lax" else 0
                    cookie_counts["none"] += 1 if cookie["sameSite"] is None or cookie["sameSite"] == "" or cookie["sameSite"] == "None"  else 0
                    cookie_counts["path"] += 1 if cookie["path"] else 0
                    cookie_counts["path_set"] += 1 if cookie["path"]  != "/" else 0
                    print("\n\n")
                rows2.append([url, len(cookies),  cookie_counts["httpOnly"], cookie_counts["secure"], cookie_counts["sameSite"],
                              cookie_counts["strict"],  cookie_counts["lax"] ,cookie_counts["none"],  cookie_counts["path"], cookie_counts["path_set"]])
                context.close()
        browser.close()
        stats = {"min" : {"URL" : "", "Value" : 999999999999}, "max" : {"URL" : "", "Value" : 0}, "mean" : {"URL" : "", "Value" : 0}, "median" : {"URL" : "", "Value" : 0}}

        for row in rows2:
            if row[1] < stats["min"]["Value"]:
                stats["min"]["URL"] = row[0]
                stats["min"]["Value"] = row[1]
            if row[1] >= stats["max"]["Value"]:
                stats["max"]["URL"] = row[0]
                stats["max"]["Value"] = row[1]

            stats["mean"]["Value"] += row[1]

        stats["mean"]["Value"] = stats["mean"]["Value"]/len(rows2)
        rows2 = sorted(rows2, key=lambda x: x[1])
        stats["median"]["URL"] = rows2[len(rows2)//2][0]
        stats["median"]["Value"] = rows2[len(rows2)//2][1]

        headers3 = ["Min URL", "Min # of Cookies", "Max URL", "Max # of Cookies", "Mean # of Cookies", "Median URL", "Median # of Cookies"]
        rows3 = [[stats["min"]["URL"], stats["min"]["Value"], stats["max"]["URL"], stats["max"]["Value"], stats["mean"]["Value"], stats["median"]["URL"], stats["median"]["Value"]]]


        md = MdUtils(file_name="README", title="CS 533 Rodwin Spruel Assignment 3: ")

        md.new_header(level=1, title="Overview")
        md.new_line("For this assignment I ended up creating a Python Playwright to collect the cookies from my assigned URLs.")
        md.new_line("Playwright is a tool that allows you to automate controlling a web browsers. It is typically used to automate the testing of websites and web apps.")
        md.new_line("This option was selected for this project to address http/2, capcha, and other issue I ran into when trying to use curl to collect the cookies.")
        md.new_line("The script takes an input file with the URL of sites that cookies will be collected from, and the input file should be placed in the same directory of the script.")
        md.new_line("Note: Some sice may be unreachable or cookie counts may differ from run to run depending on security measures setup on the various sites. ")
        md.new_line("The script can be found in the scripts/python folder:")
        md.new_line("[scripts/python](scripts/python)")
        md.new_line("-----------------\n")
        md.new_line("The original c++ script using libcurl can be found in the scripts/c++ folder:")
        md.new_line("[scripts/c++](scripts/c++)")
        md.new_line("-----------------\n")


        md.new_header(level=1, title="Collection Tables")
        md.new_line("Below you will find a summary table that presents the summary stats from each website,")
        md.new_line("a Statistics table covering the summary statistics from the collected data,")
        md.new_line("and a cookie details table that list all the cookies collected from the assigned web sites")
        md.new_line("-----------------\n")

        md.new_header(level=2, title="Summary Table:")
        flat_cells = headers2 + [cell for row in rows2 for cell in row]
        md.new_table(columns=len(headers2), rows=len(rows2) + 1, text=flat_cells)
        md.new_line("-----------------\n")

        md.new_header(level=2, title="Statistics Table:")
        flat_cells = headers3 + [cell for row in rows3 for cell in row]
        md.new_table(columns=len(headers3), rows=len(rows3) + 1, text=flat_cells)
        md.new_line("-----------------\n")

        md.new_header(level=2, title="Cookie Details Table:")
        flat_cells = headers + [cell for row in rows for cell in row]
        md.new_table(columns=len(headers), rows=len(rows) + 1, text=flat_cells)
        md.new_line("-----------------\n")

        md.new_header(level=2, title="Youtube Video")
        md.new_line("To view the script running you can check out the following video on YouTube: \n")

        md.new_header(level=1, title="Turtles all the way down")
        md.new_line("From my research, this saying comes from problem of infinite regress where there are an infinite number ")
        md.new_line("of turtles standing on each others' shell. Some suggest that te top most turtle is supporting a flat earth.")
        md.new_line("This relates to our class as it can be used to describe how an attacker can embed the legitimate site in it ")
        md.new_line("and make request look like they are coming from the legitimate site to get pass say origin restrictions.")
        md.new_line("-----------------\n")

        md.create_md_file()


    with sync_playwright() as p:
        try:
            navigate_and_print_cookies("chromium", p)
        except Error as e:
            print("Caught error during Chromium navigation: str(e):")


if __name__ == "__main__":
    run()