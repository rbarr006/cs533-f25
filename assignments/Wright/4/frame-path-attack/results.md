# Framable Summary

### Framable sites
These websites from my list of 100 that successfully rendered inside an ```<iframe>``` and were not blocked by any browser security headers and CSP policies.

| No. | Site                                  | Reason |
| --: | ------------------------------------- | ------ |
|   1 | ytimg.com                             | none   |
|   4 | [www.gov.br](http://www.gov.br)       | none   |
|  13 | rt.com                                | none   |
|  14 | sedoparking.com                       | none   |
|  20 | dan.com                               | none   |
|  21 | reg.ru                                | none   |
|  23 | clarin.com                            | none   |
|  25 | amazon.com                            | none   |
|  38 | qq.com                                | none   |
|  41 | ggpht.com                             | none   |
|  46 | gfycat.com                            | none   |
|  47 | list-manage.com                       | none   |
|  51 | globo.com                             | none   |
|  55 | npr.org                               | none   |
|  56 | bp.blogspot.com                       | none   |
|  60 | narod.ru                              | none   |
|  62 | jimdofree.com                         | none   |
|  64 | ikea.com                              | none   |
|  65 | sony.com                              | none   |
|  67 | es.wikipedia.org                      | none   |
|  70 | picasa.google.com                     | none   |
|  71 | archive.org                           | none   |
|  75 | boston.com                            | none   |
|  79 | fr.wikipedia.org                      | none   |
|  83 | liveinternet.ru                       | none   |
|  87 | [www.yahoo.com](http://www.yahoo.com) | none   |
|  91 | ja.wikipedia.org                      | none   |
|  92 | secureserver.net                      | none   |
|  95 | id.wikipedia.org                      | none   |
|  32 | repubblica.it                         | none   |

**Total: 30 framable sites**

---

### Websites Blocking Framing Using X-Frame-Options
The sites below prevented from being framed by sending an ```X-Frame-Options``` header to either being ```DENY``` or ```SAMEORIGIN```, which stops the browsers from not embedding them in the iframes from external origins.

| No. | Site                   | X-Frame-Options |
| --: | ---------------------- | --------------- |
|   2 | plus.google.com        | sameorigin      |
|   3 | mailchimp.com          | sameorigin      |
|   5 | google.com.tw          | sameorigin      |
|   8 | nasa.gov               | sameorigin      |
|  11 | gmail.com              | sameorigin      |
|  12 | google.fr              | sameorigin      |
|  15 | arxiv.org              | sameorigin      |
|  17 | usgs.gov               | sameorigin      |
|  19 | cointernet.com.co      | sameorigin      |
|  22 | fb.me                  | deny            |
|  26 | adssettings.google.com | sameorigin      |
|  29 | gettyimages.com        | sameorigin      |
|  30 | ibm.com                | sameorigin      |
|  40 | canada.ca              | deny            |
|  44 | vimeo.com              | sameorigin      |
|  49 | amazon.de              | sameorigin      |
|  50 | office.com             | sameorigin      |
|  52 | goo.ne.jp              | sameorigin      |
|  53 | support.google.com     | sameorigin      |
|  59 | bbc.com                | sameorigin      |

**Total: 20 blocked via X-Frame-Options**

---

### Websites Blocking Framing Using Content-Security-Policy (CSP)
These sites utilize the ```Content-Security-Policy``` header with the ```frame-ancestors``` directive for restriction/complete blocking from being embedded, thus offering more in-depth control than ```X-Frame-Options```.

| No. | Site         | CSP Directive                                           |
| --: | ------------ | ------------------------------------------------------- |
|  18 | bbc.co.uk    | frame-ancestors 'none'                                  |
|  35 | gofundme.com | frame-ancestors gofundme.com                            |
|  37 | nikkei.com   | frame-ancestors 'self'                                  |
|  42 | theverge.com | frame-ancestors 'self'                                  |
|  48 | ft.com       | frame-ancestors 'self'                                  |
|  54 | tiktok.com   | frame-ancestors [www.tiktok.com](http://www.tiktok.com) |
|  58 | loc.gov      | frame-ancestors *.loc.gov                               |
|  61 | spotify.com  | frame-ancestors 'self'                                  |
|  73 | timeweb.ru   | frame-ancestors *.timeweb.ru                            |
|  86 | walmart.com  | frame-ancestors *.walmart.com                           |
|  90 | mozilla.org  | frame-ancestors 'none'                                  |
|  94 | scribd.com   | frame-ancestors 'self'                                  |
|  97 | mirror.co.uk | frame-ancestors 'self'                                  |
| 100 | ebay.com     | frame-ancestors *.ebay.com                              |

**Total: 14 blocked via CSP**

---

### Remaining / Ambiguous Results
The following sites had inconsistent framing protections (or mixed results) due to one of the following reasons: sending conflicting ```X-Frame-Options``` and ```Content-Security-Policy``` headers and/or rendering conflicting headers across various subdomains.

| No. | Site                  | Mixed or Unclear Policy |
| --: | --------------------- | ----------------------- |
|   7 | uol.com.br            | both CSP + XFO          |
|  43 | stores.jp             | both CSP + XFO          |
|  63 | sites.google.com      | both CSP + XFO          |
|  69 | researchgate.net      | XFO only (inconsistent) |
|  72 | europa.eu             | XFO only (inconsistent) |
|  74 | goodreads.com         | XFO only                |
|  82 | gizmodo.com           | both                    |
|  84 | usatoday.com          | both                    |
|  93 | theguardian.com       | XFO only                |
|  98 | storage.canalblog.com | deny                    |

**Total: 10 ambiguous sites**
