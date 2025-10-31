#!/usr/bin/env bash
# ----------------------------------------------------------
# fetch_headers.sh
# Script for CS533 Assignment 3 - Cookie Report
# By: Nirel Mason
# ----------------------------------------------------------
# This script reads your domains.txt file, runs HEAD requests
# to collect HTTP headers, and saves the results in /headers/.
# ----------------------------------------------------------

set -euo pipefail

DOMAINS_FILE="${1:-domains.txt}"   # Default input file
OUT_DIR="${2:-headers}"            # Default output folder
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36"

mkdir -p "$OUT_DIR"

n=0
while IFS= read -r domain || [ -n "$domain" ]; do
  # Skip blank lines or comments
  domain="$(echo "$domain" | tr -d '\r' | xargs)"
  [[ -z "$domain" || "$domain" =~ ^# ]] && continue

  n=$((n+1))
  base="https://$domain"
  outfile="$OUT_DIR/${domain//\//_}.txt"

  # Use curl to follow redirects (-L) and allow invalid certs (-k)
  # Collect status code and final URL
  status_and_url=$(curl -I -L -s -k -A "$UA" \
    -H "Accept-Language: en" \
    -o /dev/null \
    -w "%{http_code} %{url_effective}" \
    "$base")

  # Save full headers to file
  curl -I -L -s -k -A "$UA" -H "Accept-Language: en" "$base" -D "$outfile" -o /dev/null

  # Add status line to top of each header file
  { echo "# STATUS_AND_URL: $status_and_url"; cat "$outfile"; } > "$outfile.tmp" && mv "$outfile.tmp" "$outfile"

  echo "[$n] $domain -> $status_and_url"
  sleep 1   # Pause briefly to avoid rate limits
done < "$DOMAINS_FILE"

echo "✅ Done. All header files saved in: $OUT_DIR/"

