# Assignment 3

Reporter Name: Ryan Thomson

Report Date: 10-05-2025

# Report Description 
 This Cookie Fetcher program fetches cookies from a list of websites and generates a report on their attributes. As specified in the assignment, the program counts various cookie attributes such as HttpOnly, Secure, SameSite policies, and Path attributes. 
It also tracks the minimum and maximum number of cookies found on any single site. 
I wrote this program in go primarly using the http module, with goccy/go-yaml for YAML parsing for a small config to fully generate the README.md.
The report as outlined contains a summary of the findings, including total counts and percentages for each attribute, as well as a detailed breakdown of cookies per site. 
The program is designed to handle errors gracefully, logging any issues encountered during the fetching process. 
Overall, this assignment helped me understand how to work with HTTP requests and responses in Go, as well as how to parse and analyze cookie data effectively.


# Youtube Demo
[Demo link](https://www.youtube.com/watch?v=wyUo2yNZIPI)

# Cookie Report 

| URL | Status Code | Total Cookies | HttpOnly | Secure | SameSite | SameSite Strict | SameSite Lax | SameSite None | Path | Root Path | Non-root Path | Notes |
|-|-|-|-|-|-|-|-|-|-|-|-|-|
| amazon.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| news.google.com | 200 OK | 2 | 1 | 2 | 1 | 0 | 0 | 1 | 2 | 2 | 0 |  |
| biblegateway.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| oup.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| whatsapp.com | 200 OK | 3 | 2 | 3 | 3 | 0 | 1 | 2 | 3 | 3 | 0 |  |
| buydomains.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| estadao.com.br | 200 OK | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 |  |
| berkeley.edu | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| pinterest.com | 200 OK | 4 | 3 | 3 | 2 | 0 | 1 | 1 | 4 | 4 | 0 |  |
| ietf.org | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| theguardian.com | 200 OK | 4 | 0 | 2 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| joomla.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| dan.com | 200 OK | 7 | 0 | 1 | 0 | 0 | 0 | 0 | 7 | 7 | 0 |  |
| java.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| sina.com.cn | 204 No Content | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ads.google.com | 429 Too Many Requests | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| www.over-blog.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| code.google.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.com.tw | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| public-api.wordpress.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| narod.ru | 200 OK | 4 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| bigcommerce.com | 200 OK | 5 | 1 | 1 | 5 | 0 | 4 | 1 | 5 | 5 | 0 |  |
| howstuffworks.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| justgiving.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| www.livejournal.com | 200 OK | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| weather.com | 200 OK | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| themeforest.net | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| bestfreecams.club | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| scmp.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| techcrunch.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| gizmodo.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| metro.co.uk | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| indiatimes.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| tinyurl.com | 524  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| amazon.es | 405 Method Not Allowed | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 10 | 0 |  |
| smh.com.au | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| zendesk.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| gravatar.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| googleblog.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| uol.com.br | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| disney.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| taringa.net | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| sky.com | 200 OK | 4 | 0 | 2 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| newyorker.com | 200 OK | 5 | 1 | 3 | 3 | 0 | 0 | 3 | 5 | 5 | 0 |  |
| depositfiles.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| intel.com | 403 Forbidden | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| thenai.org | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| sciencemag.org | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| tmz.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| draft.blogger.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| policies.google.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| reverbnation.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| independent.co.uk | 200 OK | 18 | 2 | 10 | 0 | 0 | 0 | 0 | 18 | 18 | 0 |  |
| bp0.blogger.com | 400 Bad Request | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| mega.io | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| box.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| ovh.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| nps.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.it | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| tvtropes.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ok.ru | 200  | 4 | 4 | 1 | 1 | 0 | 0 | 1 | 3 | 3 | 1 |  |
| google.co.jp | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| doi.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| tiktok.com | 200 OK | 3 | 3 | 3 | 1 | 0 | 1 | 0 | 3 | 3 | 0 |  |
| wp.com | 200 OK | 4 | 0 | 4 | 4 | 1 | 0 | 3 | 4 | 4 | 0 |  |
| biglobe.ne.jp | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| standard.co.uk | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| un.org | 200 OK | 4 | 0 | 1 | 2 | 0 | 0 | 2 | 4 | 4 | 0 |  |
| theverge.com | 200 OK | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 2 | 2 | 0 |  |
| gsmarena.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| amzn.to | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| canva.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| spiegel.de | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ziddu.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| vice.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| get.google.com | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| microsoft.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ibm.com | 200 OK | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| target.com | 200 OK | 11 | 3 | 9 | 8 | 0 | 1 | 7 | 11 | 11 | 0 |  |
| justice.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| alexa.com | 405 Method Not Allowed | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| aliexpress.com | 200  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| forms.gle | 400 Bad Request | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| hollywoodreporter.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| kakao.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| video.google.com | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| freepik.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| francetvinfo.fr | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| interia.pl | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| reddit.com | 200 OK | 6 | 1 | 6 | 4 | 1 | 0 | 3 | 6 | 6 | 0 |  |
| whitehouse.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.es | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| psychologytoday.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ja.wikipedia.org | 200 OK | 6 | 4 | 6 | 2 | 0 | 0 | 2 | 6 | 6 | 0 |  |
| telegram.me | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| enable-javascript.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| de.wikipedia.org | 200 OK | 5 | 3 | 5 | 2 | 0 | 0 | 2 | 5 | 5 | 0 |  |
| akamaihd.net | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Dead Link, DNS Lookup Failed |
| ggpht.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Dead Link, DNS Lookup Failed |
| huawei.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Errored URL, TLS Handshake Failed |
| Totals | N/A | 151 | 58 | 96 | 68 | 2 | 16 | 50 | 150 | 150 | 1 |  |




# Cookie Summary

|Min| Max | Median | Mean |
|--------|-------|--------|-------|
| 0 | 18 | 1.00 | 1.56 |
# HTTP responses
 ## amazon.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:57:06 GMT] Etag:["33992-6406ebbebec44"] Last-Modified:[Sun, 05 Oct 2025 19:56:43 GMT] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Content-Type,Accept-Encoding,User-Agent] Via:[1.1 ea9784182c7536f5ce15ec71cf0089d6.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[jP8TqUPWG9XKSk5rxDEUGDM5OCzWZAcu_yvoWftUZ6Gi2gAl1EsP5A==] X-Amz-Cf-Pop:[IAD61-P10] X-Amz-Rid:[GCYDS70BP7E1ME7WVQ2G] X-Cache:[Miss from cloudfront]]
```

## news.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[require-trusted-types-for 'script';report-uri /_/DotsSplashUi/cspreport script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DotsSplashUi/cspreport;worker-src 'self'] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin-allow-popups] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 19:57:07 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/DotsSplashUi/web-reports?context=eJzjctDikmJw0pBi-LxjBmvrzXOsk4HYUOESqz0QX06_xFokcYW1AYg_Vd1gFai-wZrEfpO1AIhND95idQZiIR6OybO7j7MJ_Ji56jCzknJSfmF8Sn5JcXFBTmJxRnFqUVlqUbyRgZGpgaWxgZ6BZXyBAQAMTCsm"] Server:[ESF] Set-Cookie:[NID=525=h60pJOYFHsm81ZE1E4-Ksv8a8N2TjddtLrXI4c00HF4ypfi01T_JT-61aSotD57w4DD51fbkssr1FUUHOMagpuxBOx4o0ai86W5tuJWayMRMmObwMaD8haDx20sItwF4_YP4C6eBwqPrjy9j2z74Ss4j_n4hvonBpjBN-rlz7Snk45yxRGKcxfUGF21T0LOqWQHpMKDf5hfpzsfjYKow; expires=Mon, 06-Apr-2026 19:57:07 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none GN_PREF=W251bGwsIkNBSVNEQWlUbTR2SEJoQ0lzS2FXQWciXQ__; Expires=Mon, 06-Apr-2026 07:57:07 GMT; Path=/; Secure] Strict-Transport-Security:[max-age=31536000] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## biblegateway.com

```
200 OK
map[Age:[1530] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:31:38 GMT] Server:[nginx] Strict-Transport-Security:[max-age=7776000] Vary:[Accept-Encoding] Via:[1.1 255e8a45aff6633687f7e4911e918abc.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[hh7-Sr-BL4u2UJVgFYFDV9iv2gINdQG4I6IieV5RDmmuEy-upb4hSw==] X-Amz-Cf-Pop:[JFK52-P3] X-Cache:[Hit from cloudfront]]
```

## oup.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f7c9f4d6920c3-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:13 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f7c9f4d6920c3"] Set-Cookie:[__cf_bm=nWCQMkhJvep75a8vb5zV40kHiesDGvLN_TrmmUcPG88-1759694233-1.0.1.1-DxqKZl43NFeC_fFjif1MPkyMfRtIaNp5.iW5SL4OEt9D9xFv_Yu.mwK2DOhok3lqNj0tah.5W_0vctdfB0OvdHuNAlD2jRnLP2LhejWbULM; path=/; expires=Sun, 05-Oct-25 20:27:13 GMT; domain=.corp.oup.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## whatsapp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob:;script-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-kU77BnXt' 'self' blob:;style-src *.whatsapp.com *.whatsapp.net 'unsafe-inline' *.facebook.com 'self' data: blob:;connect-src *.whatsapp.com *.whatsapp.net wss://*.facebook.com:* *.fbcdn.net 'self' data: blob:;font-src *.whatsapp.com *.whatsapp.net *.facebook.com static.xx.fbcdn.net data:;img-src *.whatsapp.com *.whatsapp.net *.facebook.com *.fbcdn.net static.xx.fbcdn.net *.cdninstagram.com 'self' data: blob:;media-src *.fbcdn.net 'self' data: blob:;child-src 'self' data: blob:;frame-src *.facebook.com *.whatsapp.com 'self' data: blob:;manifest-src 'self' data: blob:;object-src 'self' data: blob:;worker-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-kU77BnXt' 'self' data: blob:;block-all-mixed-content;upgrade-insecure-requests;] Content-Type:[text/html; charset="utf-8"] Cross-Origin-Embedder-Policy-Report-Only:[require-corp;report-to="coep_report"] Cross-Origin-Opener-Policy:[same-origin-allow-popups;report-to="coop_report"] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:13 GMT] Document-Policy:[include-js-call-stacks-in-crash-reports] Expires:[Sat, 01 Jan 2000 00:00:00 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(), attribution-reporting=(), autoplay=(), bluetooth=(), camera=(), ch-device-memory=(), ch-downlink=(), ch-dpr=(), ch-ect=(), ch-rtt=(), ch-save-data=(), ch-ua-arch=(), ch-ua-bitness=(), ch-viewport-height=(), ch-viewport-width=(), ch-width=(), clipboard-read=(), clipboard-write=(), compute-pressure=(), display-capture=(), encrypted-media=(), fullscreen=(self), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), interest-cohort=(), keyboard-map=(), local-fonts=(), magnetometer=(), microphone=(), midi=(), otp-credentials=(), payment=(), picture-in-picture=(), private-state-token-issuance=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), shared-storage=(), shared-storage-select-url=(), private-state-token-redemption=(), usb=(), unload=(self), window-management=(), xr-spatial-tracking=();report-to="permissions_policy"] Pragma:[no-cache] Report-To:[{"max_age":2592000,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coop\/?minimize=0"}],"group":"coop_report","include_subdomains":true}, {"max_age":86400,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coep\/?minimize=0"}],"group":"coep_report"}, {"max_age":259200,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/?brsid=7557829183464008561&cpp=C3&cv=1028016501&st=1759694233652"}]}, {"max_age":21600,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/"}],"group":"permissions_policy"}] Reporting-Endpoints:[coop_report="https://www.facebook.com/browser_reporting/coop/?minimize=0", coep_report="https://www.facebook.com/browser_reporting/coep/?minimize=0", default="https://www.whatsapp.com/whatsapp_browser_error_reports/?brsid=7557829183464008561&cpp=C3&cv=1028016501&st=1759694233652", permissions_policy="https://www.whatsapp.com/whatsapp_browser_error_reports/"] Set-Cookie:[wa_csrf=OUe4O0oVEG1B796Uy4iPoz; path=/; domain=.whatsapp.com; secure; httponly; SameSite=None wa_lang_pref=en; expires=Sun, 12-Oct-2025 19:57:13 GMT; Max-Age=604800; path=/; domain=.whatsapp.com; secure; SameSite=None wa_ul=1d7c49d1-4923-4f2f-94f5-607566de73af; expires=Sat, 03-Jan-2026 19:57:13 GMT; Max-Age=7776000; path=/; domain=.www.whatsapp.com; secure; httponly; SameSite=Lax] Strict-Transport-Security:[max-age=31536000; preload; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Fb-Connection-Quality:[EXCELLENT; q=0.9, rtt=9, rtx=0, c=14, mss=1380, tbw=4304, tp=-1, tpl=-1, uplat=358, ullat=0] X-Fb-Debug:[NAvrxMAMBxrIdmlWHl6LMu6/Mjt8RsUeYc33vGVHlNZYBBOpgBHzg/oofl+3vccKg6/qV3ktG4cb1KjNrM23Dg==] X-Frame-Options:[DENY] X-Xss-Protection:[0]]
```

## buydomains.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f7ca2ce18e14c-IAD] Content-Length:[8520] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:14 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f7ca2ce18e14c"] Set-Cookie:[__cf_bm=ieGFkNO3hBgPAa0v7wN_R2hXQ0E4XTXHMIACWoMv15s-1759694234-1.0.1.1-LHMetkJ5Po_nrhZSzcY3IUTsgPOAkRxBzz7U3DJbkalW3_5dXIeHsYM1aWFU7bbl21ExrFYxyYIjQPMLTxere5hxGEdU7.N7xF20OdlKiYw; path=/; expires=Sun, 05-Oct-25 20:27:14 GMT; domain=.buydomains.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## estadao.com.br

```
200 OK
map[Accept-Ch:[Sec-CH-UA,Sec-CH-UA-Mobile,Sec-CH-UA-Platform,Sec-CH-UA-Arch,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-Device-Memory] Cache-Control:[private, max-age=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:16 GMT] Etag:[W/"14306f-UVv9CSfm0hD1yxz3JheZK5U8vw0"] Expires:[Sun, 05 Oct 2025 19:58:16 GMT] Last-Modified:[Sun, 05 Oct 2025 19:57:08 GMT] Mpulse_cdn_cache:[HIT] Mpulse_origin_time:[0] Server:[openresty] Server-Timing:[ak_p; desc="1759694236584_400218931_311401913_873_287599_11_22_-";dur=1] Set-Cookie:[datadome=wq6Ac4ASrT~xsy~m7cJXqKqBvU53conKTlk_NuhfeSuj6ZhEOByHcQtfbSaOkq~vs7zYivu6bEFvrE~gFgmSGZM6bnwQq1L4pm81zpMNCAfWCK4YTPIibbRy8k5MlIO4; Max-Age=31536000; Domain=.estadao.com.br; Path=/; Secure; SameSite=Lax] X-Arc-Edgecontroller:[1.1.0] X-Arc-Pb-Mx-Id:[00000000] X-Arc-Pb-Request-Id:[edc1c039-dc31-488b-b008-a6f3fec08a87] X-Arc-Request-Id:[0.33dbda17.1759694236.128f9db9] X-Arc-Ttl:[120] X-Datadome:[protected]]
```

## berkeley.edu

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f7cb56c58d6bb-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:17 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f7cb56c58d6bb"] Set-Cookie:[__cf_bm=obQgOeV18vDdvxN6oRJ4qE0xdRuzwuDEymXQIL5GxBE-1759694237-1.0.1.1-GkyQ61Fs3uolHiGNM7ZT.ERnucTYijZlph5v67JZviBCsVcyRaqNwPTQ0xhXbA0XhE0Zg5rfy7IC3MVJkJ_gl_mgA9ersMmZ3tKmDqrwlz0; path=/; expires=Sun, 05-Oct-25 20:27:17 GMT; domain=.berkeley.edu; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## pinterest.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Full,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443";ma=604800] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob: s.pinimg.com s1.pinimg.com; font-src 'self' m.media-amazon.com *.amazon-adsystem.com s.pinimg.com s1.pinimg.com data: fonts.googleapis.com fonts.gstatic.com use.typekit.net; style-src 'self' blob: 'unsafe-inline' data: *.pinimg.com *.pinterest.com accounts.google.com fonts.googleapis.com *.adyen.com *.adyenpayments.com; img-src blob: data: *; base-uri 'none'; connect-src 'self' blob: m.media-amazon.com *.amazon-adsystem.com htlb.casalemedia.com *.ada.support *.pinimg.com *.pinterest.com accounts.google.com *.adyen.com pinterest-salvador.s3.amazonaws.com *.adyenpayments.com *.facebook.com www.recaptcha.net https://pinterest-api.arkoselabs.com/ www.googleapis.com *.dropboxapi.com pinterest-aberdeen.s3.amazonaws.com pinterest-aberdeen.s3.us-east-1.amazonaws.com pinterest-anaheim.s3.amazonaws.com pinterest-anaheim.s3.us-east-1.amazonaws.com pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-media-upload.s3.amazonaws.com pinterest-media-upload.s3.us-east-1.amazonaws.com pinterest-media-upload.s3-accelerate.amazonaws.com pinterest-media-upload.s3-accelerate.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-poughkeepsie.s3.amazonaws.com pinterest-poughkeepsie.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-plymouth.s3.amazonaws.com pinterest-plymouth.s3.us-east-1.amazonaws.com pinterest-salvador.s3.us-east-1.amazonaws.com pinterest-yamagata.s3.amazonaws.com pinterest-yamagata.s3.us-east-1.amazonaws.com *.cedexis.com *.cedexis-radar.net *.tvpixel.com api.pinadmin.com *.live-video.net https://*.daily.co https://*.pluot.blue wss://*.wss.daily.co api.basistheory.com; form-action 'self' *.adyen.com *.klarna.com *.tink.com *.adyenpayments.com; frame-src 'self' *.ada.support *.pinimg.com *.pinterest.com *.adyen.com static-sandbox.dlocal.com static.dlocal.com *.google.com *.facebook.com www.recaptcha.net https://iframe.arkoselabs.com/ https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-tolu.s3.amazonaws.com *.pinterdev.com content.googleapis.com *.youtube.com *.youtube-nocookie.com *.ytimg.com player.vimeo.com calendly.com vine.co bid.g.doubleclick.net *.fls.doubleclick.net pinlogs.s3.amazonaws.com pinlogs.s3.us-east-1.amazonaws.com advertising-delivery-metric-reports.s3.amazonaws.com advertising-delivery-metric-reports.s3.us-east-1.amazonaws.com servedby.flashtalking.com pinterest-uk.admo.tv pinterest-uk-web.admo.tv fbrpc://call *.linkedin.com px.ads.linkedin.com api.basistheory.com js.basistheory.com 3ds.basistheory.com; media-src 'self' blob: m.media-amazon.com data: *.pinimg.com *.live-video.net; object-src 'self'; script-src 'nonce-150b3c2210335070d6f190870070191d' 'strict-dynamic' 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; worker-src 'self' blob: 'unsafe-inline'; report-uri /_/_/csp_report/?rid=2264228686737670; frame-ancestors 'self' , script-src 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; report-uri /_/_/csp_report/?rid=2264228686737670] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="coop-endpoint"] Date:[Sun, 05 Oct 2025 19:57:17 GMT] Link:[<https://i.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://s.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://v1.pinimg.com>; rel=preconnect; crossorigin=anonymous] Origin-Trial:[AvlUIFJouPpJAKljRGh7EnYm2Brnx/eu51h39Z7p11vbzNlw2YhkUhxvxZdkS709VlGGNw4Gcg/a9mAzHDrEcQ0AAAB5eyJvcmlnaW4iOiJodHRwczovL3BpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IlNlbmRGdWxsVXNlckFnZW50QWZ0ZXJSZWR1Y3Rpb24iLCJleHBpcnkiOjE2ODQ4ODYzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==] P3p:[CP="This is not a P3P policy. See https://www.pinterest.com/_/_/help/articles/pinterest-and-p3p for more info."] Pinterest-Generated-By:[coreapp-webapp-prod-0a011c30] Pinterest-Version:[53b4edc] Referrer-Policy:[origin] Reporting-Endpoints:[coop-endpoint="https://www.pinterest.com/_/_/coop_report/", coep-endpoint="https://www.pinterest.com/_/_/coep_report/"] Set-Cookie:[csrftoken=0affa9fbc2d72f42d6ec254a88f22b56; path=/; expires=Mon, 05 Oct 2026 19:57:17 GMT; samesite=lax; secure _pinterest_sess=TWc9PSZGSnV5WWJMY1c5cm01RlhBZldTNmRyTmRjcW1OZmF5Rmx6aWVuU0wrNDh0S2VsdUtYQXhCQXJJQ1AxZWFqek0rQlZEaHdvYm5IbVVuaFVNT2U1cWNNWVVieVMzczNEQkJTOTJDQy9aZXVKND0mM0c5U1hZVUYwaitFNHhSbDNsdDd3S3NMa1RZPQ==; path=/; expires=Wed, 30 Sep 2026 19:57:17 GMT; domain=.pinterest.com; samesite=none; secure; httponly _auth=0; path=/; expires=Wed, 30 Sep 2026 19:57:17 GMT; domain=.pinterest.com; secure; httponly _routing_id="b321a65b-2c52-434c-88f5-0405e5516a93"; Max-Age=86400; Path=/; HttpOnly] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Timing-Allow-Origin:[https://pinterest.com] Vary:[User-Agent, Accept-Encoding] X-Cdn:[fastly] X-Content-Type-Options:[nosniff] X-Envoy-Upstream-Service-Time:[24] X-Frame-Options:[SAMEORIGIN] X-Pinterest-Rid:[2264228686737670] X-Pinterest-Rid-128bit:[d0b4c1fc7ec2530e1f6c27fe833f81a5] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[1; mode=block]]
```

## ietf.org

```
200 OK
map[Age:[602] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=14400] Cf-Cache-Status:[HIT] Cf-Ray:[989f7cb75ac7d6e9-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:17 GMT] Expires:[Sun, 05 Oct 2025 23:57:17 GMT] Last-Modified:[Sun, 05 Oct 2025 19:32:52 GMT] Referrer-Policy:[same-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=nwUHpwKdTydUz4VY1_xmlcFQWI5UR3E_tr.h1w2O0_M-1759694237-1.0.1.1-6IjzfQDYBaLtVGUdRbgGK8xqpSDIwQ9_G5ccUP7FnL4QujT.gihox3V_gv8tjdmVZz.msS2ahFnSDII0lyOFUMC8aIRq2SOViYhUNFtALsk; path=/; expires=Sun, 05-Oct-25 20:27:17 GMT; domain=.ietf.org; HttpOnly; Secure; SameSite=None] Vary:[Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY]]
```

## theguardian.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[max-age=60, stale-while-revalidate=6, stale-if-error=864000, private,no-transform] Connection:[keep-alive] Content-Length:[1241527] Content-Security-Policy:[upgrade-insecure-requests; default-src https:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; frame-src https: data:; style-src https: 'unsafe-inline'; img-src https: data: blob:; media-src https: data: blob:; font-src 'self' https://assets.guim.co.uk https://pasteup.guim.co.uk https://interactive.guim.co.uk https://dashboard.ophan.co.uk data:; connect-src https: wss: blob:; child-src https: blob:; object-src 'none'; base-uri 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:22 GMT] Etag:[W/"hash-8429247778677268768"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6%2Ces7%2Ces2017%2Ces2018%2Ces2019%2Cdefault-3.6%2CHTMLPictureElement%2CIntersectionObserver%2CIntersectionObserverEntry%2CURLSearchParams%2Cfetch%2CNodeList.prototype.forEach%2Cnavigator.sendBeacon%2Cperformance.now%2CPromise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1>; rel=prefetch,<https://assets.guim.co.uk/assets/frameworks.client.web.6b5647f09664a1f0b5f4.js>; rel=prefetch,<https://assets.guim.co.uk/assets/index.client.web.b951e9cd37def3460e83.js>; rel=prefetch,<https://assets.guim.co.uk/commercial/64e2212ea0dfddf4a1b4/graun.standalone.commercial.js>; rel=prefetch,,<https://assets.guim.co.uk/>; rel=preconnect,<https://i.guim.co.uk>; rel=preconnect,<https://j.ophan.co.uk>; rel=preconnect,<https://ophan.theguardian.com>; rel=preconnect,<https://api.nextgen.guardianapps.co.uk>; rel=preconnect,<https://hits-secure.theguardian.com>; rel=preconnect,<https://interactive.guim.co.uk>; rel=preconnect,<https://phar.gu-web.net>; rel=preconnect,<https://static.theguardian.com>; rel=preconnect,<https://support.theguardian.com>; rel=preconnect] Onion-Location:[https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=(), clipboard-read=(), unload=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[GU_mvt_id=440230; expires=Sat, 03 Jan 2026 19:57:22 GMT; path=/; domain=.theguardian.com; Secure gu_client_ab_tests=; path=/; max-age=2592000 gu_v2_mvt_id=799; path=/; max-age=2592000 GU_geo_country=US; path=/; Secure] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Gu-Dotcomponents:[true] X-Gu-Edition:[us] X-Gu-Frontend-Git-Commit-Id:[29999cae32786d35cccd60ea63165177c2169312] X-Timer:[S1759694243.501908,VS0,VS0,VE2] X-Xss-Protection:[1; mode=block]]
```

