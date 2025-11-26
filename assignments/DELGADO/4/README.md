# Assignment 4

Attached is my submission for Assighment 4. For each website, I captured the URL being checked, the status, and whether or not the website was framable. The framability boiled down to whether or not there were Cross-Frame-Options or Content-Security-Policies enabled, or frame ancestors. All of these indicate security that restricts using iframes at least from trying through localhost. If no security was detected, then the website was deemed "Framable" and verified by opening its respetive .html.

Youtube Video: https://www.youtube.com/watch?v=fL_QXuifztg&feature=youtu.be

## Errors

Primary error was time management due to work this week. As a result, I did not entirely understand how to write an exploitation for Paths and did not have time to look up clarifications. This is my fault and is why there is no frame-attack directory submitted with this assignment.

## iFrame Tables
| Descriptor | # of URLs |
| :------- | :------- |
| # of Framable URLs | 23 |
| # of Unframable URLs | 77 |

| URL  | Status | Framability |
| :------- | :------- | :----- |
| https://archives.gov | 200 | X-Frame-Options: SAMEORIGIN |
| https://mega.io | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://bbc.co.uk | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://ebay.com | 200 | N/A due to Network Error |
| https://www.gov.uk | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://webmd.com | 200 | Framable |
| https://justice.gov | 200 | X-Frame-Options: SAMEORIGIN |
| https://www.weebly.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://enable-javascript.com | 200 | Framable |
| https://euronews.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://pinterest.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://mozilla.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://economist.com | 403 | N/A due to Network Error |
| https://sendspace.com | 0 - No response from site | N/A due to Network Error |
| https://sapo.pt | 200 | X-Frame-Options: SAMEORIGIN |
| https://jimdofree.com | 0 - No response from site | N/A due to Network Error |
| https://dailymotion.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://developers.google.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://cornell.edu | 200 | Framable |
| https://video.google.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://rakuten.co.jp | 200 | X-Frame-Options: DENY |
| https://google.com.br | 200 | X-Frame-Options: SAMEORIGIN |
| https://last.fm | 200 | X-Frame-Options: DENY |
| https://windows.net | 0 - No response from site | N/A due to Network Error |
| https://buydomains.com | 403 | N/A due to Network Error |
| https://techcrunch.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://naver.com | 200 | X-Frame-Options: DENY |
| https://theatlantic.com | 200 | Framable |
| https://canada.ca | 200 | X-Frame-Options: DENY |
| https://cambridge.org | 403 | N/A due to Network Error |
| https://tiktok.com | 0 - No response from site | N/A due to Network Error |
| https://android.com | 200 | Framable |
| https://yadi.sk | 200 | Framable |
| https://booking.com | 202 | Framable |
| https://slideshare.net | 200 | X-Frame-Options: SAMEORIGIN |
| https://tmz.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://cdc.gov | 200 | Framable |
| https://sciencedirect.com | 403 | N/A due to Network Error |
| https://lexpress.fr | 200 | Framable |
| https://domainmarket.com | 403 | N/A due to Network Error |
| https://ovhcloud.com | 200 | X-Frame-Options: ORIGIN |
| https://wa.me | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://privacyshield.gov | 0 - No response from site | N/A due to Network Error |
| https://gsmarena.com | 429 | N/A due to Network Error |
| https://feedburner.com | 200 | X-Frame-Options: deny |
| https://docs.google.com | 200 | X-Frame-Options: DENY |
| https://netlify.app | 200 | Framable |
| https://qq.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://businessinsider.com | 200 | X-Frame-Options: sameorigin |
| https://giphy.com | 403 | N/A due to Network Error |
| https://freepik.com | 403 | N/A due to Network Error |
| https://ca.gov | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://yelp.com | 200 | Framable |
| https://engadget.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://berkeley.edu | 200 | X-Frame-Options: SAMEORIGIN |
| https://opera.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://ftc.gov | 403 | N/A due to Network Error |
| https://arxiv.org | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://www.canalblog.com | 200 | X-Frame-Options: DENY |
| https://www.google.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://google.nl | 200 | X-Frame-Options: SAMEORIGIN |
| https://pcmag.com | 200 | Framable |
| https://ja.wikipedia.org | 200 | Framable |
| https://twitch.tv | 200 | X-Frame-Options: SAMEORIGIN |
| https://wired.com | 200 | Framable |
| https://canva.com | 403 | N/A due to Network Error |
| https://biglobe.ne.jp | 200 | Framable |
| https://apnews.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://calendar.google.com | 200 | X-Frame-Options: DENY |
| https://news.google.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://cnet.com | 200 | Framable |
| https://bp.blogspot.com | 0 - No response from site | N/A due to Network Error |
| https://pbs.org | 200 | Framable |
| https://linkedin.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://sciencemag.org | 403 | N/A due to Network Error |
| https://books.google.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://bigcommerce.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://whatsapp.com | 200 | X-Frame-Options: DENY |
| https://cbsnews.com | 200 | Framable |
| https://www.blogger.com | 200 | Framable |
| https://ea.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://nicovideo.jp | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://prezi.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://secureserver.net | 0 - No response from site | N/A due to Network Error |
| https://de.wikipedia.org | 200 | Framable |
| https://timeweb.ru | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://telegram.me | 200 | X-Frame-Options: SAMEORIGIN |
| https://accounts.google.com | 200 | X-Frame-Options: DENY |
| https://brandbucket.com | 403 | N/A due to Network Error |
| https://buzzfeed.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://soundcloud.com | 200 | X-Frame-Options: SAMEORIGIN |
| https://disney.com | 403 | N/A due to Network Error |
| https://gizmodo.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://afternic.com | 200 | Framable |
| https://4shared.com | 200 | Framable |
| https://alibaba.com | 200 | X-Frame-Options: DENY |
| https://sedo.com | 200 | X-Frame-Options: sameorigin |
| https://depositfiles.com | 200 | Content-Security-Policy: frame-ancestors Unknown |
| https://usgs.gov | 200 | X-Frame-Options: SAMEORIGIN |
| https://yahoo.co.jp | 200 | X-Frame-Options: SAMEORIGIN |
