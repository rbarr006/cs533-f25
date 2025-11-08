# Assignment 3: Cookie Report

## Overview
This assignment analyzes the cookie practices of 100 websites randomly assigned from Mozilla's Top 500.  
Using `curl` with the `-ILsk` flags, I collected HTTP response headers and stored them in the `responses/` directory.  
I then parsed these responses with a PowerShell script to extract:
- Final HTTP status codes
- Number of cookies per site
- Cookie attributes: `HttpOnly`, `Secure`, `SameSite`, `Path`

The report includes a summary table, overall cookie statistics (Min/Max/Mean/Median cookies per site), and raw evidence in the `responses/` folder.

---

## Directory Layout
All work for this assignment is organized under `assignments/Wright/3` and separated into three directories:

* [responses](responses) — Raw HTTP responses for each site  
* [sites.txt](sites.txt) — List of the 100 assigned domains  
* [results.md](results.md) — Full cookie report (100-site table + Overall Cookie Statistics)  
* [fetch.ps1](fetch.ps1) — Script to collect HTTP headers  
* [parse.ps1](parse.ps1) — Script to parse responses and extract cookie data  
* [README.md](README.md) — This report

---

### Cookie report for 100 of the Mozilla top 500 web sites
| No. | site | final_status | cookies_total | cookies_httponly | cookies_secure | samesite_strict | samesite_lax | samesite_none | samesite_unset | path_set | path_non_root |
|----:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | ytimg.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | plus.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | mailchimp.com | 200 | 4 | 0 | 4 | 0 | 0 | 4 | 0 | 4 | 0 |
| 4 | www.gov.br | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | google.com.tw | 200 | 2 | 2 | N/A | 0 | N/A | 0 | N/A | 2 | 0 |
| 6 | www.over-blog.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | uol.com.br | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | nasa.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9 | salesforce.com | 200 | 4 | 0 | 2 | 0 | 0 | N/A | 3 | 4 | 0 |
| 10 | engadget.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 11 | gmail.com | 200 | 3 | 3 | 3 | 0 | 0 | 0 | 3 | 3 | 0 |
| 12 | google.fr | 200 | 2 | 2 | N/A | 0 | N/A | 0 | N/A | 2 | 0 |
| 13 | rt.com | 200 | 11 | 2 | 0 | 0 | 0 | 0 | 11 | 11 | 0 |
| 14 | sedoparking.com | 405 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 15 | arxiv.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 16 | wa.me | 200 | 1 | 0 | N/A | 0 | 0 | 0 | N/A | N/A | 0 |
| 17 | usgs.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 18 | bbc.co.uk | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 19 | cointernet.com.co | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 20 | dan.com | 200 | 8 | 0 | N/A | 0 | 0 | 0 | 8 | 8 | 0 |
| 21 | reg.ru | 200 | 1 | 0 | 0 | 0 | 0 | 0 | N/A | N/A | 0 |
| 22 | fb.me | 200 | 2 | 2 | 2 | 0 | 0 | 0 | 2 | 2 | 0 |
| 23 | clarin.com | 200 | 2 | 2 | N/A | 0 | 0 | N/A | N/A | 2 | 0 |
| 24 | files.wordpress.com | 200 | 4 | 0 | 4 | N/A | 0 | 3 | 0 | 4 | 0 |
| 25 | amazon.com | 503 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 26 | adssettings.google.com | 200 | 4 | 2 | 2 | 0 | 0 | 0 | 4 | 4 | 2 |
| 27 | m.me | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 28 | alicdn.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 29 | gettyimages.com | 200 | 4 | 4 | 4 | 0 | N/A | 0 | 3 | 4 | 0 |
| 30 | ibm.com | 200 | 4 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 |
| 31 | www.wikipedia.org | 200 | 5 | 3 | 5 | 0 | 0 | 2 | 3 | 5 | 0 |
| 32 | repubblica.it | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 33 | cdc.gov | 200 | 3 | 0 | 3 | 0 | 0 | 3 | 0 | 3 | 0 |
| 34 | issuu.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 35 | gofundme.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |
| 36 | bestfreecams.club | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 37 | nikkei.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 |
| 38 | qq.com | 501 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 39 | washington.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 40 | canada.ca | 200 | 1 | 0 | N/A | 0 | 0 | 0 | N/A | N/A | 0 |
| 41 | ggpht.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 42 | theverge.com | 200 | 4 | 0 | 2 | 0 | 2 | 0 | 2 | 4 | 0 |
| 43 | stores.jp | 200 | 1 | N/A | N/A | 0 | 0 | N/A | 0 | N/A | 0 |
| 44 | vimeo.com | 200 | 4 | 4 | 2 | 0 | 0 | 2 | 2 | 4 | 0 |
| 45 | upenn.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 46 | gfycat.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 47 | list-manage.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 48 | ft.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |
| 49 | amazon.de | 405 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 50 | office.com | 405 | 2 | 2 | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 51 | globo.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 52 | goo.ne.jp | 200 | 5 | 4 | 0 | 0 | 5 | 0 | 0 | 5 | 0 |
| 53 | support.google.com | 404 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |
| 54 | tiktok.com | 200 | 5 | 5 | 5 | 0 | 2 | 0 | 3 | 5 | 0 |
| 55 | npr.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 56 | bp.blogspot.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 57 | public-api.wordpress.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 58 | loc.gov | 200 | 3 | 3 | 2 | 0 | 0 | 2 | N/A | 3 | 0 |
| 59 | bbc.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 60 | narod.ru | 200 | 8 | 2 | 0 | 0 | 0 | 0 | 8 | 8 | 0 |
| 61 | spotify.com | 200 | 2 | N/A | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 62 | jimdofree.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 63 | sites.google.com | 200 | 5 | 5 | 3 | 0 | 0 | 0 | 5 | 5 | 0 |
| 64 | ikea.com | 200 | 1 | N/A | N/A | 0 | 0 | N/A | 0 | N/A | 0 |
| 65 | sony.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 66 | stanford.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 67 | es.wikipedia.org | 200 | 10 | 6 | 10 | 0 | 0 | 4 | 6 | 10 | 0 |
| 68 | wp.com | 200 | 4 | 0 | 4 | N/A | 0 | 3 | 0 | 4 | 0 |
| 69 | researchgate.net | 403 | 1 | N/A | N/A | 0 | 0 | N/A | 0 | N/A | 0 |
| 70 | picasa.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 71 | archive.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 72 | europa.eu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 73 | timeweb.ru | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 74 | goodreads.com | 200 | 3 | N/A | 0 | 0 | 0 | 0 | 3 | 3 | 0 |
| 75 | boston.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 76 | kickstarter.com | 403 | 2 | 2 | N/A | 0 | 0 | N/A | N/A | 2 | 0 |
| 77 | berkeley.edu | 200 | 3 | 3 | N/A | 0 | 0 | N/A | 2 | 3 | 0 |
| 78 | redbull.com | 200 | 1 | 0 | 0 | 0 | 0 | 0 | N/A | N/A | 0 |
| 79 | fr.wikipedia.org | 200 | 10 | 6 | 10 | 0 | 0 | 4 | 6 | 10 | 0 |
| 80 | amazon.co.uk | 405 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 81 | mayoclinic.org | 200 | 3 | 0 | 2 | N/A | 0 | 0 | 2 | 3 | 0 |
| 82 | gizmodo.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 83 | liveinternet.ru | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 84 | usatoday.com | 200 | 8 | 0 | 8 | 0 | 8 | 0 | 0 | 8 | 0 |
| 85 | utexas.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 86 | walmart.com | 200 | 3 | 2 | N/A | 0 | 0 | N/A | 2 | 3 | 0 |
| 87 | www.yahoo.com | 429 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 88 | imageshack.us | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 89 | books.google.com | 200 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |
| 90 | mozilla.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 91 | ja.wikipedia.org | 200 | 11 | 7 | 11 | 0 | 0 | 4 | 7 | 11 | 0 |
| 92 | secureserver.net | 404 | 9 | N/A | 4 | 0 | 0 | 3 | 6 | 9 | 0 |
| 93 | theguardian.com | 200 | 8 | 0 | 4 | 0 | 0 | 0 | 8 | 8 | 0 |
| 94 | scribd.com | 200 | 2 | 0 | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 95 | id.wikipedia.org | 200 | 11 | 7 | 11 | 0 | 0 | 4 | 7 | 11 | 0 |
| 96 | wikihow.com | 200 | 3 | 0 | 3 | 0 | 0 | 0 | 3 | 3 | 0 |
| 97 | mirror.co.uk | 200 | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 3 | 0 |
| 98 | storage.canalblog.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 99 | www.google.com | 200 | 2 | 2 | N/A | 0 | N/A | 0 | N/A | 2 | 0 |
| 100 | ebay.com | 303 | 5 | 3 | 5 | 0 | 0 | N/A | 4 | 5 | 0 |

### Overall Cookie Statistics
| **Statistic**              | **Value** |
| :------------------------- | --------: |
| Total Sites Analyzed       |   **100** |
| Total Cookies Collected    |   **223** |
| HttpOnly Cookies           |     **0** |
| Secure Cookies             |     **0** |
| SameSite Cookies           |     **0** |
| SameSite Strict            |     **0** |
| SameSite Lax               |     **0** |
| SameSite None              |     **0** |
| Cookies with Path          |     **0** |
| Cookies with Non-Root Path |     **0** |
| Min Cookies Per Site       |     **0** |
| Max Cookies Per Site       |    **11** |
| Mean Cookies Per Site      |  **2.23** |
| Median Cookies Per Site    |     **1** |

Some domains returned no cookies (values of 0) because they either redirected, blocked access (e.g., 403), or did not issue any Set-Cookie headers during the HEAD request