## joomla.org

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f7cf8eda313bc-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src 'self'; script-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.joomla.org https://*.pingdom.net https://*.googleapis.com https://*.doubleclick.net https://*.amazon-adsystem.com https://completion.amazon.com; style-src 'self' 'unsafe-inline' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://fonts.googleapis.com; connect-src 'self' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://*.pingdom.net https://*.doubleclick.net https://*.google-analytics.com; frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://www.slideshare.net; font-src 'self' https://fonts.gstatic.com https://*.joomla.org; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.joomla.org https://*.pingdom.net https://*.doubleclick.net https://*.gstatic.com https://*.google.com https://*.googleapis.com https://img.youtube.com  https://i1.ytimg.com https://i.ytimg.com https://i9.ytimg.com https://s.ytimg.com https://*.amazon-adsystem.com https://*.ssl-images-amazon.com https://*.assoc-amazon.com https://m.media-amazon.com https://opensourcematters.org https://*.opensourcematters.org; media-src 'self' https://*.googlevideo.com; report-uri https://wwwjorg.report-uri.com/r/t/csp/enforce] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:57:27 GMT] Expires:[Wed, 17 Aug 2005 00:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:48:31 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[interest-cohort=()] Pragma:[no-cache] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WvL4HiiKjr5H%2B83h4EqzZwTtkxMubUoxuE%2BRYsokSCnTr3mJIp%2FxEfLgLWHlnXy8Z6yQ7iINIiiKijwBJ3ZwAd1w5ANfJGwHQJLc"}]}] Server:[cloudflare] Strict-Transport-Security:[max-age=31536000; includeSubDomains] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Litespeed-Cache:[hit] X-Turbo-Charged-By:[LiteSpeed] X-Xss-Protection:[1; mode=block]]
```

## dan.com

```
200 OK
map[Cache-Control:[s-maxage=15, stale-while-revalidate] Connection:[keep-alive] Content-Length:[123089] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:28 GMT] Etag:["wl2h751p8t2mte"] Server:[envoy] Set-Cookie:[traceid=3771c34009b28795f7f973b4c1fdd5fb; Max-Age=120; Path=/; Expires=Sun, 05 Oct 2025 19:59:28 GMT fb_sessiontraffic=S_TOUCH=&pathway=1c6fa701-5e0a-41a8-8fdf-b892cfcaf120&V_DATE=&pc=0; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 20:17:28 GMT pathway=1c6fa701-5e0a-41a8-8fdf-b892cfcaf120; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 20:17:28 GMT visitor=vid=1c6fa701-5e0a-41a8-8fdf-b892cfcaf120; Path=/; Domain=afternic.com; Expires=Sun, 04 Oct 2026 19:57:28 GMT _policy={"restricted_market":false,"tracking_market":"none"}; Path=/; Domain=afternic.com; Expires=Mon, 05 Oct 2026 19:57:28 GMT market=en-US; expires=Mon, 05-Oct-2026 19:57:28 GMT; path=/; domain=.afternic.com _abck=0552383392EC0BEB972B4F700E98FBC0~-1~YAAQ3GQwFzYmnqOZAQAAdlvztQ4z3vw7Hr2wD8aTpiC4CzoxgPUqZVjGvpY5hr4fvGpsarELjK6NtmfDoDjF3Uu0F4+O2UTnttBUVMwh2kcLmUWFbTwf79XHuWDzTvTFDmac+PWnwJ/tHOikTytlyg4FO4/IR7cT9CRy3/h6A1J6VCDEstml/eShYsvg9s0evbKjOBylB6MIqYbjt/2Zrvyf5c+Egaa1QCtPVE15N7EWcMNhBy1Grfy4s5Y63JYWVEcJsmWUSh5VoFiQDKLoUBeWoDMKgdwaAV3Yy4JiP0d1NlNxIbiiL8zADECfHvZLm7yis1ZF1Id2bs6CzaxJDtxjiLroH6JaLZdHCRSl4pp+LdSIS2Wjq4llWoHYUrqtt23cW5LUG6hss/F6DLkdAIZ0deAzjR9Lq4MXGLl39vXT4xpYyRbFfOQTT0r3CdALsG41dbfM+v5pdevNeL+3PL5qRejPQQ==~-1~-1~-1~-1~-1; Domain=.afternic.com; Path=/; Expires=Mon, 05 Oct 2026 19:57:28 GMT; Max-Age=31536000; Secure bm_sz=DAFA451DDF998B79FC405AE9E2D1502F~YAAQ3GQwFzcmnqOZAQAAdlvztR0Km7GalcRiBw+uWOd1gMYM3NT/hKecb+JqjhPIkbPR/Ekt4wt2ErgQO22MUsnko5yVke051wbOI1Mws0LVhWY+g+DaA+iFAqQRrZVQN5AHQGXELNWQTbWj8Y2PxT58POIRTa6H8EIIlCfGh6C7ONmEJAL7mv1MqobMiyMxc2RW/tD0OcgvfMtDqMNNRBy+njhb9HfkgG5bLPPTyq+X2ssxCwEiLNYZUaFBP2zN05CG3ZWYfUKBDtWaiQawV1ZminFS7cJF9Bir8WKHLgp1ax90X0xYU7W6RSFwtvf2SjoThZwI7SohisbYTxwhSzLmp36ru8SX/nj/9Idi~3555910~3683127; Domain=.afternic.com; Path=/; Expires=Sun, 05 Oct 2025 23:57:28 GMT; Max-Age=14400] X-Arc:[2] X-Envoy-Upstream-Service-Time:[13] X-Nextjs-Cache:[STALE] X-Powered-By:[Express]]
```

## java.com

```
403 Forbidden
map[Akamai-Grn:[0.2610de17.1759694248.a3d9ea7] Akamai-Request-Bc:[[a=23.222.16.38,b=171810471,c=g,n=US_VA_ASHBURN,o=20940]] Cache-Control:[max-age=1800] Content-Length:[356] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:57:28 GMT] Expires:[Sun, 05 Oct 2025 20:27:28 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Server-Timing:[ak_p; desc="1759694248863_400429094_171810471_19_10811_11_15_-";dur=1]]
```

## sina.com.cn

```
204 No Content
map[Cache-Control:[no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:31 GMT] Sinawap-Debug:[sinawap-mainpage-online-f585dd8bc-mxpt2] X-Custom:[Method is illegal] X-Powered-By:[PHP/7.0.15]]
```

## ads.google.com

```
429 Too Many Requests
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1103] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:32 GMT]]
```

## www.over-blog.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[1768] Cache-Control:[public, s-maxage=3600] Content-Length:[229152] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:28:03 GMT] Referrer-Policy:[no-referrer-when-downgrade] Strict-Transport-Security:[max-age=31536000;preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Xss-Protection:[1;mode=block]]
```

