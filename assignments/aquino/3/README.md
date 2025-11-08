# Assignment 3 Submission

### Included Files
This assignment involves the analysis of the cookie practices of 100 of Mozilla's top 500 sites. The various curl commands used to obtain the data on the cookies of each website can be found in the [HTTP Request Logs Directory](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/3/HTTP%20Request%20Logs). A javascript file, [AnalyzeData.js](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/3/AnalyzeData.js), was used to take the data from the request logs and format them into a table (found below), along with a simple analysis on the minimum, maximum, mean, and median cookies used by the 100 sites.


# Data Table

|            Website            | Status Code | Cookies | HttOnly | Secure | SameSite | Strict | Lax | None | Path | Path (Excluding '/') |
| :---------------------------- | :---------: | :-----: | :-----: | :----: | :------: | :----: | :---: | :---: | :----: | :----: |
| policies.google.com  | 200 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| picasweb.com | 404 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| draft.blogger.com | 200 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| elmundo.es | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| thefreedictionary.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| vice.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bing.com | 200 | 12 | 4 | 1 | 1 | 0 | 0 | 1 | 12 | 0 |
| abril.com.br | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| outlook.com | 440 | 3 | 3 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| addtoany.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| huawei.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cpanel.net | 200 | 2 | 2 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| repubblica.it | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ok.ru | 200 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| nginx.com | 200 | 9 | 2 | 4 | 4 | 2 | 0 | 2 | 9 | 0 |
| timeweb.ru | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| godaddy.com | 403 | 4 | 0 | 1 | 1 | 0 | 0 | 1 | 4 | 0 |
| berkeley.edu | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| telegra.ph | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| amazon.ca | 503 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| oup.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| loc.gov | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tinyurl.com | 200 | 5 | 4 | 5 | 5 | 0 | 4 | 1 | 5 | 0 |
| bloglovin.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hugedomains.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| telegram.me | 200 | 2 | 2 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| sendspace.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| t.co | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| reuters.com | 401 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |
| nih.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pixabay.com | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| engadget.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| prezi.com | 406 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| netlify.app | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bp1.blogger.com | 400 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ikea.com | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| yelp.com | 200 | 6 | 3 | 4 | 3 | 0 | 0 | 3 | 6 | 0 |
| scmp.com | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| digg.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| rakuten.co.jp | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| yandex.com | 200 | 9 | 2 | 2 | 0 | 0 | 0 | 0 | 9 | 0 |
| picasa.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sakura.ne.jp | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| www.gov.uk | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| vimeo.com | 200 | 2 | 2 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| upenn.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| developers.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| kakao.com | 200 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| mayoclinic.org | 200 | 3 | 0 | 2 | 1 | 1 | 0 | 0 | 3 | 0 |
| abc.net.au | 200 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| surveymonkey.com | 200 | 5 | 1 | 5 | 5 | 0 | 0 | 5 | 5 | 0 |
| apache.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| www.weebly.com | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| howstuffworks.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| rambler.ru | 200 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| goo.ne.jp | 200 | 5 | 4 | 0 | 5 | 0 | 5 | 0 | 5 | 0 |
| www.over-blog.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sedo.com | 200 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| biblegateway.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pcmag.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ea.com | 200 | 7 | 0 | 1 | 0 | 0 | 0 | 0 | 7 | 0 |
| bandcamp.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| unesco.org | 200 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| nps.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| smh.com.au | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| depositfiles.com | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| afternic.com | 200 | 8 | 0 | 1 | 0 | 0 | 0 | 0 | 8 | 0 |
| sputniknews.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| rt.com | 200 | 4 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 0 |
| spotify.com | 200 | 2 | 1 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| zoom.us | 200 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| addthis.com | 200 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| get.google.com | 200 | 2 | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 0 |
| mozilla.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| thetimes.co.uk | 200 | 10 | 0 | 1 | 0 | 0 | 0 | 0 | 9 | 0 |
| youronlinechoices.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| marketingplatform.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| huffpost.com | 200 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 |
| biglobe.ne.jp | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| indiatimes.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| justgiving.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| www.google.com | 200 | 2 | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 0 |
| mirror.co.uk | 200 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| storage.googleapis.com | 400 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| canva.com | 403 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| wordpress.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gofundme.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| ipv4.google.com | 200 | 2 | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 0 |
| globo.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bbc.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| joomla.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| office.com | 405 | 2 | 2 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| disney.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nginx.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| goodreads.com | 200 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| privacyshield.gov | 200 | 10 | 2 | 10 | 1 | 0 | 0 | 1 | 10 | 0 |
| i.ytimg.com | 404 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| planalto.gov.br | 200 | 3 | 0 | 1 | 1 | 0 | 0 | 1 | 3 | 0 |
| bp-b.blogspot.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| rapidshare.com | 404 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total Websites: 100 | N/A | Total Cookies: 159 | HttpOnly Cookies: 57 | Secure Cookies: 72 | SameSite Cookies: 51 | Strict Cookies: 3 | Lax Cookies: 13 | None Cookies: 35 | Path Cookies: 158 | Path (excluding '/') Cookies: 0 |
| Cookie Stats | Min Cookies: 0 | Max Cookies: 12 | Mean Cookies: 1.590 | Median Cookies: 0 |