## code.google.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[5418] Content-Security-Policy:[script-src 'nonce-pJkSdugtPpXySRxEdlfF4A' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/codesite; base-uri 'none'] Content-Security-Policy-Report-Only:[require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/codesite] Content-Type:[text/html] Cross-Origin-Opener-Policy:[same-origin; report-to="codesite"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 19:57:32 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 17 Sep 2024 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"codesite","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/codesite"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## google.com.tw

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce--AOl9ag9Xyxd4hhyd73aDQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:32 GMT] Expires:[Sun, 05 Oct 2025 19:57:32 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5sPqnfUO4pJpog_Nsf6_xlZiP8iHI2EmNO1lnW46cO37YnutYlQ8Q; expires=Fri, 03-Apr-2026 19:57:32 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=lax NID=525=f7H_I6Gn77Y_8wQRMTyHMsc6fTFthYNc0_9nzICNlIVWdes79iAK2yFLxyn3tj8tgl18ZwvTGDomDjCeJv_JGBmnyJUT8p16Xl5h9aTxQxstrb2EmJxfeMlj38ztvlp2pTK512C3-kgBeYLbU1Iy0HwqhQzHSOWquB9rp0zwe8Ib4OH_bVW0qNjNNU-AidxJIVu8W25F2UdREPa9Uyee; expires=Mon, 06-Apr-2026 19:57:32 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## public-api.wordpress.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:37 GMT] Host-Header:[WordPress.com] Link:[<https://wp.me/p2gHKz-pRl>; rel=shortlink] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=STALE;dur=23.0] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding accept, content-type, cookie] X-Ac:[4.dca _dca STALE] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.]]
```

## narod.ru

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[2024] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:37 GMT] Etag:["68dbaa72-7e8"] Keep-Alive:[timeout=60] Last-Modified:[Tue, 30 Sep 2025 10:01:22 GMT] Server:[ddos-guard] Set-Cookie:[__ddg8_=S9WfTknvIqy7e4pn; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:17:38 GMT __ddg10_=1759694258; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:17:38 GMT __ddg9_=74.99.95.85; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:17:38 GMT __ddg1_=4YEVbqS862h3hPInRMds; Domain=.narod.ru; HttpOnly; Path=/; Expires=Mon, 05-Oct-2026 19:57:38 GMT]]
```

## bigcommerce.com

```
200 OK
map[Age:[495] Alt-Svc:[h3=":443"; ma=86400] Bc-Ray:[1] Cache-Control:[public, max-age=0, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f7d3e5d35c998-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' app.makeswift.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:39 GMT] Document-Policy:[js-profiling] Referrer-Policy:[no-referrer-when-downgrade] Server:[cloudflare] Set-Cookie:[c_consent=%7B%22anonymousId%22%3A%22855982c9-082d-4753-8947-560179872916%22%2C%22geo%22%3A%7B%22country%22%3A%22United%20States%20of%20America%22%2C%22region%22%3A%22Virginia%22%7D%2C%22gpc%22%3Afalse%7D; Path=/; Expires=Mon, 05 Oct 2026 19:57:39 GMT; Domain=bigcommerce.com; SameSite=lax c_user=%7B%22anonymousId%22%3A%22855982c9-082d-4753-8947-560179872916%22%2C%22traits%22%3A%7B%7D%7D; Path=/; Expires=Mon, 05 Oct 2026 19:57:39 GMT; Domain=bigcommerce.com; SameSite=lax ajs_anonymous_id=855982c9-082d-4753-8947-560179872916; Path=/; Expires=Mon, 05 Oct 2026 19:57:39 GMT; Domain=bigcommerce.com; SameSite=lax segmentAnonId=855982c9-082d-4753-8947-560179872916; Path=/; Expires=Mon, 05 Oct 2026 19:57:39 GMT; Domain=bigcommerce.com; SameSite=lax __cf_bm=3I0keNDHpWBuOji4WqZdSD6S3rnWWxniIYpC8OsaJEE-1759694259-1.0.1.1-e2tfiM.cBLtceu_b7K_2xJ0wX8cLukdExBReReqrdsEWxCJjF_f1PRAbgaPuseyC_nh1N1moQYyfUUdHlLHMKFiWDhwqe9dMJXiUtJqUPV4; path=/; expires=Sun, 05-Oct-25 20:27:39 GMT; domain=.bigcommerce.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains] X-Matched-Path:[/en-US/[[...path]]] X-Powered-By:[Next.js] X-Vercel-Cache:[HIT] X-Vercel-Id:[iad1::iad1::rkb58-1759694258946-6bd9bd026751]]
```

## howstuffworks.com

```
200 OK
map[Age:[547] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:32 GMT] Expires:[Sun, 05 Oct 2025 15:58:32 -0400] Server:[nginx] Via:[1.1 ab5e6646c9366e9d37d7495e5d416b28.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[1UjwMIhgzN63ug_LQpHSX3qE-fkoe5Yd9u52JZSDtmIgb7ExDD91kg==] X-Amz-Cf-Pop:[JFK52-P6] X-Cache:[Hit from cloudfront]]
```

## justgiving.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[25] Cache-Control:[public, max-age=60] Connection:[keep-alive] Content-Length:[3763] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:39 GMT] Etag:["5ccfba8338195771d8c30ecc05a80b05"] Last-Modified:[Thu, 04 Sep 2025 07:03:10 GMT] Referrer-Policy:[same-origin] Server:[AmazonS3] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Via:[1.1 26512aa427c30d93015b4bde75974708.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[8iLnGx0338pDbICnBNj2b4rPTmUa-kDtJRoqTxcVFXADcsYviGRi6g==] X-Amz-Cf-Pop:[JFK50-P15] X-Amz-Server-Side-Encryption:[AES256] X-Amz-Version-Id:[HLLUDBb4iNLpM_1V1IFtjp93EceKHkHM] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## www.livejournal.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Cache-Control:[private, proxy-revalidate] Connection:[keep-alive] Content-Md5:[gz37yhHvJOQFjwdI/sj2KA] Content-Security-Policy:[default-src 'self' *.livejournal.com *.livejournal.net *.dsp-rambler.ru *.google.com google.com *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru *.tiktok.com tiktok.com *.youtube.com youtube.com; script-src 'self' *.livejournal.com *.livejournal.net *.24smi.net *.adfox.ru *.adlooxtracking.com adlooxtracking.com *.adlooxtracking.ru adlooxtracking.ru ad.mail.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org cdn.jsdelivr.net cdnjs.smi2.ru *.cdn-vk.ru content.adriver.ru *.criteo.com *.criteo.net *.doubleclick.net *.dropbox.com dsp-rambler.ru *.dsp-rambler.ru embed.bsky.app *.exelator.com *.facebook.com *.facebook.net gist.github.com googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.google.ru *.googlesyndication.com *.googletagmanager.com googletagmanager.com *.googletagservices.com *.gstatic.com *.instagram.com js.mamydirect.com *.lj.ru mc.yandex.com mc.yandex.ru *.newrelic.com *.nr-data.net *.ok.ru openstat.net pingback.giphy.com *.pingdom.com *.pingdom.net *.pinterest.com *.plista.com privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg r.mradx.net *.rnet.plus *.rubiconproject.com r.webturn.ru *.scorecardresearch.com sdk.canva.com *.services.livejournal.com smi2.ru ssl.p.jwpcdn.com static.smi2cdn.ru static.smi2.net static.xx.fbcdn.net stat.media telegram.org tiktokcdn-us.com *.tiktok.com tiktok.com tns-counter.ru *.top100.ru top-fwz1.mail.ru tpc.googlesyndication.com *.ttwstatic.com twemoji.maxcdn.com *.twimg.com *.twitter.com *.videos.livejournal.com vk.com *.vk.com vk.ru *.vk.ru *.weborama.fm weborama.fm *.weborama.fr weborama.fr *.weborama.ru weborama.ru *.weborama-tech.ru weborama-tech.ru *.webturn.ru *.webvisor.org *.yahooapis.com *.yandex.ru yandex.ru yastatic.net ymetrica.com *.youtube.com youtube.com z.moatads.com 'unsafe-inline' 'unsafe-eval'; style-src http: https: data: 'unsafe-inline'; img-src blob: http: https: data:; frame-src http: https:; font-src http: https: data:; connect-src 'self' *.livejournal.com *.livejournal.net ad.adriver.ru ad.mail.ru *.ad-tech.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org *.criteo.com csi.gstatic.com data00.adlooxtracking.com dsp-rambler.ru *.dsp-rambler.ru *.eaglecdn.com export-download.canva.com sdk.canva.com *.g.doubleclick.net googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.googletagmanager.com googletagmanager.com graph.facebook.com gstatic.com *.lj.ru lj.stat.eagleplatform.com mc.yandex.by mc.yandex.com mc.yandex.md mc.yandex.ru pingback.giphy.com *.pingdom.net privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg *.rnet.plus *.services.livejournal.com *.ssp.rambler.ru ssp.rambler.ru static-mon.yandex.net static.xx.fbcdn.net stat.media stats.g.doubleclick.net smi2.net smi2.ru sve.online.sberbank.ru *.tiktok.com tiktok.com top-fwz1.mail.ru *.twitter.com *.webturn.ru *.webvisor.org wss://www.livejournal.com yandexmetrica.com yandexmetrica.com:29010 yandexmetrica.com:30103 *.yandex.net *.yandex.ru yandex.ru yastatic.net ymetrica1.com ymetrica.com *.youtube.com youtube.com; report-uri https://www.livejournal.com/csp_reports; report-to livejournal; media-src http: https: blob: data: storage.mds.yandex.net; frame-ancestors 'self'; worker-src 'self' blob:; object-src 'self' blob: *.livejournal.net youtube.com *.youtube.com; child-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:45 GMT] Etag:[GgZzW/gz37yhHvJOQFjwdI/sj2KA] Keep-Alive:[timeout=50] P3p:[CP="NON DSP NID ADMa DEVa TAIa PSAa PSDa OUR IND UNI COM NAV"] Permissions-Policy:[browsing-topics=()] Referrer-Policy:[no-referrer-when-downgrade] Reporting-Endpoints:[livejournal="https://www.livejournal.com/csp_reports"] Server:[nginx] Set-Cookie:[luid=URNKAGjizblufhf2da71AgB=; expires=Thu, 31-Dec-37 23:55:55 GMT; domain=.livejournal.com; path=/; secure; samesite=none] Vary:[Accept-Encoding,ETag] X-Aws-Id:[3dt-ws05] X-Lj-Flow-Id:[aOLNuKMdseJYtscMcuODJAAAABk] X-Splittest:[none] X-Varnish:[863635630] X-Vws-Id:[3dt-varn02.lj.rambler.tech]]
```

## weather.com

```
200 OK
map[Access-Control-Allow-Credentials:[false] Access-Control-Allow-Headers:[*] Access-Control-Allow-Methods:[GET,POST,OPTIONS] Access-Control-Allow-Origin:[*] Access-Control-Max-Age:[86400] Akamai-Grn:[0.05643017.1759694265.39928e0f] Cache-Control:[max-age=0, no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:45 GMT] Etag:["17fba2-KHs87yY0l75iR0X0vOzJad/v/nA"] Expires:[Sun, 05 Oct 2025 19:57:45 GMT] Pragma:[no-cache] Property-Id:[TWC-WX-Prod] Set-Cookie:[ci=TWC-Locale-Group=US&TWC-Device-Class=mobile&X-Origin-Hint=PROD-AWS-Daybreak-home&TWC-Network-Type=wifi&TWC-GeoIP-Country=US&TWC-GeoIP-Lat=36.7522&TWC-GeoIP-Long=-76.2168&TWC-Privacy=usa-va&TWC-GeoIP-DMA=544&TWC-GeoIP-City=CHESAPEAKE&TWC-GeoIP-Region=VA; path=/; domain=.weather.com; secure gbuuid=9622daa7-a3ef-4578-925d-0fb0b4d9c585; Expires=Tue, 04 Nov 2025 19:57:45 GMT; Domain=.weather.com; Path=/ ] Strict-Transport-Security:[max-age=15552000; preload] Twc-Ak-Req-Id:[39928e0f] Twc-Device-Class:[mobile] Twc-Experiment:[e30=] Twc-Geoip-City:[CHESAPEAKE] Twc-Geoip-Country:[US] Twc-Geoip-Dma:[544] Twc-Geoip-Latlong:[36.7522,-76.2168] Twc-Geoip-Region:[VA] Twc-Locale-Group:[US] Twc-Path-Locale:[/] Twc-Privacy:[usa-va] Twc-Subs:[none] Twc-Unit:[u] Webcakes-App-Name:[daybreak-home] Webcakes-App-Version:[1.0.0-937cf4493b] Webcakes-Region:[us-west-2] X-Content-Type-Options:[nosniff] X-Dns-Prefetch-Control:[off] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-In-Ew-Prod:[True] X-Lma:[PS] X-Origin-Hint:[PROD-AWS-Daybreak-home] X-Xss-Protection:[1; mode=block]]
```

## themeforest.net

```
200 OK
map[Age:[1237] Cache-Control:[max-age=1800, public, stale-while-revalidate=300, stale-if-error=28800] Cf-Cache-Status:[HIT] Cf-Ray:[989f7d686bc56fb6-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:45 GMT] Etag:[W/"fea034b466ac40492739de0d1409bba7"] Link:[<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; type=text/css,<https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/search-header-05971474482f1a21d041838addc1f022fa748078e6e4d40f6f728e743231b234.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-dd57a83e1947d49586491f03d1c3eedc4c6a438d2740328c5277e6b67bc46ad9.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; nopush,<https://assets.market-storefront.envato-static.com/storefront/assets/datadog-63af54d672d0e3f0dca938d8e51990edb7cd6b1287f2aee19557c5af87f6a7c3.js>; rel=preload; as=script; crossorigin=anonymous; nopush] Referrer-Policy:[strict-origin-when-cross-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=QVAKDETjdTSuTBFXcZkTRZxnGt0f.3heJmOLy.NV13Q-1759694265-1.0.1.1-bWmnJ0RVhlVc3xixcnEpVpxIIR_RaYkIVJpp1xOBTFGa5sPp96SIjuTayR46krkExocH017fjYlOceyLWOBAPT4nxaB77QzRDl2RL3vNmWM; path=/; expires=Sun, 05-Oct-25 20:27:45 GMT; domain=.themeforest.net; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000] X-Content-Digest:[55f1b9a966d347b00eaaea27fd9afa9892d8f902] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Permitted-Cross-Domain-Policies:[none] X-Rack-Cache:[stale, invalid, store] X-Request-Id:[e5f4906a-4e66-461d-93bb-fd1c0648d6d8] X-Runtime:[0.216610] X-Xss-Protection:[0]]
```

## bestfreecams.club

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f7d6a1ec77faa-IAD] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:57:46 GMT] Last-Modified:[Sun, 17 Jan 2021 11:50:09 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BerrqlDqhWq97McAieeBVxm9LFUAqxcaYPdnfX9Gctb3qsbUN%2BgDbiRHReOVj1Wz7L86SGAiV2T8IxGZK58mcAkzFP%2BZuksWSnRuDes0jOAOvkpwhg%3D%3D"}]}] Server:[cloudflare] X-Amz-Id-2:[KUd5ZTxPt6gPYU1Ofig2TETxsxshMOpBL/DJZ9jrBg2R/ME0BFjDyExXv88X1Pe7nx4hmadlpKg=] X-Amz-Request-Id:[2V2PHWR4D0RC1D6M]]
```

## scmp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=5, stale-while-revalidate=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f7d6b4c71b506-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'none'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:46 GMT] Last-Modified:[Sun, 05 Oct 2025 19:56:55 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=1z3W7w9YSmKqXrj_1ga7gdDDBiSC.t.cG51oBPho_bA-1759694266-1.0.1.1-Rfn_lIquxCdWmU6Y2Z7r4WAEartYcfDIqhrMVgjepwzqPAfZXap5wO1dBlWrGrYngeTqAQ7E63NxPCzJ5.oBai0gAa36arfsXPE2CSmDoAc; path=/; expires=Sun, 05-Oct-25 20:27:46 GMT; domain=.scmp.com; HttpOnly; Secure; SameSite=None] Vary:[Accept-Encoding] X-Cache-Control:[public, max-age=60, stale-while-revalidate=3600] X-Cached-By:[production-varnish-scmp-pwa-v2-6479c54978-jrfqg] X-Content-Encoding:[br] X-Hits:[1] X-Url:[/]]
```

## techcrunch.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Methods:[*] Access-Control-Allow-Origin:[https://techcrunch.com] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' *.techcrunch.com; frame-ancestors 'self'; frame-src 'self' https: data:; style-src 'self' 'unsafe-inline' *; img-src 'self' * data:; connect-src 'self' https:; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; worker-src 'self' blob:; media-src 'self' *.youtube.com *.jetpackdigital.com; font-src 'self' * data:; upgrade-insecure-requests; block-all-mixed-content; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:46 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://techcrunch.com/wp-json/>; rel="https://api.w.org/"] Permissions-Policy:[autoplay=(), camera=(), fullscreen=*, geolocation=*, display-capture=(self), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Server:[nginx] Strict-Transport-Security:[max-age=300;includeSubdomains] Vary:[Accept-Encoding, Origin] X-Cache:[HIT] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 181 253 80]]
```

## gizmodo.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, no-store, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f7d708ac68266-IAD] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'self'] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:57:46 GMT] Last-Modified:[Sun, 05 Oct 2025 19:20:00 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[autoplay=(*), fullscreen=(*), accelerometer=(*), geolocation=(*)] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zHHfqqx7RkIoQmSkk4FKjwK9YGOHKDzAr%2BdZElqzvdnsGbjpxhM55Gu5XjboBXyt4x02pZzoG2vsGJGBIQo5cMSNt2i%2FMzECryk%3D"}]}] Server:[cloudflare] Server-Timing:[cfCacheStatus;desc="DYNAMIC" cfEdge;dur=4,cfOrigin;dur=5] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding, Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Rocket-Nginx-Serving-Static:[Yes]]
```

## metro.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:57:47 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://metro.co.uk/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[MISS] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca5 0 10 9980]]
```

## indiatimes.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=619] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' *.indiatimes.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:57:47 GMT] Expires:[Sun, 05 Oct 2025 20:08:06 GMT] Geo-Info:[Country:US;Continent:NA] Permissions-Policy:[ch-ua=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-model=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-mobile=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform-version=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com")] Server:[Bhoot] Strict-Transport-Security:[max-age=25920000; includeSubdomains] X-Content-Header:[gzip] X-Frame-Options:[sameorigin] X-Xss-Protection:[1; mode=block]]
```

## tinyurl.com

```
524 
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Ray:[989f7d956d91e644-IAD] Connection:[keep-alive] Content-Length:[15] Content-Type:[text/plain; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:59:53 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Referrer-Policy:[same-origin] Server:[cloudflare] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Frame-Options:[SAMEORIGIN]]
```

## amazon.es

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:59:53 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[session-id=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT session-id-time=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT session-token=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT ubid-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT lc-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT x-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT x-wl-uid=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT sess-at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT UserPref=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:59:53 GMT] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA-SEARCH,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-DP-LRA,Accept-Encoding,User-Agent] Via:[1.1 647098687aa27f1612d8734bab49cefa.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[WyKFIaFaVT9SLO6xKRElu0Wyyd6H1irsHY-a8_PWGGthJcsvQ3wlDw==] X-Amz-Cf-Pop:[IAD61-P7] X-Amz-Rid:[X5EFGPATXE0XJTDH7RRN] X-Cache:[Error from cloudfront] X-Frame-Options:[SAMEORIGIN]]
```

## smh.com.au

```
200 OK
map[Accept-Ch:[sec-ch-ua-model,sec-ch-ua-platform-version] Accept-Ranges:[bytes] Age:[49] Cache-Control:[public, max-age=20, no-transform] Connection:[keep-alive] Content-Length:[1210212] Content-Security-Policy:[frame-ancestors 'self' *.ffxblue.com.au *.ffx.io *.smh.com.au *.theage.com.au *.brisbanetimes.com.au *.watoday.com.au *.cdn.ampproject.org *.platform.ink; upgrade-insecure-requests] Content-Security-Policy-Report-Only:[child-src blob: data: https:; connect-src https: wss:; default-src blob: data: https: 'report-sample' 'unsafe-eval' 'unsafe-inline'; font-src data: https:; form-action https:; frame-src data: https:; img-src blob: data: https:; media-src blob: data: https:; object-src https:; script-src https: 'unsafe-eval' 'unsafe-inline'; style-src https: 'unsafe-inline'; report-uri https://csp.ffx.io/; report-to csp-endpoint] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:59:53 GMT] Permissions-Policy:[camera=(), geolocation=(), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"endpoints":[{"url":"https://csp.ffx.io/"}],"group":"csp-endpoint","include_subdomains":true,"max_age":7884000}] Strict-Transport-Security:[max-age=31536000] Uber-Trace-Id:[e7eff1723e1c903b:e7eff1723e1c903b:0:1] Vary:[Accept-Encoding, app-vary, app-vary] Via:[1.1 varnish, 1.1 varnish] X-Brand-Short-Name:[smh] X-Cache:[MISS, HIT, HIT] X-Cache-Hits:[0, 5, 1] X-Content-Type-Options:[nosniff] X-Frame-Options:[sameorigin] X-Render-Name:[rw] X-Served-By:[cache-syd10145-SYD, cache-syd10173-SYD, cache-iad-kiad7000023-IAD] X-Varnish-Grace:[none] X-Xss-Protection:[0]]
```

## zendesk.com

```
200 OK
map[Age:[1925] Cache-Control:[public, max-age=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f808a6a91d678-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src * wss://*.zopim.com 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' app.optimizely.com *.zendesk.com *.zendesk.co.jp *.zendesk.co.uk *.zendesk.com.br *.zendesk.com.mx *.zendesk.de *.zendesk.es *.zendesk.fr *.zendesk.kr *.zendesk.nl *.zendesk.tw *.zendesk.hk; font-src * data:; img-src * data:; media-src * blob:;worker-src 'self' blob:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:59:54 GMT] Expires:[Sun, 05 Oct 2025 20:59:54 GMT] Last-Modified:[Sun, 05 Oct 2025 19:27:49 GMT] Link:[<https://web-assets.zendesk.com>; rel=preconnect, </scripts/adobe-websdk.js>; rel=preload; as=script] Nc:[T] Server:[cloudflare] Set-Cookie:[__cf_bm=tW_vnjyJja.bkwv5g07b1osrIXtqF7wrIsjaWLjV8Rk-1759694394-1.0.1.1-0sJc72Mfx4Wl7v4AT3HsqhLM6rboW4VEZq3SjOpZwjvM3DF6SygOmwmyz6M0.p_nB2dz4aa8k3n4IqYg0nYBdSZKDrkPJH0NelPNLoJWwbM; path=/; expires=Sun, 05-Oct-25 20:29:54 GMT; domain=.www.zendesk.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=0; preload] X-Content-Type-Options:[nosniff]]
```

## gravatar.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, must-revalidate, max-age=0] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src gravatar.com *.gravatar.com; script-src gravatar.com *.gravatar.com *.wp.com *.google-analytics.com *.googletagmanager.com *.facebook.net apis.google.com/js/ 'nonce-e6a6f8d220c1' 'nonce-8d59ec73bc6e' telegram.org/js/; style-src 'self' gravatar.com *.gravatar.com *.wp.com fonts.googleapis.com 'nonce-8d59ec73bc6e' 'nonce-009eb59a7f82' 'sha256-NE3gBSsVG0IdyINKOXv7oHDjOD1hoJpOCZQDS8LzvUc=' 'sha256-biLFinpqYMtWHmXfkA1BPeCY0/fNt46SAZ+BBk5YUog=' 'sha256-ONA8DqqhBTsIrZzU3/jZyRdkNkkAGEU74EH252dbGS8=' 'sha256-uYx4ryugsGdahnaIId0IhtdPIgBkKBfNZg2/H0eWhqk=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-xi7Iu5TcqJkb4mlu0FHpAYfWWCETn5kNH3GPA4Coh4M=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-YrOy05n87EW8L5yLZin6THAZq/8Vb6v4uqVq1nOY9X8=' 'sha256-Fw2RK+YpRih15zbXuAaoQAV98ZS+OLAX6wDQ2AkaEho=' 'sha256-t9/679CRyrVA6r3JGaAzcO+diam/7WLn6KXJHJuOzUI=' 'sha256-h0RPO0+/L+WC46JS6RvM6D3KN9C2LfMai6hxwzVFU2k=' 'sha256-YIktaUP7IBRwVksGEOmRykAcO2jHTw97BHns4OnHTIw=' 'sha256-MSTZvl0psO46WYZImeDzGMr7OqGRUy5RPDaeL19QpBk='; font-src data: gravatar.com *.gravatar.com *.wp.com fonts.gstatic.com; img-src data: https: blob:; media-src https://videos.files.wordpress.com/ s.gravatar.com blob:; frame-src gravatar.com *.gravatar.com automattic.crowdsignal.net widgets.wp.com td.doubleclick.net www.googletagmanager.com oauth.telegram.org; connect-src gravatar.com *.gravatar.com *.wp.com data: blob: *.google-analytics.com *.analytics.google.com analytics.google.com googleadservices.com www.googleadservices.com google.com https://public-api.wordpress.com/ *.pexels.com *.giphy.com *.google.com stats.g.doubleclick.net; object-src 'none'; base-uri 'self'; report-uri https://public-api.wordpress.com/csp/; worker-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:59:59 GMT] Expires:[Wed, 11 Jan 1984 05:00:00 GMT] P3p:[CP="CAO PSA"] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload] Vary:[Accept-Encoding] X-Frame-Options:[SAMEORIGIN]]
```

## googleblog.com

```
200 OK
map[Access-Control-Allow-Origin:[*] Content-Language:[en-us] Content-Length:[0] Content-Security-Policy:[media-src 'self' data: *.gstatic.com storage.googleapis.com *.googlevideo.com; object-src 'none'; require-trusted-types-for 'script'; frame-src 'self' www.google.com *.youtube.com youtube.com accounts.google.com *.doubleclick.net apis.google.com optimize.google.com *.google.com *.cdn.ampproject.org https://www.gstatic.com/ https://www.youtube-nocookie.com/; img-src * data: blob:; base-uri 'none'; default-src 'self' *.gstatic.com storage.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com *.gstatic.com storage.googleapis.com *.google.com cdn.ampproject.org; connect-src 'self' cdn.ampproject.org *.google.com storage.googleapis.com https://services.google.com/fb/submissions/thekeywordtest/ https://services.google.com/fb/submissions/0a65d7733e1f11ea9701614fc033d30c/ *.gstatic.com gstatic.com *.cdn.ampproject.org *.doubleclick.net https://readaloud.googleapis.com/ *.google-analytics.com https://www.youtube.com/; script-src 'self' 'strict-dynamic' 'unsafe-inline' *.googleanalytics.com *.google-analytics.com *.youtube.com youtube.com optimize.google.com https://s.ytimg.com *.googletagmanager.com storage.googleapis.com *.googleapis.com *.google.com cdn.ampproject.org *.gstatic.com gstatic.com googleadservices.com *.googleadservices.com 'sha256-hdPneczWRi+c9LQVo+PzNzlNr9TacChC0CW0fiDBHkI=' 'sha256-DE/j4w1a1HDIXysWgFTrJCJK6JWEcHqScfyMr9zq9R4=' 'sha256-Ehy9lGqrTi8OqqWxX1HN6hKJT7iwwYMFJ+HLjpEobO0=' 'sha256-s/yvuH0ZHyO+7N8dM5CshPem4K1PknDExYN18xHq0LI=' 'sha256-MWQdkIAX5J//suH1t5P3PFFwFUiphY0PxD6VVzbBehQ=' 'sha256-587vJAV9t9k86IMQixmyKa7lbPaDhkGzrJsdngtoiAA=' 'sha256-nlbIOie3vmdUUZjQFDMa7iipxS6Qst8pPhTLjibMsRk=' 'sha256-+LJ+tgqOXIri3+D/uJC785tov3eXewv8x+Pkenx+3Z8=' 'sha256-PnD9J8UK8zpwVizQXkEtbZOvTiv9C/05Nn81NEwPBoQ=' 'sha256-LH1mE8uiAlSGs6/ejmL47sTk8G+/Hh6T1ydVxa0idaM=' 'sha256-GuPeLJgWIkkS7hCKcSc+mQs6jTN0D8QzfW624B4OMME=' 'sha256-CDqe41szG4ZmAxS54wSNKisRTrwu1wxcuRQv09PB3Nk=' 'sha256-Xyk5Ei/Yh7DuZgaxNfbPswkpmMKHk5Jy18vkxjfPMj0=' 'sha256-Q+8W9SyZ6wnayM05rLv0YuHooUH/nnzpE2XQZJ/ekjY=' 'sha256-1lOrojGb+aoV56bZpsODLpb+j+HHbONNEpX/YqVtiUU=' 'sha256-sAsQphoZozaLVFpcda3bvT5euqcGL4MqVnizAR+Xla4=' 'sha256-ZlqdbaXB1F4Evuv/nmY3QGBLFBbrfiNndyYxbgdQn7g=' 'sha256-OEwIbDcQTxJYhU2ONmKA0LutIDdkmge2c+9IPFv5vFE='; font-src 'self' themes.googleusercontent.com *.gstatic.com https://fonts.gstatic.com storage.googleapis.com fonts.googleapis.com *.cdn.ampproject.org] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:59:59 GMT] Server:[Google Frontend] X-Cloud-Trace-Context:[16d23b3c3ce506f0ba371894a356e32d]]
```

## uol.com.br

```
200 OK
map[Cache-Control:[no-transform, max-age=10, must-revalidate, proxy-revalidate] Connection:[keep-alive] Content-Length:[791238] Content-Security-Policy:[frame-ancestors 'self' *.intranet *.uolinc.com;] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:00 GMT] Etag:["1973c56eb9a4bf75b866664b99071482"] Expires:[Sun, 05 Oct 2025 20:00:10 GMT] Last-Modified:[Sun, 05 Oct 2025 19:59:48 GMT] Referrer-Policy:[no-referrer-when-downgrade] Server:[marrakesh 1.25.0] Strict-Transport-Security:[max-age=31536000; includeSubDomains] Vary:[Accept-Encoding,User-Agent] Via:[1.1 1e14f05fcabcaf0bb797410b0eab65c8.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[iwlNodI1zdAlDkIhoXRNNWFsESe7BsIVky4rl2k2WHcF_h-ZPEMU4A==] X-Amz-Cf-Pop:[IAD61-P8] X-Cache:[Miss from cloudfront]]
```

## disney.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=0] Content-Length:[366] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:01 GMT] Expires:[Sun, 05 Oct 2025 20:00:01 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] X-Origin:[Matterhorn_TLS]]
```

## taringa.net

```
200 OK
map[Accept-Ranges:[bytes] Age:[44551] Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Length:[5524] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 07:37:31 GMT] Etag:["dad326e0c72e97f50d1f97bd43485350"] Last-Modified:[Thu, 10 Oct 2024 14:30:42 GMT] Server:[AmazonS3] Via:[1.1 0f733baa3281c4651a54c2246e3e0d4e.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[4a7YV-KhdVVH5hrG7Mj-JZeNOcnLN8iI8NKZCRf87fCpGE_buyVEzg==] X-Amz-Cf-Pop:[IAD61-P10] X-Amz-Server-Side-Encryption:[aws:kms] X-Amz-Server-Side-Encryption-Aws-Kms-Key-Id:[arn:aws:kms:us-east-1:746669208358:key/e6ff8e56-eef8-4594-92b3-60c63580f79c] X-Amz-Server-Side-Encryption-Bucket-Key-Enabled:[true] X-Cache:[Hit from cloudfront]]
```

## sky.com

```
200 OK
map[Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[default-src 'none';  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.com *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.taggstar.com *.tvsquared.com *.yext-pixel.com *.yimg.com *.zenaps.com aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.tiktok.com analytics.twitter.com android-webview-video-poster: answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com assets.sitescdn.net bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com c5.adalyser.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.co-buying.com cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.tt.omtrdc.net cdnjs.cloudflare.com connect.facebook.net content.zeotap.com edge.adobedc.net https://cdn.prod.uidapi.com https://js.adsrvr.org ib.adnxs.com js-cdn.dynatrace.com js.smct.co js.smct.io lantern.roeyecdn.com maps.googleapis.com platform.twitter.com players.brightcove.net rules.quantcount.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com secure.quantserve.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io static.ads-twitter.com tagmanager.google.com the.sciencebehindecommerce.com unpkg.com vjs.zencdn.net www.dwin1.com www.facebook.com www.googleadservices.com www.gstatic.com yahoo.com;  style-src 'self' 'unsafe-inline' *.clicktale.net *.contentsquare.net *.doubleclick.net *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.sky.com *.skyassets.com assets.adobedtm.com assets.sitescdn.net fonts.googleapis.com players.brightcove.net s0.2mdn.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com tagmanager.google.com www.facebook.com www.googletagmanager.com www.gstatic.com;  font-src 'self' data: *.google.co.uk *.google.com *.google.ie *.intercomcdn.com *.kampyle.com *.medallia.eu *.sky.com *.skyassets.com *.snapchat.com fonts.gstatic.com fonts.smct.co fonts.smct.io players.brightcove.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com use.typekit.net www.pinterest.com;  img-src 'self' android-webview-video-poster: data: *.akamaihd.net *.atdmt.com *.awin1.com *.boltdns.net *.brightcove.com *.brightcovecdn.com *.clicktale.net *.cloudfront.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.gumgum.com *.intercom.io *.intercomassets.com *.intercomassets.eu *.intercomcdn.com *.intercomcdn.eu *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.mktgcdn.com *.online-metrix.net *.optimizely.com *.qualtrics.com *.reddit.com *.sky *.sky.com *.skyassets.com *.snapchat.com *.tvsquared.com *.yahoo.com *.yext-pixel.com *.zenaps.com 8th.io aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net ade.googlesyndication.com adservice.google.com analytics.tiktok.com analytics.twitter.com api.branch.io api2.branch.io app.link assets.adobedtm.com bat.bing.com c.amazon-adsystem.com c5.adalyser.com cdn.branch.io cdn.privacy-mgmt.com cdn.smct.co cdn.smct.io cdn.spatialbuzz.com cms.quantserve.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net ep.smct.co ep.smct.io events.smct.co ib.adnxs.com lantern.roeye.com live.staticflickr.com maps.googleapis.com maps.gstatic.com match.adsrvr.org mwzeom.zeotap.com pixel.quantserve.com players.brightcove.net pm.w55c.net px.smct.co px.smct.io s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io ssl.gstatic.com t.co tags.w55c.net tracking.audio.thisisdax.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.com;  connect-src 'self' android-webview-video-poster: blob: *.akamaihd.net *.akstat.io *.analytics.google.com *.assistant.watson.appdomain.cloud *.bf.dynatrace.com *.boltdns.net *.brightcovecdn.com *.bskyb.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.intercomcdn.eu *.intercomusercontent.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.reddit.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.taggstar.com *.tvsquared.com *.wepowerconnections.com *.yext-pixel.com *.yext.com *.yextapis.com *.yimg.com aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net analytics.tiktok.com api.amplitude.com api.amplitude.com api.branch.io api.iperceptions.com api.taggstar.com api2.branch.io app.link assets.adobedtm.com awk.epgsky.com bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.taggstar.com cfg.smct.co cfg.smct.io cognito-identity.eu-west-1.amazonaws.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net edge.adobedc.net edge.api.brightcove.com ep.smct.co ep.smct.io faro-collector-prod-eu-west-0.grafana.net firehose.eu-west-1.amazonaws.com https://*.google.com https://*.prod.uidapi.com https://prod.uidapi.com ib.adnxs.com insight.adsrvr.org ipb.smct.co ipb.smct.io ipl.smct.co ipl.smct.io js.smct.co js.smct.io maps.googleapis.com match.adsrvr.org mwzeom.zeotap.com paa-reporting-advertising.amazon pagead2.googlesyndication.com players.brightcove.net pm.w55c.net poc.idscan.cloud prod.idscan.cloud qa.taggstar.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io spl.zeotap.com the.sciencebehindecommerce.com vip.timezonedb.com wss://*.liveperson.net wss://*.sky.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.co.uk www.pinterest.com www.zenaps.com;  frame-src 'self' blob: *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.online-metrix.net *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.zenaps.com 12660277.fls.doubleclick.net 1580034.fls.doubleclick.net 3662759.fls.doubleclick.net 6993240.fls.doubleclick.net aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.twitter.com answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com c.amazon-adsystem.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com connect.facebook.net ct.pinterest.com d2d7do8qaecbru.cloudfront.net dmp.v.fwmrm.net ib.adnxs.com insight.adsrvr.org lantern.roeye.com live.tvgenius.net ls.smct.co ls.smct.io match.adsrvr.org paa-reporting-advertising.amazon players.brightcove.net pm.w55c.net s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com smct.co smct.io td.doubleclick.net universal.iperceptions.com w.etadirect.com www.facebook.com www.googleadservices.com www.googletagmanager.com www.pinterest.co.uk www.pinterest.com;  frame-ancestors 'self';  worker-src blob: 'self' *.liveperson.net *.sky.com *.skyassets.com assets.adobedtm.com;  child-src 'self' blob: *.intercom-sheets.com;  media-src 'self' blob: data: *.akamaihd.net *.boltdns.net *.brightcovecdn.com *.cf.brightcove.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.intercomcdn.com *.liveperson.net *.lpsnmedia.net *.media.brightcove.com *.sky.com *.skyassets.com assets.adobedtm.com bat.bing.com www.facebook.com;  object-src 'self' *.sky.com;  form-action *.intercom.help *.intercom.io;  report-uri /csp-reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:01 GMT] Etag:["13bx9h5ogn35tnn"] Expires:[Sun, 05 Oct 2025 20:00:01 GMT] Link:[<https://stage.static.skyassets.com>; rel="preconnect"] Pragma:[no-cache] Server:[Google Frontend] Set-Cookie:[countryAKA=other; path=/; domain=.sky.com; secure optimizelyEndUserId=5da88e8f73dde59d671f97b7188eebf1; expires=Fri, 03-Apr-2026 20:00:01 GMT; path=/; domain=.sky.com _abck=E280B5B1A3A651E631FF5050BF852BB1~-1~YAAQalXIF3oFCZuZAQAA8bD1tQ7Sz8bBxkq7gx+ILOfmdzdUr0G8lJWnTxdS5rwLxfShQUxw8xgUfthcqgXgcktMcIn35ukA5yxmtnPexB7EPh0J007ZfDn/gnyHsGTXUgp411bABvZBEJ6ELGYFMcnxZY3y7zXiojbutEsyh97zSdcRe48QojjF7N3WERvHJY18OwLIezMrxbtkRQ+kpi2mAs/dRWuKdee95CxC9lr4+RfrPG0Wv2sPp3g9QGS7EO1FGQKai9MAytnqK1JT85a1xnq5cDVdCPXNZlK2wmWMMF8xL399agdXC4Fu1MabHylGfz2WB17xX1Bq3HIBDbITgWJTCO0X9/D8LAEngSmtA7exYMsv0w9adBcRJjzcWbTU5v/ltw2EaJqtXNtdJmQaFgDdvZoS8JBDYc4YI2i6jrf1CblZ1L24oLXVWjEPQy8Brfd5/0m4rKHBE47XbKc=~-1~-1~-1~-1~-1; Domain=.sky.com; Path=/; Expires=Mon, 05 Oct 2026 20:00:01 GMT; Max-Age=31536000; Secure bm_sz=983FCC85F8617576F9C0C55354114E2A~YAAQalXIF3sFCZuZAQAA8bD1tR24P9ydzVFnk8zjifRx1uVLt3IunCvLyIRg5774kvNahuyr69WhW8O29xtpQWIU+P5DADqTvbOXKBjW5oTWqmAtwb+XfBH2TqMeJ93+qO7nHhRwUbLZ9j4tmnbw5hUqseYPNqE0968xkHo529acYyB+0Pyu2bmhx90R4lGf8J3F93IyyJKUxVW2qLhn92etXNj7jWPoPlGCmX5/C7C8QySGrqndiysV8Guwa1MqLhXMONjm8GaJ/6Dvi/dYtuR4Utu6KOleE75jhsmRKJlCM2z6x7rQhanlvRVefEtU7SspJtTTozkb+WDVOQocd39GF+YstpYbyg==~3490868~4468789; Domain=.sky.com; Path=/; Expires=Mon, 06 Oct 2025 00:00:01 GMT; Max-Age=14400] Strict-Transport-Security:[max-age=63072000; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Powered-By:[Next.js] X-Queueit-Connector:[akamai]]
```

## newyorker.com

```
200 OK
map[Age:[548] Alt-Svc:[h3=":443"; ma=86400] Back-Lae-Origin-Response-Start:[1759693858482] Cache-Control:[stale-while-revalidate=60, stale-if-error=86400, s-maxage=900] Connection:[keep-alive] Content-Length:[2266735] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:58 GMT] Modified-At:[1759684334] Server:[CloudFront] Set-Cookie:[xid1=1; Expires=Sun, 05 Oct 2025 20:00:21 GMT; Domain=.newyorker.com; path=/; CN_segments=co.w2541; Expires=Fri, 03 Apr 2026 20:00:06 GMT; Domain=.newyorker.com; path=/; CN_xid_refresh=23844a9a-e075-46a9-866b-4492df180aff; Expires=Mon, 05 Oct 2026 20:00:06 GMT; Domain=.newyorker.com; path=/; Secure; httponly; SameSite=None; CN_xid=23844a9a-e075-46a9-866b-4492df180aff; Expires=Fri, 03 Apr 2026 20:00:06 GMT; Domain=.newyorker.com; path=/; Secure; SameSite=None; CN_geo_country_code=US; Expires=Fri, 03 Apr 2026 20:00:06 GMT; path=/; Domain=.newyorker.com;  Secure; SameSite=None;] Vary:[accept-encoding] Via:[1.1 7225c7fb64d09bab64bc17e314ef26a2.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[0X91bRbFkr1iEyaZ-_LIzxcStEDxis0wBH3GQXzhqnw4L01w-C1xBw==] X-Amz-Cf-Pop:[JFK50-P3] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Organization-Slug:[the-new-yorker] X-Ua-Device:[mobile]]
```

## depositfiles.com

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate] Content-Security-Policy:[frame-ancestors depositfiles.com *.depositfiles.com depositfiles.org *.depositfiles.org dfiles.eu *.dfiles.eu dfiles.com *.dfiles.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:07 GMT] Expires:[Thu, 19 Nov 1981 08:52:00 GMT] Pragma:[no-cache] Server:[nginx] Set-Cookie:[uprand=89594a16e02d7b5adf1aa2679d717b21; path=/; domain=.depositfiles.com] X-Frame-Options:[SAMEORIGIN]]
```

## intel.com

```
403 Forbidden
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Content-Length:[367] Content-Security-Policy:[frame-ancestors 'self' https://premiersupport.intel.com https://c0.avaamo.com *.intel.com; object-src 'self';] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:07 GMT] Expires:[Sun, 05 Oct 2025 20:00:07 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Set-Cookie:[detected_bandwidth=HIGH; path=/; domain=.intel.com; secure; HttpOnly src_countrycode=us; path=/; domain=.intel.com; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Grn:[0.8d0c0317.1759694407.5bbc0b7a] X-Xss-Protection:[1; mode=block]]
```

## thenai.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f80e11d7a658c-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 20:00:07 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f80e11d7a658c"] Set-Cookie:[__cf_bm=CF7fiQDSskgXxWom3QVfHPyCaGQcLwbVFn_6HUePCSQ-1759694407-1.0.1.1-e2a0MR1mem.cBSlFtv_1jA_l8ei806YC9PwRHbw6OYY8uqlnWUKvHQE62_IuC4SrJI55B75LBRnawhoOoncxmZbqN1cQ3hMnTXRS07WvMqk; path=/; expires=Sun, 05-Oct-25 20:30:07 GMT; domain=.thenai.org; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## sciencemag.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f80e3edd205a2-IAD] Content-Length:[8627] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 20:00:08 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f80e3edd205a2"] Set-Cookie:[__cf_bm=IBH.AuxeqUMdwE61p1NIWWHrd1sET6Nq5qK.bnMOuYk-1759694408-1.0.1.1-j6.eGgpTZVAV8M9MWuYBmEW96VauILi3ZMRl6n4ilfj4XrFUngghRlYKs6Amblljt9khzk53yTH6LsGxCEhuM8rT3lm3ryOHpQ.jIvxTeGg; path=/; expires=Sun, 05-Oct-25 20:30:08 GMT; domain=.www.sciencemag.org; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=15552000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## tmz.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Platform, Sec-CH-UA] Age:[71] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[max-age=30, public, s-maxage=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:08 GMT] Link:[<https://imagez.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://static.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://strike.fox.com>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect"] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-mobile=*, ch-ua-model=*, ch-ua-platform-version=*, ch-ua-platform=*, ch-ua=*] Referrer-Policy:[unsafe-url] Server:[Apache] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[CloudFront-Viewer-Country,CloudFront-Is-Mobile-Viewer,CloudFront-Is-Tablet-Viewer] Via:[1.1 649b4de6ebe50fb3c542f3d95c8ed8ba.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[E1GzLDdk5qM6TmvBfcI2Y7648ESX9YmoRVW7FrKfnsMbyUaROftXgQ==] X-Amz-Cf-Pop:[IAD89-C2] X-Cache:[Miss from cloudfront] X-Content-Type-Options:[nosniff] X-Fpc:[hit] X-Fpc-Key:[88f72662f8c1b3a6edd2e2adba09ff1d2bfa80f2d23f2ad38feb695258dd657b] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## draft.blogger.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[168646] Content-Security-Policy:[script-src  'nonce-iK8Y-aIBXHW7YRWGfqoOBw' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-hashes' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/blogger-tech; base-uri 'self'] Content-Type:[text/html] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="blogger-tech"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 20:00:14 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 06 May 2025 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"blogger-tech","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/blogger-tech"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## policies.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[require-trusted-types-for 'script';report-uri /_/IdentityPoliciesUi/cspreport script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/IdentityPoliciesUi/cspreport;worker-src 'self'] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 20:00:14 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/IdentityPoliciesUi/web-reports?context=eJwB-AAH_wq8ASoKGgBDKBoAsCK4Aqs6uwI3YOQCsHjmAjtH6AJP_OkCNtqXBdnflwXeYZgFhdnOBZPZzgXmis8F3_zPBTEg0gU_INIFchjUBYAY1AXRX9QF7qjUBaxC1QVJLdYFJUrXBWux1wXc1tcF8nrYBRB72AViB9kFcAfZBeOM2QWVcdoFNcHaBUPB2gXW39sFRgbcBbq63AXlx9wFYd_cBa3h3AUlp90F1ZtJBrbMSQbA9EkGQvRKBhuqSwZR9EwGEgwIzpyLxwYQyLiDgQEiKWJvcV9pZGVudGl0eXBvbGljaWVzc2VydmVyXzIwMjUwOTMwLjAwX3Aw8jdo7Q"] Server:[ESF] Set-Cookie:[NID=525=HGSFb9GVgTn5Zz6s3YymILPmO_ooAngjXrfVWrQCu74WpssllDXV6-dWo1sYtvX68nyauz2ts_E0jE0cVVnBFAoD8MkdbxL6VGHkAh3xZ0ytyfVayvYR55iVoLxOFgJOEnk76QvDtevoJznV7iPenpAqwo4g-Xrm9Wh4tEqL6Np4YkMNtDYMZ7Y4qV3czlAKZntN-WpjHPU3x13vPF7p; expires=Mon, 06-Apr-2026 20:00:14 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## reverbnation.com

```
200 OK
map[Cache-Control:[max-age=0, private, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:14 GMT] Etag:[W/"0353a1c6d71022a650107925332e7c36"] P3p:[CP="DSP ALL COR OUR SAMi UNRi CUR ADM TAI IVA IVD CONo BUS DEM UNI STA LOC NAV COM INT", policyref="/w3c/p3p.xml"] Rn-App-Events:[1] Server:[Apache] Set-Cookie:[_reverbnation_session=b3db7d079cb30a395413b07912469bdc; domain=.reverbnation.com; path=/; expires=Mon, 06 Oct 2025 08:00:14 GMT; secure; HttpOnly; SameSite=None] X-Digits-Of-Pi:[] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[591f7683-1b04-4cef-b897-5b4a55e22154] X-Runtime:[0.042235] X-Ua-Compatible:[IE=Edge,chrome=1] X-Xss-Protection:[1; mode=block]]
```

## independent.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Credentials:[true] Access-Control-Allow-Origin:[*] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Cache-Tag:[independent.co.uk,v11.22.0,us,section_1741,web_indy_prod_section_1741_publication_1,indy_prod,web_indy_prod,web_indy_prod_section_1741,web_indy_prod_publication_1,web_indy_prod_2025-10-05,web_indy_prod_2025-10-05_publication_1,web_indy_prod_us] Canary:[1] Connection:[keep-alive] Content-Language:[en] Content-Length:[355884] Content-Security-Policy:[default-src https: 'unsafe-inline' data: blob:; frame-src https: data:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; media-src https: 'unsafe-inline' data: blob:; img-src https: http: data: blob:; frame-ancestors https:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:19 GMT] Etag:[W/"56e2c-qzpuM+m1zPuGdkLnORCsY1x1dSo-gzip"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://static.independent.co.uk>; rel=dns-prefetch, <https://static.independent.co.uk>; rel=preconnect, <https://assets.the-independent.com>; rel=dns-prefetch, <https://assets.the-independent.com>; rel=preconnect] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 20:00:19 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 20:00:19 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 20:00:19 GMT ; esi-uuid=d65bdd25-afdf-4922-9636-aa5133eb5b88 ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 20:00:19 GMT ; esi-permutive-id=d65bdd25-afdf-4922-9636-aa5133eb5b88; Path=/ ; Secure ; Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 20:00:19 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 20:00:19 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 20:00:19 GMT ; esi-uuid=d65bdd25-afdf-4922-9636-aa5133eb5b88 ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 20:00:19 GMT ; esi-permutive-id=d65bdd25-afdf-4922-9636-aa5133eb5b88; Path=/ ; Secure ;] Speculation-Rules:[/speculationrules.json] Strict-Transport-Security:[max-age=63072000;  preload] Via:[1.1 varnish, 1.1 varnish] X-Backend:[flow-us] X-Cache:[MISS, MISS] X-Cache-Hits:[0, 0] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Head-Hash:[] X-Served-By:[cache-lga21963-LGA, cache-iad-kcgs7200174-IAD] X-Timer:[S1759694420.695139,VS0,VE293] X-Xss-Protection:[1; mode=block]]
```

## bp0.blogger.com

```
400 Bad Request
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1555] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:20 GMT] Server:[fife] Timing-Allow-Origin:[*] Vary:[Origin] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## mega.io

```
200 OK
map[Connection:[keep-alive] Content-Security-Policy:[default-src 'self' data: blob: *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io; script-src 'self' *.mega.co.nz *.mega.nz *.mega.io https://*.googletagmanager.com https://analytics.google.com *.hsadspixel.net *.hs-analytics.net js.hscta.net *.hubspot.com static.hsappstatic.net *.usemessages.com *.hs-banner.com *.hubspotusercontent20.net *.hubspot.net *.hscollectedforms.net *.hsleadflows.net *.hsforms.net *.hsforms.com *.hs-scripts.com *.hubspotfeedback.com feedback.hubapi.com data: blob:; connect-src *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com *.hubapi.com js.hscta.net *.hubspot.com *.hs-banner.com *.hscollectedforms.net *.hsforms.com; style-src 'self' 'unsafe-inline' *.mega.co.nz *.mega.nz *.mega.io *.hubspotusercontent20.net cdn2.hubspot.net data: blob:; frame-src 'self' *.megapay.nz mega: *.megaad.nz https://mega.nz/ https://mega.io/ *.hubspot.com *.hs-sites.com *.hubspot.net play.hubspotvideo.com *.hsforms.net *.hsforms.com; img-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hubspot.com js.hscta.net no-cache.hubspot.com *.hubspotusercontent20.net *.hubspot.net cdn2.hubspot.net *.hsforms.net *.hsforms.com; frame-ancestors 'self' https://mega.nz/; child-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hsforms.com;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:20 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000] X-Cache-Status:[HIT] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## box.com

```
200 OK
map[Aaa-Loc-Header:[US] Age:[206302] Alt-Svc:[h3=":443"; ma=86400] Box-Country:[US] Cache-Control:[max-age=30, public, s-maxage=2592000] Cf-Cache-Status:[HIT] Cf-Ray:[989f81301e1f56c8-IAD] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src * 'self' blob: data: 'unsafe-inline'; font-src 'self' data: fonts.googleapis.com fonts.gstatic.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:20 GMT] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Fri, 03 Oct 2025 10:32:02 GMT] Link:[<//assets.box.com>; rel=preconnect; crossorigin] Server:[cloudflare] Set-Cookie:[__cf_bm=ojRy2UlvO9a6kD8QJIp86L8lq.bIg0kitwNOLJlvrrY-1759694420-1.0.1.1-fzQ8hezO1eRLNYeVwp8ZLftbdIIP028hKPt9rKnvwKq0oTijTIU_eYj13Y6z1vqGDrDvHyuCTyM3nogb.0Iqegx2iMKSd3NvG0CA3KdlmGQ; path=/; expires=Sun, 05-Oct-25 20:30:20 GMT; domain=.box.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains; preload] Vary:[Cookie,Box-Country,X-Box-Geo-Country,X-Frame-Options,Accept-Encoding] Via:[varnish] X-Ah-Environment:[prod] X-Box-Geo-Country:[US] X-Cache:[HIT] X-Cache-Hits:[12] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[v-33642ecc-a044-11f0-8d6a-839da39d07d2] X-Xss-Protection:[1; mode=block]]
```

## ovh.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Origin:[*] Cache-Control:[public, must-revalidate, max-age=90] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:29 GMT] Vary:[Accept-Encoding] X-Cacheable:[Cacheable: miss] X-Cdn-Pop:[syd] X-Cdn-Pop-Ip:[139.99.229.0/27] X-Content-Type-Options:[nosniff] X-Frame-Options:[ORIGIN] X-Iplb-Instance:[54394] X-Iplb-Request-Id:[8B63E507:4BB6_C063418B:01BB_68E2CE5C_20C70F:4642] X-Request-Id:[21893855] X-Toujours-Debout-Branch:[B] X-Toujours-Debout-Location:[BHS] X-Xss-Protection:[1; mode=block]]
```

## nps.gov

```
200 OK
map[Access-Control-Allow-Origin:[*] Age:[362535] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[67534] Content-Type:[text/html;charset=UTF-8] Date:[Wed, 01 Oct 2025 15:18:14 GMT] P3p:[policyref="https://www.nps.gov/w3c/p3p.xml", CP="ALL DSP COR OTP PUB BUS OTC"] Pragma:[no-cache] Server:[Apache] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding] Via:[1.1 4719066e73f795d5204033c96dd0829a.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Ndr4Q2NHVOc1Uz1K2yVIQol1Fx1-EtGs9_anTrLJinpYXsIj8vMyLw==] X-Amz-Cf-Pop:[IAD61-P8] X-Cache:[Hit from cloudfront]]
```

## google.it

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-0rGb0J1zlgGCRx4CCCqGGQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:29 GMT] Expires:[Sun, 05 Oct 2025 20:00:29 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5uabiaGCvBFMm36emNS27Lom1QB5h9yfE_rkz4QenNFss1eSXz8oAY; expires=Fri, 03-Apr-2026 20:00:29 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=lax NID=525=kPWcRvYHeO2Yo4AbqgRhwQZ_wSnRlWxKVmIwTZH0EqMktWmOSFyn2ng_0tuE7Na9DX0Igpv32nzCLqUdBuLkwMuTWtjq5-AAh9g2CY-UPV5IlytmmNORAXIx9Ke8EJfWtc-oAW4ZitovDMXJjtV4ucvGKmSi89sbculSbgqhnzZrUb7E5_ouAUE3OiWSs1c8HBWUMAAServgmWtOFIJ3; expires=Mon, 06-Apr-2026 20:00:29 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## tvtropes.org

```
200 OK
map[Age:[179] Cache-Control:[public, s-maxage=180, max-age=0] Cf-Cache-Status:[HIT] Cf-Ray:[989f8168dfd1d143-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:29 GMT] Last-Modified:[Sun, 05 Oct 2025 19:57:22 GMT] Link:[<https://assets.tvtropes.org/design/assets/bundle.css?rev=8dc2ef2b86ce864f0e6e4b541bec2c2e99d9869a>; rel=preload; as=style;] Server:[cloudflare] Vary:[Accept-Encoding] X-Frame-Options:[DENY]]
```

## ok.ru

```
200 
map[Cache-Control:[private, no-cache, no-store, max-age=0] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:30 GMT] Expires:[Mon, 26 Jul 1997 05:00:00 GMT] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Server:[kittenx] Server-Timing:[tid;desc="HPCdGHzwRlNcAPk2a_Pj7xffQA16aQ",front;dur=9.527] Set-Cookie:[JSESSIONID=be966c3437acf2d65f38dd9069324aad7a33ad1a38ae754a.30bf17c3; Domain=.ok.ru; Path=/; HttpOnly bci=6837482789883905972; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 23:14:37 GMT; Domain=ok.ru; Path=/; HttpOnly _statid=1d47f539-9d5f-4bb7-baf2-f5a19fae3681; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 23:14:37 GMT; Domain=ok.ru; Path=/; HttpOnly ss_mo=PzSUf-9CDhBgycbeVe9jEiuhTY6grJMpqTpXUO18ciQD_0i5iXjBKe3uzVK0Tve1kHDjsJsMHnVS_jpqiJMbXlLx0oP7GNdicUs; Secure; Max-Age=86400; HttpOnly; SameSite=None; Domain=m.ok.ru] Vary:[Accept-Encoding accept-encoding] X-Trace-Id:[HPCdGHzwRlNcAPk2a_Pj7xffQA16aQ]]
```

## google.co.jp

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-f8mMxhyRIXteI3HPH3w8OQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:31 GMT] Expires:[Sun, 05 Oct 2025 20:00:31 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5uZwXhE7mzi5JhkYnS7T5v7BjDKrFwqH21IlDnGW-smZhAhk8GXNAU; expires=Fri, 03-Apr-2026 20:00:31 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=lax NID=525=YbET4uDNUHjtuzOdFl59z9xhRCSvS-KGdTkQA1xW4s0JCKWIiVTKxfGotd_pHqyFPxiEVoN1a3CmAmxd0zAkCIZTKtH1Lhd8KmiP72sZQwvgYF82PTonP3ypGACHqz0-23VNEzxumD8CgwzAmvcpeD_G6aa9EcQRItfuYQV6kPVQp0VaSK5ciEJLUfJBPKOurFdJFbni6Qz4ff1G4KDm; expires=Mon, 06-Apr-2026 20:00:31 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=none] X-Content-Security-Policy-Report-Only:[default-src https: data:; options eval-script inline-script; report-uri /csp_report] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## doi.org

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Encoding:[gzip] Content-Length:[7326] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:32 GMT] Etag:["db5a053ebfb0c722cf72a3597173d425"] Last-Modified:[Thu, 02 Oct 2025 08:16:33 GMT] Server:[AmazonS3] Via:[1.1 46d3157e794de0cde352e9914da1d37e.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[qzhjQOXV9e8HbPUiGT3sFgBy1tiQO-jGvol2-xySpspl8y-d_PekaQ==] X-Amz-Cf-Pop:[IAD55-P10] X-Amz-Meta-Md5chksum:[db5a053ebfb0c722cf72a3597173d425] X-Amz-Server-Side-Encryption:[AES256] X-Cache:[Miss from cloudfront]]
```

## tiktok.com

```
200 OK
map[Access-Control-Allow-Credentials:[true] Access-Control-Expose-Headers:[x-tt-traceflag,x-tt-logid] Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[report-uri https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns&ev_type=csp&p=KpZCFgIee2DS8vDgItQS4&v=19; report-to csp-endpoint; upgrade-insecure-requests; default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: bytedance: data: wss://*.tiktok.com wss://*.tiktokv.com wss://*.tiktokv.eu wss://tiktok.com wss://tiktokv.com *.adsintegrity.net *.akamaized.net *.amazonaws.com *.bing.com *.bitssec.com *.braintree-api.com *.braintreegateway.com *.bytedapm.com *.bytedgame.com *.bytehwm-row.com *.byteicdn.com *.byteintl.com *.byteintl.net *.byteintlapi.com *.byteintlstatic.com *.bytelemon.com *.byteoversea.com *.byteoversea.net *.bytevcloudapi.com *.capcut.com *.cloudflare.com *.ctfassets.net *.doubleclick.net *.evbuc.com *.eventim.de *.facebook.com *.facebook.net *.fbsbx.com *.fcdnstatic-intl.com *.fdmstatic.com *.g-p-static.com *.gauthmath.com *.giphy.com *.goofy-cdn.com *.goofy.app *.google.com *.googleadservices.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.hsforms.com *.hsforms.net *.ibytedtos.com *.ibyteimg.com *.isnssdk.com *.jumio.ai *.kakao.com *.lemon8-app.com *.lemon8cdn.com *.licdn.com *.linkedin.com *.midtrans.com *.muscdn.com *.musical.ly *.oecstatic.com *.omise.co *.pangle-ads.com *.paypal.com *.pipopay.com *.pipopayment.us *.redditstatic.com *.resso.me *.sgsnssdk.com *.soundon.global *.tableau.com *.tenor.com *.tiktok-row.net *.tiktok.com *.tiktok.ru *.tiktok.vn *.tiktokapis.com *.tiktokcdn-eu.com *.tiktokcdn-in.com *.tiktokcdn-us.com *.tiktokcdn.com *.tiktokcreativeone.com *.tiktokforbusinessoutbound.com *.tiktokglobalshop.com *.tiktokmusic.me *.tiktokshop.com *.tiktokstaticb.com *.tiktokus.info *.tiktokv.com *.tiktokv.eu *.tiktokv.us *.tiktokw.eu *.tiktokw.us *.topbuzzcdn.com *.ttcdn-us.com *.ttlivecdn.com *.ttlstatic.com *.ttwstatic.com *.vimeo.com *.vodupload.com *.yahoo.co.jp *.yhgfb-static.com *.youtube-nocookie.com *.zhiliaoapp.com api.music.apple.com code.jquery.com facebook.com google.com i.ticketweb.com images.universe.com media.ticketmaster.eu play.itunes.apple.com res.cloudinary.com s1.ticketm.net static-label.frontgatetickets.com static.captchami.com t.co tikitoks.com tiktok.com tiktok.ua tiktok.vn tiktokfollowersfree.com tiktokv.com unpkg.com vimeo.com; connect-src * 'unsafe-inline' blob: data:; frame-src bytedance: *.kakao.com *.tiktok.com access.line.me accounts.google.com api.twitter.com appleid.apple.com assets.braintreegateway.com client-api.arkoselabs.com h.online-metrix.net lf16-web.tiktokcdn.com newassets.hcaptcha.com recaptcha.google.com tx41v.arkoselabs.com www.facebook.com www.google.com; script-src 'inline-speculation-rules' 'report-sample' 'unsafe-eval' *.tiktokcdn-us.com apis.google.com billshark-cdn.s3.amazonaws.com c.paypal.com cdnjs.cloudflare.com client-api.arkoselabs.com connect.facebook.net developers.kakao.com googleads.g.doubleclick.net js-cdn.music.apple.com/musickit/v3/musickit.js js.braintreegateway.com js.hcaptcha.com js.hsforms.net recaptcha.google.com s20.tiktokcdn.com s3.amazonaws.com sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/bric-captcha-ttweb/core-captcha/ static.captchami.com tiktok.captchami.com tx41v.arkoselabs.com unpkg.com vimeo.com www.facebook.net www.google.com www.googleadservices.com www.googleapis.com www.googletagmanager.com www.gstatic.com www.vimeo.com; worker-src www.tiktok.com/business/sw.js www.tiktok.com/embed/sw.js www.tiktok.com/firebase-messaging-sw.js www.tiktok.com/help/sw.js www.tiktok.com/sw.js www.tiktok.com/tiktokstudio/static/worker/ www.tiktok.com/tiktokstudio/sw.js www.tiktok.com/web-static-js/ www.tiktok.com/webapp-desktop/static/worker/; frame-ancestors tea-va.bytedance.net www.tiktok.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:31 GMT] Expires:[Sun, 05 Oct 2025 20:00:31 GMT] Feature-Policy:[microphone 'none'; geolocation 'none'] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Reporting-Endpoints:[csp-endpoint="https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns"] Server:[nginx] Server-Timing:[inner; dur=80 cdn-cache; desc=MISS, edge; dur=17, origin; dur=111] Set-Cookie:[tt_csrf_token=bhC8XQkt-_dKrzlfD3fv8ngIlanNLP4ca0XE; path=/; domain=.tiktok.com; samesite=lax; secure; httponly ttwid=1%7Cc3oPv99a7lyHlXGU3TX0jiUnVw9sMZLf3qbsLlWrkrg%7C1759694431%7C834d8457ab55d8581e092c6b93bc4bf749af5a2925c56a3980edf7d62ab6e958; Domain=.tiktok.com; Path=/; Expires=Wed, 30 Sep 2026 20:00:31 GMT; HttpOnly; Secure tt_chain_token=9PdFmdwDb32hR0SHSwyVWw==; path=/; expires=Fri, 03 Apr 2026 20:00:31 GMT; domain=.tiktok.com; secure; httponly] Strict-Transport-Security:[max-age=31536000; includeSubdomains] X-Akamai-Request-Id:[137e85a] X-Bytefaas-Enable-Stream:[true] X-Bytefaas-Execution-Duration:[77.74] X-Bytefaas-Request-Id:[20251005200031AE22A1FCC51958901399] X-Cache:[TCP_MISS from a23-55-171-84.deploy.akamaitechnologies.com (AkamaiGHost/22.2.5-a9c17ad842a5a5bbb9fede73ebb832d8) (-)] X-Content-Type-Options:[nosniff] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-Gw-Dst-Psm:[serverless.tiktok.mobile] X-Origin-Response-Time:[111,23.55.171.84] X-Powered-By:[Goofy Node] X-Pumbaa-Web-Avail:[1] X-Tt-Logid:[20251005200031AE22A1FCC51958901399] X-Tt-Trace-Host:[01b1fdab09f538f36940b193e1fe1dc01c4254223b0c338213a85c03210ac59781711ec3ca0a4174d8fa9d389459c6f475236d034f906ec8362045b87a9f12503272fe5540c848254248244d3d3eb2231b6e7a42499dd4a8db8852bddd37c21f3b] X-Tt-Trace-Id:[00-251005200031AE22A1FCC51958901399-2ADFEF6733D432E5-00] X-Tt-Trace-Tag:[id=16;cdn-cache=miss;type=dyn] X-Xss-Protection:[1; mode=block]]
```

## wp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:36 GMT] Host-Header:[WordPress.com] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=BYPASS;dur=5.0] Set-Cookie:[tk_ai=3dY78wMWsTUtM%2BlA0eBJ5Pa7; expires=Fri, 04 Oct 2030 20:00:36 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_ai_explat=3dY78wMWsTUtM%2BlA0eBJ5Pa7; expires=Fri, 04 Oct 2030 20:00:36 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_qs=_en%3Dwpcom_experiment_variation_assigned%26_ut%3Danon%26_ui%3D3dY78wMWsTUtM%252BlA0eBJ5Pa7%26_ts%3D1759694436935%26experiment_id%3D22340%26experiment_variation_id%3D5353%26reason%3Dset_by_anon_id; path=/; domain=.wordpress.com; secure; SameSite=Strict explat_test_aa_weekly_lohp_2025_week_40=control; expires=Mon, 20 Oct 2025 00:00:00 GMT; Max-Age=1223964; path=/; domain=.wordpress.com; secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; preload] Vary:[Accept-Encoding Cookie] X-Ac:[1.dca _dca BYPASS] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.] X-Xss-Protection:[1; mode=block]]
```

## biglobe.ne.jp

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[254] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:37 GMT] Last-Modified:[Thu, 22 May 2025 10:12:49 GMT] Server:[Apache] Strict-Transport-Security:[max-age=31536000]]
```

## standard.co.uk

```
200 OK
map[Access-Control-Allow-Credentials:[true] Age:[112] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[stale-if-error=604800, public, stale-while-revalidate=3600, max-age=60, s-maxage=10800] Cf-Cache-Status:[HIT] Cf-Ray:[989f819c0cdadb63-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.brightsites.co.uk;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:37 GMT] Permissions-Policy:[camera=(), geolocation=(), microphone=(), midi=()] Server:[cloudflare] Set-Cookie:[__cf_bm=Brpb5txSGjWejQC0CZzpUPlg1sVP4CtOM7lDfVgptYQ-1759694437-1.0.1.1-LbyBJzIyITk.Kvfpb5timdHsA42WPhrBKwZp_AlqeCrfwQ_WcTLzkU8WW0Zvg_m46SayYTsY9C9KArr5p8HxaNUxxZUZ0Sx8l.G2JjizKZQ; path=/; expires=Sun, 05-Oct-25 20:30:37 GMT; domain=.www.standard.co.uk; HttpOnly; Secure; SameSite=None] Speculation-Rules:["/speculationrules.json"] Strict-Transport-Security:[max-age=63072000;  preload] Surrogate-Key:[standard.co.uk v2.7.7 section_28 web_standard_prod_section_28_publication_1 standard_prod web_standard_prod web_standard_prod_section_28 web_standard_prod_publication_1 web_standard_prod_2025-10-05 web_standard_prod_2025-10-05_publication_1 standard.co.uk_v2.7.7 v2.7.7_section standard.co.uk_v2.7.7_section] Vary:[Origin,Accept-Encoding] X-Content-Type-Options:[nosniff]]
```

## un.org

```
200 OK
map[Age:[554] Cache-Control:[public, max-age=900] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.un.org;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:24 GMT] Etag:["1759693669-0"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:47:49 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[Apache] Set-Cookie:[AWSALBTG=C86Ux04gX9tc/BJs/+9QrOuC2QxuqmJlHEmY0jDShOz1kTzrqNnTMx4g6XbMcnMdxcBxsXAGrhn+hudGSyl1wF9udGMZpuMcb3oLIQ0x9azaUjuPlQPHDqshsiCQRq9aCiIKlGd3aFfLWqli6wPUWnS0AZPeeJM717qX+7I/NMJf; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/ AWSALBTGCORS=C86Ux04gX9tc/BJs/+9QrOuC2QxuqmJlHEmY0jDShOz1kTzrqNnTMx4g6XbMcnMdxcBxsXAGrhn+hudGSyl1wF9udGMZpuMcb3oLIQ0x9azaUjuPlQPHDqshsiCQRq9aCiIKlGd3aFfLWqli6wPUWnS0AZPeeJM717qX+7I/NMJf; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/; SameSite=None; Secure AWSALB=5MblHKkTGYPS2Wy2g8SuI+3L7YYyiGP1+xyim+vFVFejGimR2UMB8x53Kw9gwRDEvZ+EnT/E/Ig8iCRxq6jDXjlnc3w9NRGebx2KRtFpDtuHhjYQtUAhdYSHpceK; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/ AWSALBCORS=5MblHKkTGYPS2Wy2g8SuI+3L7YYyiGP1+xyim+vFVFejGimR2UMB8x53Kw9gwRDEvZ+EnT/E/Ig8iCRxq6jDXjlnc3w9NRGebx2KRtFpDtuHhjYQtUAhdYSHpceK; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/; SameSite=None] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie] Via:[1.1 64d4305f6a0418824e90908ac490184e.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[0mrWQWQSf4KUaRIR2vahytzWl40ddsXOPyWFgRMlmWunRE6mHY8Huw==] X-Amz-Cf-Pop:[IAD61-P10] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Drupal-Cache:[HIT] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## theverge.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[217] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-store,private] Connection:[keep-alive] Content-Length:[889552] Content-Security-Policy:[frame-ancestors https://platform.theverge.com https://*.theverge.com https://platform.theverge.com https://*.theverge.com 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:43 GMT] Etag:["divsmini8nj1sq"] Set-Cookie:[vmidv1=6b43e571-f8fb-49af-9867-2a45aad1823c;Expires=Fri, 04 Oct 2030 20:00:43 GMT;Domain=www.theverge.com;Path=/;SameSite=Lax;Secure _vm_consent_type=opt-out; expires=Mon, 06 Oct 2025 20:00:43 GMT; path=/;] Strict-Transport-Security:[max-age=31556952; preload] Vary:[Accept-Encoding, x-user-state] Via:[1.1 varnish] Vm-Cyclone-Community-Id:[815a6122-a71c-47a0-a311-32f264c80c8a] X-Cache:[HIT] X-Cache-Hits:[1] X-Middleware-Rewrite:[/resource/homepage] X-Powered-By:[Next.js] X-Served-By:[cache-iad-kiad7000123-IAD] X-Timer:[S1759694443.319750,VS0,VE4]]
```

## gsmarena.com

```
200 OK
map[Connection:[Upgrade] Content-Security-Policy:[frame-ancestors 'self' *.gsmarena.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:44 GMT] Server:[Apache] Upgrade:[h2] X-Powered-By:[PHP/7.4.33]]
```

## amzn.to

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=93600] Connection:[keep-alive] Content-Encoding:[gzip] Content-Length:[0] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:44 GMT] Etag:["33992-6406ec9f7c8fc-gzip"] Last-Modified:[Sun, 05 Oct 2025 20:00:39 GMT] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Content-Type,Accept-Encoding,User-Agent] X-Amz-Rid:[40N7JSC8KCZCXZVHAJEY] X-Amzn-Cdn-Id:[ak-0.f69dc17.1759694444.34108c35] X-Cache:[NotCacheable from child]]
```

## canva.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f81c84941d691-IAD] Content-Length:[8557] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 20:00:44 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Nel:[{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Report-To:[{"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=RxcSPNXLnRdMk1WvzJOy7DFk5LJTHNsz6EfNznPvU6YD5sRXHobVEMozvMsFUl%2FdvJRIDYrKiBFnNtDBsLGDSn0m4P2iJMsHNgvTscZ5CJBGPY%2FQr83wtqQG8gsyXgY%3D"}],"group":"cf-nel","max_age":604800}] Server:[cloudflare] Server-Timing:[chlray;desc="989f81c84941d691"] Set-Cookie:[__cf_bm=bFJgoCr0jWi3_3NUEohju7Mc_4Yjw7i2fIa5MUS7JyU-1759694444-1.0.1.1-vBp50WkQPdR0iTow_.LF9lyMaP4Q7lngW9MqrI2IKBmysBDJfevX0C9wZZHzOT53wWCwIxZmBsEROAZr27zViXHaaGJDP1.A02SdwyKrrW0; path=/; expires=Sun, 05-Oct-25 20:30:44 GMT; domain=.canva.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## spiegel.de

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[public, max-age=0,s-maxage=90] Content-Length:[1965458] Content-Security-Policy:[frame-ancestors 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:42 GMT] Strict-Transport-Security:[max-age=31536000;] Vary:[X-Forwarded-Proto, X-Authorized-Sppur, Accept-Encoding] Via:[1.1 google] X-Cache:[HIT] X-Cache-Grace:[3600.000]]
```

## ziddu.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"] Connection:[Keep-Alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:46 GMT] Etag:["1165370-1759576008;;;"] Keep-Alive:[timeout=5, max=100] Link:[<https://www.ziddu.com/wp-json/>; rel="https://api.w.org/" <https://www.ziddu.com/wp-json/wp/v2/pages/10186>; rel="alternate"; type="application/json" <https://www.ziddu.com/>; rel=shortlink] Server:[LiteSpeed] X-Dns-Prefetch-Control:[on] X-Litespeed-Cache:[hit]]
```

## vice.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:46 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.vice.com/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Vary:[Accept-Encoding] X-Cache:[HIT] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 0 40 9980]]
```

## get.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-K_Pm3J72OrmGexyVdg5O1Q' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:46 GMT] Expires:[Sun, 05 Oct 2025 20:00:46 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5tbyBkvqNngJ5C6kedBaIcKDlG_qmD0bUMlnx1EU_04Gm47zFQxVA0; expires=Fri, 03-Apr-2026 20:00:46 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=EZU3_iXsLlBOCzozSDQZqtqjo7kp-rgq3RcPeFiaTDwlGwl5yomee563WC-mbD0yQw1tOHUAqgv1ybM6WUIy24Nk-RzbJF8wICRcJaaavUwdXT6QhRj62jLMZpzDLIbbeqThuN4hSRQ0d8f2JykZZCo2zzOol44SOfDr5A9pCxrEkX4tQ3hva81QL9tSBbgerBhIh57TxK_Vq4SekZU; expires=Mon, 06-Apr-2026 20:00:46 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## microsoft.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:00:51 GMT] Etag:["85de642e1467807f64f7e10807df3869:1711562737.176211"] Last-Modified:[Tue, 26 Mar 2024 18:16:43 GMT] Server:[AkamaiNetStorage]]
```

## ibm.com

```
200 OK
map[Cache-Control:[max-age=600] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html;charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:52 GMT] Etag:["2cee1-6406e142ce199-gzip"] Expires:[Sun, 05 Oct 2025 20:10:52 GMT] Last-Modified:[Sun, 05 Oct 2025 19:09:49 GMT] Set-Cookie:[_abck=A8E3E921B5A268B4073451659A980699~-1~YAAQqYnMF3dLYqaZAQAAOHX2tQ5+CLOBoaTYaAbg6HsTK6hSBaAC95zLEzJytLieKzR/RYa5+WAjMIpDv5MqOQvL6JkprxEKKrPQ1j/mTDct5OciiiakLO5Z+alcuc9WVSnyvivfPBm/fKYg8rdG/UpzVnutLojUrC2SXIWnWkpRp5nBHD7BACZ67PBZjFEEpmwsW0Mqc94EBT3Km27v9qAuw2UziRRKIb/+b9mDxV5SKupKUnJGmXG8qiSW9kLpeeal781KJXMeIr3MWn9WT05LP0HKCL9Z71FjRgxVAJjEsugcGERj6Li0IMsUgpIljNMaTMqp28LopmjHgMlPIlG62xwnBqgS5P63Uc9blQPV+pH3yYMz6qp1uifiDZUrtmC9FNkEc98Ge9jxdftTLBYwSdJqT7N/XA80/9keMsofhtOqGWX8QNHH04EqVrtxI+oe7bLYzofatdZDdz6vf6k=~-1~-1~-1~-1~-1; Domain=.ibm.com; Path=/; Expires=Mon, 05 Oct 2026 20:00:52 GMT; Max-Age=31536000; Secure bm_sz=DE424C582EB3FF592EFF675FB76BA089~YAAQqYnMF3hLYqaZAQAAOHX2tR0Uo8YbUykt8c2doLhzk1CB0ElzS6TJKAeVsa9LHpDM6OidicN6k1uswgh8D6wqPlmcZnrrknJJpN0VqIkAnf6kd8iBGAYLPTlgvJnbI7Gw0vKTrzgi+BaKqFjOp/TJ50E/t/94wbRFPKulWzJR0QINRa25zbHv593DT6wM3gLn2NbtTEX2KOnKkXeRUsNrDUMKMOgT/542pKS0Tnlr5tcMzGp3Gfod3BMWBj3xMlVdAXhSRKljsVo3B9KQNpTDCLa5ODG5742csfPX4TtqH/F89d6TirbMDoWjkJDD3ywGI28UZcAE0ucnCtE0k5U6iA1V6OjX~3228225~3688003; Domain=.ibm.com; Path=/; Expires=Mon, 06 Oct 2025 00:00:52 GMT; Max-Age=14400] Strict-Transport-Security:[max-age=31536000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## target.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, no-cache] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.target.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:00:52 GMT] Etag:["p1qensiek29zcs"] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[adScriptData=VA; Domain=target.com; Path=/; SameSite=none; Secure; Max-Age=86400; TealeafAkaSid=tzgI-6Q2WiwZGIQ0gMhO8iNuM5pvWb5T; Expires=TueTealeafAkaSid=tzgI-6Q2WiwZGIQ0gMhO8iNuM5pvWb5T; Expires=Tue, 04 Nov 2025 20:00:52 GMT; Path=/; Domain=target.com; idToken=eyJhbGciOiJub25lIn0.eyJzdWIiOiI1NGRhYWVjNy1jNmUzLTQ0ZGItODJmMS02NTBiOTU2NWI2ZWIiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3ODA4NTIsImlhdCI6MTc1OTY5NDQ1MiwiYXNzIjoiTCIsInN1dCI6IkciLCJjbGkiOiJlY29tLXdlYi0xLjAuMCIsInBybyI6eyJmbiI6bnVsbCwiZm51IjpudWxsLCJlbSI6bnVsbCwicGgiOmZhbHNlLCJsZWQiOm51bGwsImx0eSI6ZmFsc2UsInN0IjoiVkEiLCJzbiI6bnVsbH19.; Domain=target.com; Path=/; SameSite=none; Secure; sapphire=1; Max-Age=2629746; Expires=Wed, 05 Nov 2025 06:29:58 GMT; Path=/; Domain=.target.com; Secure; SameSite=None fiatsCookie=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/; Secure; SameSite=Lax sddStore=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/ GuestLocation=23703|36.840|-76.370|VA|US;Path=/; Secure; Max-Age=86400 visitorId=0199B5F675D30201A674F34A7DDAAB2F; Max-Age=63072000; Expires=Tue, 05 Oct 2027 20:00:52 GMT; Path=/; Domain=.target.com; Secure; SameSite=None refreshToken=NCRN7xcZa_0VKY5fZ8JjfhL9wSwxxwMnGNK5W41BeCzhKA5qRfo2Y7exDn0vPLInrCXTNrwmopDA_24uGM1pqw; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=15552000; accessToken=eyJraWQiOiJlYXMyIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1NGRhYWVjNy1jNmUzLTQ0ZGItODJmMS02NTBiOTU2NWI2ZWIiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3ODA4NTIsImlhdCI6MTc1OTY5NDQ1MiwianRpIjoiVEdULjlhZWVmMmE3MmMxYjRlNzg4Y2NjYmYxZjQ4NWYyZDU1LWwiLCJza3kiOiJlYXMyIiwic3V0IjoiRyIsImRpZCI6ImQ1OTI2NTkzNGRmNzEyOGRmODE0NjkwYjVkNDQyODU3NmFjNTU5NjQ3MmE4Mjc2YTIyZjE2YzBhZTNlZDEwMDYiLCJzY28iOiJlY29tLm5vbmUsb3BlbmlkIiwiY2xpIjoiZWNvbS13ZWItMS4wLjAiLCJhc2wiOiJMIn0.HC5UVtZk6AtscwTLjYXb-hJsudxcqpBFgq_eLZXq_xn4QUa12vbhEnEcSnHCiQVDxdiO6505rN1eB5yP-KWiU6nTeezZofDYKT2ENSO_AUjBoIgWj2r0uNYuDf0r9qjZZwbV8vNDrBG1NM9syg7YBjtJaHFT8B9gUeDdIG3gfj5IdZOpAcBY1JNoZbkY9ykVN3VzEnXtkJt8zrkDOxwUcLjMvqrYuPbohbSjT7Fl9XdeciQEoVGf671C7CZHRWwHnzt-7ZWtVpkV_RcVr2RVgE9AMJ6XdcTn5nWvwAntts5MN7EhAjolhjxm2CGDcxkY33wBiqM9ugwluComJ3svzA; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; egsSessionId=c8da03ab-010f-4344-974a-5ff2721af41e; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=3600;] Strict-Transport-Security:[max-age=31536000; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Sigsci-Origin-Status:[200]]
```

## justice.gov

```
200 OK
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=97759] Connection:[keep-alive] Content-Language:[en] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:52 GMT] Etag:["1759533010"] Expires:[Mon, 06 Oct 2025 23:10:11 GMT] Last-Modified:[Fri, 03 Oct 2025 23:10:10 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Age:[0] X-Ah-Environment:[prod] X-Cache-Hits:[2] X-Content-Type-Options:[nosniff] X-Drupal-Dynamic-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Generator:[Drupal 10 (https://www.drupal.org)] X-Request-Id:[v-1c037174-a0ae-11f0-ae2a-63ed0fa55875] X-Xss-Protection:[1; mode=block]]
```

## alexa.com

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:53 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,Accept-Encoding,User-Agent] X-Amz-Rid:[WA88DNTJF031YFNYNNMD] X-Amzn-Cdn-Id:[ak-0.f69dc17.1759694453.3410bd6e] X-Cache:[NotCacheable from child] X-Frame-Options:[SAMEORIGIN]]
```

## aliexpress.com

```
200 
map[Access-Control-Allow-Credentials:[true] Bxpunish:[1] Bxuuid:[3bbab8961a62026f0056a61ec9681238] Cache-Control:[no-store] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:59 GMT] Eagleeye-Traceid:[2151e66217596944591564375e05bd] Edge-Control:[bypass-cache] Server:[Tengine/Aserver] Strict-Transport-Security:[max-age=31536000] Timing-Allow-Origin:[*] Vary:[Accept-Encoding]]
```

## forms.gle

```
400 Bad Request
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Accept-Ranges:[bytes] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DurableDeepLinkUi/cspreport;worker-src 'self',require-trusted-types-for 'script';report-uri /_/DurableDeepLinkUi/cspreport] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Date:[Sun, 05 Oct 2025 20:00:59 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, x-fh-requested-host, accept-encoding] X-Cache:[MISS] X-Cache-Hits:[0] X-Served-By:[cache-iad-kiad7000102-IAD] X-Timer:[S1759694459.319118,VS0,VE78]]
```

## hollywoodreporter.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests frame-ancestors 'none'] Content-Security-Policy-Report-Only:[default-src data: 'unsafe-inline' 'unsafe-eval' https: blob: http://*.files.wordpress.com wss://www.hollywoodreporter.com; report-uri https://pmcuri.report-uri.com/r/d/csp/reportOnly] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:00:59 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.hollywoodreporter.com/wp-json/>; rel="https://api.w.org/" <https://wp.me/cEQmt>; rel=shortlink] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[STALE] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca7 0 20 9980] X-Ua-Compatible:[IE=Edge]]
```

## kakao.com

```
200 OK
map[Accept-Ranges:[none] Connection:[keep-alive] Content-Length:[166183] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:01:01 GMT] Etag:["28927-jWf+kx22YlIaWak9VdsVjH9qVhM"] Set-Cookie:[isEnglish=false; Path=/] Strict-Transport-Security:[max-age=15724800] Vary:[Accept-Encoding]]
```

## video.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-JowFkJxHF0y6Ul3e5tDZYg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:01 GMT] Expires:[Sun, 05 Oct 2025 20:01:01 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5vDPI_oro-Sw4G4dpCbtqVTwPbA0Q2ZuIoBOEHWlR25lWeGRbfa-7M; expires=Fri, 03-Apr-2026 20:01:01 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=VEbPcn-R1uO8c5aJacvmYAL0qH_kRsx1ZJaTJRuM5iessqouxJ2d0ub5PuRBiGjIsm_NvxB0dnxVCnT4NhVO-OpuRDRIznR0ifsSzTU9lTn2wci6I3qTn8GkDDn7aCHFxlNNndRtE4lvtcEg6l3fRY6no0wBGNxoYugZWtEJVd3qSIA-hgGKkosfVpDFE0IMsDD91tLXFW2lXj1Of-Y; expires=Mon, 06-Apr-2026 20:01:01 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## freepik.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Length:[4090] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 20:01:01 GMT] Expires:[0] Mime-Version:[1.0] Pragma:[no-cache] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload]]
```

## francetvinfo.fr

```
200 OK
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=31] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:02 GMT] Etag:["4d32c4bcb287ff4a7c810b09bb78ea3a-gzip"] Server:[Microsoft IIS 4.0] Strict-Transport-Security:[max-age=31536000] Version:[1.0] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## interia.pl

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[441728] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:01:03 GMT] Etag:["68e2ce6a-6bd80"] Keep-Alive:[timeout=20] Last-Modified:[Sun, 05 Oct 2025 20:00:42 GMT] Server:[nginx] Set-Cookie:[inpl_mobile=m;Domain=.interia.pl;Path=/;Max-Age=260000] Vary:[*] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## reddit.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, s-maxage=1, max-age=1, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[child-src 'self' blob: accounts.google.com;connect-src 'self' events.redditmedia.com o418887.ingest.sentry.io *.redd.it *.reddit.com www.redditstatic.com vimeo.com alb.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ w3-reporting.reddit.com reddit-uploaded-emoji.s3-accelerate.amazonaws.com reddit-uploaded-media.s3-accelerate.amazonaws.com reddit-uploaded-video.s3-accelerate.amazonaws.com reddit-subreddit-uploaded-media.s3-accelerate.amazonaws.com wss://*.wss.redditmedia.com wss://gql-realtime.reddit.com gql-realtime.reddit.com *.giphy.com js.stripe.com support.reddithelp.com matrix.redditspace.com www.google.com/ccm/ styles.redditmedia.com a.thumbs.redditmedia.com b.thumbs.redditmedia.com;default-src 'self';font-src 'self' data:;form-action 'none';frame-ancestors 'self' *.reddit.com *.snooguts.net;frame-src 'self' www.reddit.com www.youtube.com www.youtube-nocookie.com player.vimeo.com *.redditmedia.com cdn.embedly.com redgifs.com www.redgifs.com embed.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ recaptcha.google.com/recaptcha/ js.stripe.com hooks.stripe.com *.devvit.net td.doubleclick.net/ www.googletagmanager.com/ https://www.tiktok.com/;img-src 'self' data: blob: https:;manifest-src 'self' www.redditstatic.com;media-src 'self' blob: data: *.redd.it www.redditstatic.com matrix.redditspace.com;object-src 'none';script-src 'self' 'strict-dynamic' 'report-sample' 'unsafe-inline' 'unsafe-eval' 'nonce-xSZz7XOzJTVL49MJEfqaZw==';style-src 'self' 'unsafe-inline' www.redditstatic.com *.reddit.com accounts.google.com/gsi/style;style-src-attr 'unsafe-inline';worker-src 'self' blob:;report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Security-Policy-Report-Only:[object-src 'none';script-src 'nonce-xSZz7XOzJTVL49MJEfqaZw==' 'report-sample' 'unsafe-eval' 'strict-dynamic' https:;frame-ancestors 'self' *.reddit.com *.snooguts.net;base-uri 'self';report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:01:03 GMT] Nel:[{"report_to": "w3-reporting-nel", "max_age": 14400, "include_subdomains": false, "success_fraction": 1.0, "failure_fraction": 1.0}] Report-To:[{"group": "w3-reporting-nel", "max_age": 14400, "include_subdomains": true,  "endpoints": [{ "url": "https://w3-reporting-nel.reddit.com/reports" }]}, {"group": "w3-reporting", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting.reddit.com/reports" }]}, {"group": "w3-reporting-csp", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting-csp.reddit.com/reports" }]}] Server:[snooserv] Set-Cookie:[loid=000000001z8lfy6p70.2.1759694463537.Z0FBQUFBQm80czVfbU81ZWYyQmNac01BN0N5WDJtSzRWWlh4Um9wZmhCOEM5Mm5BWXJXbDgyY2ptRkpwNlRpS1V6VHQ0QnRpOTdyUHBGbldaRDIzY1dXYVotOHE4X2xqeG8zOVBiSlFSN25TYVlvVmh3emRLeE1GbjRiNWpUOERxSFQyclVpUV9vVkI; path=/; expires=Tue, 05 Oct 2027 20:01:03 GMT; domain=.reddit.com; samesite=none; secure session_tracker=fngraiaaiflakndknr.0.1759694463540.Z0FBQUFBQm80czVfWmVlWERLZ3VnZjU4QlVlWmJHNy05eHRLNTNCY1R4MzZadU02RlpEaGFyc2hJRzhxRTZjM2ljWDJNMWVQS1VRZERJM3NvbDl2LWhOR0ZMNVV2amQ5ZWNkZFBJd3I2LXR0Q0FiTlpvTXMxVGRsVGRtMjNYeUk1RU4tS2RzN0NERzI; path=/; domain=.reddit.com; secure; SameSite=None; Secure csrf_token=c15cff1b38be9bbda7c00c7dae085ee0; path=/; domain=.reddit.com; samesite=strict; secure token_v2=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJsb2lkIiwiZXhwIjoxNzU5NzgwODYzLjUzNzM0NCwiaWF0IjoxNzU5Njk0NDYzLjUzNzM0MywianRpIjoiTDNWM1pybWhCNUFqbW1LYngwYTU0bjQ3c2I3Ty1nIiwiY2lkIjoiMFItV0FNaHVvby1NeVEiLCJsaWQiOiJ0Ml8xejhsZnk2cDcwIiwibGNhIjoxNzU5Njk0NDYzNTM3LCJzY3AiOiJlSnhra2RHT3REQUloZC1GYTVfZ2Y1VV9tMDF0Y1lhc0xRYW9rM243RFZvY2s3MDdjRDRwSFA5REtvcUZEQ1pYZ3FuQUJGZ1RyVERCUnVUOW5MbTNnMmlOZTh0WXNabkNCRm13RkRya21MR3NpUVFtZUpJYXl4c21vSUxOeUZ5dXRHTk5MVDBRSnFoY01yZUZIcGMyb2JrYmk1NmRHRlc1ckR5b3NWZmwwdGpHRkxZbnhqY2JxdzJwdUM2bk1rbkxRdmtzWHZUak45VzM5dm16X1NhMEo4T0txdW1CM2hsSkNHNHNmcGltM2Q5VGs1NnRDeGExOTNxUTJ1ZDYzSzU5MWl3ME83ZWY2X2xySXhtWFkyaC1KdnQzMXktaEE0ODhMelBxQUVhczRVY1pkbVFkX2xVSFVMbWdKR01KNHRNSTVNcmwyMzhKdG12VHY4YnRFejk4TS1LbU5feldETlJ6Q2VMUXBfSDFHd0FBX184UTFlVFIiLCJmbG8iOjF9.hNRxLOXWwo8YSaIQEw_pnrW8r5mhTxSLG_FgsRNSI1Hb63114uGsvu-G9VfKcHKYcPQyAdbkJuFdff1MqYLMEmUekTl2Jwo66e-lCltoPKvBWS6OvwAip7Nj0drpeRPVrs5iWHdlnLdF37HLzu5B1w3axnYxTXPO1GttzRXLsyunJbPEjPZEdrf1IlzlqAdoWtYLRO7fS2yL-iv-T_yMzNyfJSkjJKcl0af7xjt8jISDgeI0YHV4Kqocng7vShuhKtBnlnlnEhMWgLHngxvEUH44DCgY0h2iZKPb8EDaSWmLCOF8GPdyyKZ3UdsoHsM7UVEZh1djIgZ0HEjqxg0Qlw; Path=/; Domain=reddit.com; Expires=Mon, 06 Oct 2025 20:01:03 GMT; HttpOnly; Secure csv=2; Max-Age=63072000; Domain=.reddit.com; Path=/; Secure; SameSite=None edgebucket=E774KBQLE7ZxE4upjM; Domain=reddit.com; Max-Age=63071999; Path=/;  secure] Strict-Transport-Security:[max-age=31536000; includeSubdomains] Vary:[Accept-Encoding,accept-language] Via:[1.1 varnish] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Is-Wrs:[false] X-Ratelimit-Remaining:[199.0] X-Ratelimit-Reset:[536] X-Ratelimit-Used:[1] X-Xss-Protection:[1; mode=block]]
```

## whitehouse.gov

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:03 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[nginx] Strict-Transport-Security:[max-age=31536000;includeSubdomains;preload] Vary:[Accept-Encoding] X-Cache:[HIT] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Rq:[dca5 181 253 80] X-Xss-Protection:[1; mode=block]]
```

## google.es

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-h7e0e2aDALm9G4o3_W4FAQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:09 GMT] Expires:[Sun, 05 Oct 2025 20:01:09 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5ssFMx9xGY4sP3c-xYNtC4J7uKDFHoU23QOzv1LeHeMSAH73kpwACE; expires=Fri, 03-Apr-2026 20:01:09 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=lax NID=525=UZ9bU5abJecVyRQ6Co1q15iXMEbSk2awFEkEh0NZJp9gPNQPPGXzCMT7lOLO4PAlcoIwlcMRdDnOYqZ08yWpByXPstr4sj4y38kCN3E8Pe3dvvFSSaGRx86FdDdqeMLPVCojmVx0gkooN-wL5zU0b3bLamPBaA8k4Y27f--XQMFN_3Q0xcBUx0o0IdYmnj0FCMtIvXts6RePS40DuKfv; expires=Mon, 06-Apr-2026 20:01:09 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## psychologytoday.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[482] Cache-Control:[max-age=5529600, public] Connection:[keep-alive] Content-Language:[en] Content-Length:[172944] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:09 GMT] Etag:[W/"1759693982-gzip"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:51:59 GMT] Link:[<//cdn2.psychologytoday.com>; rel="preconnect"; crossorigin="1", <//cdn2.psychologytoday.com>; rel="dns-prefetch", <https://www.psychologytoday.com/au>; rel="alternate"; hreflang="en-AU", <https://www.psychologytoday.com/ca>; rel="alternate"; hreflang="en-CA", <https://www.psychologytoday.com/gb>; rel="alternate"; hreflang="en-GB", <https://www.psychologytoday.com/ie>; rel="alternate"; hreflang="en-IE", <https://www.psychologytoday.com/nz>; rel="alternate"; hreflang="en-NZ", <https://www.psychologytoday.com/sg>; rel="alternate"; hreflang="en-SG", <https://www.psychologytoday.com/us>; rel="alternate"; hreflang="en-US", <https://www.psychologytoday.com/za>; rel="alternate"; hreflang="en-ZA", <https://www.psychologytoday.com/ar>; rel="alternate"; hreflang="es-AR", <https://www.psychologytoday.com/cl>; rel="alternate"; hreflang="es-CL", <https://www.psychologytoday.com/es>; rel="alternate"; hreflang="es-ES", <https://www.psychologytoday.com/mx>; rel="alternate"; hreflang="es-MX", <https://www.psychologytoday.com/co>; rel="alternate"; hreflang="es-CO", <https://www.psychologytoday.com/gt>; rel="alternate"; hreflang="es-GT", <https://www.psychologytoday.com/cr>; rel="alternate"; hreflang="es-CR", <https://www.psychologytoday.com/pa>; rel="alternate"; hreflang="es-PA", <https://www.psychologytoday.com/pr>; rel="alternate"; hreflang="es-PR", <https://www.psychologytoday.com/pe>; rel="alternate"; hreflang="es-PE", <https://www.psychologytoday.com/uy>; rel="alternate"; hreflang="es-UY", <https://www.psychologytoday.com>; rel="alternate"; hreflang="x-default", </theme-assets/touch-icons/apple-touch-icon.png>; rel="apple-touch-icon", <//cdn2.psychologytoday.com>; rel=preconnect; crossorigin] Server:[Apache] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie,Origin,Accept-Encoding] Via:[1.1 ZZ] X-Cache:[HIT] X-Cache-Hits:[746] X-Consumer-Id:[848de849-ea1d-442f-a4ec-cfe472f6a19f] X-Content-Type-Options:[nosniff] X-Country-Code:[US] X-Drupal-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Region-Code:[VA] X-Served-By:[content-varnish-primary-i-0e2d4f65ab99f6b69.ptwww.internal] X-Varnish:[338063098 341161052] Xkey:[fQEX Lcck hD2v KLlM 7yIT F8ja VgQb X806 YeL1 e-HI 9fG4 36DO 2OQo hJUX PEta bJcX Ton2 XuDL Pks5 EwUD gMzE fCnT 4TG_ 0sDY _GAW 9HSw MSBx iN81 __Ju J2hr Bf76 2aeR 1yY5 uTrn 16GH rIqW 6Sl0 Z-xt cDC1 ljAN Nn-S MsYZ 68c1 ct64 pTQ0 -ht1 Uv4Y dPrC IyWs u1nC 7QY- RAhe vSRG BvBs 94RV ra7g PiIj Ay0I Rvwb Feuw bz6P 5tCH PoGK cWkI oUwh hhy9 awGJ emmh mBoe i-00 H3s1 4o33 6Kbm UlS3 ijWS 29hc yUlc Aw6e 4oXq 641m 1ltQ 1yYT 5Z0p qFa0 qR9l zIbB QqvA roHR hRSt TXuJ ddyd vODb jOdD XY1C Z_Km TtC5 RKPl Tm9J Ty2z Fj7Y Ieo_ wdyg odjP sHHJ 0-LU 8WNT QSCW DeAQ j4LV Fk_T 8lSc F6pS Zsy2 40sq fgDL 0oEP KNDV AGlR sbKR Ny-N XUJj TLg0 xabd EjH1 Kx6E jyi3 veCQ 0ZHk snhN sRde XRf_ KCvA MvV3 kMuJ MpRE wkzg 73TU Qbn0 X_iJ q_cu sOLn XgFM 1-4d O8dJ vD7t F0-_ WUtp wqHR dEeO qhjf EOV3 CaK4 HGEm XyqP 2bRh d6cI BYd8 Pecr L3bs PmWm C_XS OaVj cxel BWxF YcD9 zMot r2zn r3sJ ce9u 0H0k xvhb fJjG vZQm UcKc 8bgo vbHd meU2 rLlk rfiD rQFz UDbt 75IO HVSa qaB5 2M_T IIiP DcCw qTRA UYDZ CN4d 3Obu T06s 0R00 WFep zYmM qXnw qEaI 1ENg 4zvo GS6A JumO O-uy G7mI hL4v TTYc fdvN xpBl UjAP 96Y3 8WjC Goo7 xygE 5kyS r0Os jALr jiU7 evIg 3QFQ bBv0 dBbN nFOC O11P oL_J XOuA lyPt _PaU PQzV hs7t sExy uUDQ zSy- 2YZT atHj owEh qZp_ F0lD RmDG aMc5 oWsK oSDl b5Ex 0D-t _Os1 f3He _SpR sXHH ec2U xWxz V38a sO2x NwW5 kJ3G RxAP nHt8 INbV 3vFC gGUE PLZe OSpF Cumu JnYM BmFG AfbT OlIB rdUt A9Bd tomE AsfR E6pG JuZT idCc EQwD BYVn 4loF P9SA xILn TQ8A w-PQ 1xq- fnYO P2eQ wXQd G_PS U-Ja g0Lm EhTv P4ym Gkfw cQGt V5dF _Six TYQ7 0HNp 3f8b qLwN QBaD 9wv5]]
```

## ja.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[15876] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[ja] Content-Length:[123558] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 15:36:33 GMT] Last-Modified:[Sun, 05 Oct 2025 15:35:44 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-xrxrb] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-DP=a21;Path=/;HttpOnly;secure;Expires=Mon, 06 Oct 2025 00:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=VPOFJT1xK6QNNwl5QO0fnwKDAAAAAFvdLa6FDpULCJtcq2hBiyA-XbNWO2WqaCrQ;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/51] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
```

## telegram.me

```
200 OK
map[Cache-Control:[no-store] Connection:[keep-alive] Content-Length:[18028] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 20:01:10 GMT] Pragma:[no-cache] Server:[nginx/1.18.0] Set-Cookie:[stel_ssid=77fe92d0550d74a3c7_11652319255661362897; expires=Mon, 06 Oct 2025 07:07:50 GMT; path=/; samesite=None; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Frame-Options:[SAMEORIGIN]]
```

## enable-javascript.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 20:01:11 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload]]
```

## de.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[2531] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[de] Content-Length:[85624] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:19:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:14:11 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-4sqx7] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=0fFu-4k9vbqupvGmOXttzAKDAAAAAFvdumcBXaDD23a_1Ti1cBst4ZgSOppdWc_h;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/8] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
```



# Program Usage

# Project cookie-fetcher

This program fetches cookies from a list of websites and generates a report on their attributes. The name of the file for the list of sites needs to be sites.txt, and should be formated as site.com\nsite2.ninja. There is also a config.yaml that needs to be present to configure the end report.

```yaml

reporterName: "Reporter"
reportTitle: "Cookie site analysis"
reportDescription: |
    reason for report would go here
reportFilename: "../README.md" # Report file name
programUsageReadmePath: "README.md" # if you wish to add this project readme to the Readme ensure it exists here.
```

## Getting Started

Either download a compiled version of the software in the links below or if you have GoLang and installed run a make run, and it will begin parsing.

## Releases
I know Releases would typically done via the githost of the project, but for your convenience i'll put them here. Sorry too Lazy to remote in to my Mac and actually make an ARM build.

[Windows](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-windows-amd64.exe)

[Linux](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-linux-amd64)

[OSX(Darwin)](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-darwin-amd64)

## MakeFile


Run build make command natively
```bash
make build
```

build scoped to create a Linux executable
``` bash 
make build-linux
```

build scoped to create a Windows executable
``` bash 
make build-windows
```

build scoped to create a OSX(Darwin) executable
``` bash 
make build-darwin
```

Creates Builds for all platforms 
```bash
make build-all
```

Run the application directly without compiling
```bash
make run
```

Clean up binary from the last build:
```bash
make clean
```
