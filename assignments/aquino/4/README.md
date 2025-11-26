# Assignment 4 Submission

## Assignment Description
This assignment is split up into two sections. In the first, a report was created on how a list of 100 websites behaves when they are rendered by another website in an iFrame. 100 html files which render a website in an iFrame were created using [GenerateWebsiteHTMLs.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/GenerateWebsiteHTMLs.html), a server was created capable of displaying each site with [iFrameServer.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/iFrameServer.js), and the results were documented below in the framing report. 

Website iFrame Link Page:

![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/images/Website-iFrame-Root.png)

In the second section, a frame attack is demonstrated by showing how a [page that sets a cookie](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/VulnerableSite.html) with only the path attribute can have that cookie stolen by [a page displaying it in an iFrame](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/MaliciousSite.html). 

iFrame Attack Page:

![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/images/iFrame-Attack-Site.png)

Videos showing both of these sections can be found below.

## Included Files
The files for this assignment are distributed among two directories: 

### [framable](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/framable)
This directory contains 100 HTML files each of which attempt to render a website in an iFrame. 

### [frame-path-attack](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack)
This directory contains three files necessary for generating the HTML files in the 'framable' directory, as well as the two files necessary for running the server and web page: 
* [GenerateWebsiteHTMLs.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/GenerateWebsiteHTMLs.html) (generates an HTML file with a website in an iFrame)
* [iFrameMainPage.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/iFrameMainPage.html) (html for site which generates iFrame pages from websites)
* [iFrameServer.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/iFrameServer.js) (runs the server). 

In addition, this directory contains the files necessary for performing a frame attack: 
* [VulnerableSite.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/VulnerableSite.html) (an html for a page which sets a cookie)
* [MaliciousSite.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/MaliciousSite.html) (an html for a page which renders VulnerableSite.html in an iFrame)
* [FrameAttackServer.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/4/frame-path-attack/FrameAttackServer.js) (runs the server for the frame path attack)


# Framing Report
The results of each websites ability to be framed can be separated into one of three categories. Successful framings, failed framings, and errors. Successful framings displayed the webpages within iFrames, failed framings refused to display the webpages due to it being embedded, and errors occur when the specified webpage did not exist or had other issues.

Success Example: 

![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/images/Website-iFrame-Success.png)

Failure Example: 

![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/images/Website-iFrame-Fail.png)

Error Example:

![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/images/Website-iFrame-Error.png)

The framing results of the 100 websites found in [Websites.txt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/4/frame-path-attack/Websites.txt) is summarized in the table below.

|            Website            | Framable | Explanation |
| :---------------------------- | :---------: | :------------------------------------------------- |
| policies.google.com | Yes | N/A |
| picasaweb.google.com | Error | The requested URL could not be found |
| draft.blogger.com | Yes | N/A |
| elmundo.es | Yes | N/A |
| thefreedictionary.com | Yes | N/A |
| vice.com | No | Refused to connect when embedded |
| bing.com | No | Refused to connect when embedded |
| abril.com.br | Yes | N/A |
| outlook.com | No | Refused to connect when embedded |
| addtoany.com | Yes | N/A |
| huawei.com | No | Refused to connect when embedded |
| cpanel.net | No | Refused to connect when embedded |
| repubblica.it | Yes | N/A |
| ok.ru | No | Refused to connect when embedded |
| nginx.com | No | Refused to connect when embedded |
| timeweb.ru | No | Refused to connect when embedded |
| godaddy.com | No | Refused to connect when embedded |
| berkeley.edu | No | Refused to connect when embedded |
| telegra.ph | No | Refused to connect when embedded |
| amazon.ca | Yes | N/A |
| oup.com | Yes | N/A |
| loc.gov | No | Refused to connect when embedded |
| tinyurl.com | No | Refused to connect when embedded |
| bloglovin.com | Yes | N/A |
| hugedomains.com | No | Refused to connect when embedded |
| telegram.me | No | Refused to connect when embedded |
| sendspace.com | No | Refused to connect when embedded |
| t.co | Yes | N/A |
| reuters.com | No | Refused to connect when embedded |
| rapidshare.com | Error | The requested URL could not be found |
| nih.gov | No | Connection reset while loading |
| pixabay.com | No | Refused to connect when embedded |
| engadget.com | No | Refused to connect when embedded |
| privacyshield.gov | Yes | N/A |
| prezi.com | No | Refused to connect when embedded |
| planalto.gov.br | No | Refused to connect when embedded |
| netlify.app | Yes | N/A |
| bp1.blogger.com | Error | The requested URL could not be found |
| ikea.com | No | Refused to connect when embedded |
| yelp.com | Yes | N/A |
| scmp.com | No | Refused to connect when embedded |
| digg.com | Yes | N/A |
| rakuten.co.jp | No | Refused to connect when embedded |
| yandex.com | No | Refused to connect when embedded |
| ytimg.com | Error | The requested URL could not be found |
| picasa.google.com | Yes | N/A |
| sakura.ne.jp | No | Refused to connect when embedded |
| gov.uk | No | Refused to connect when embedded |
| vimeo.com | No | Refused to connect when embedded |
| upenn.edu | No | Refused to connect when embedded |
| developers.google.com | No | Refused to connect when embedded |
| kakao.com | Yes | N/A |
| mayoclinic.org | No | Refused to connect when embedded |
| abc.net.au | No | Refused to connect when embedded |
| surveymonkey.com | No | Refused to connect when embedded |
| apache.org | No | Refused to connect when embedded |
| weebly.com | No | Refused to connect when embedded |
| howstuffworks.com | Yes | N/A |
| rambler.ru | No | Refused to connect when embedded |
| goo.ne.jp | No | Refused to connect when embedded |
| over-blog.com | No | Refused to connect when embedded |
| sedo.com | No | Refused to connect when embedded |
| biblegateway.com | Yes | N/A |
| pcmag.com | Yes | N/A |
| ea.com | No | Refused to connect when embedded |
| bandcamp.com | Yes | N/A |
| unesco.org | No | Refused to connect when embedded |
| nps.gov | Yes | N/A |
| smh.com.au | No | Refused to connect when embedded |
| depositfiles.com | No | Refused to connect when embedded |
| afternic.com | Yes | N/A |
| sputniknews.com | Yes | N/A |
| rt.com | Yes | N/A |
| bp.blogspot.com | Error | The requested URL could not be found |
| spotify.com | No | Refused to connect when embedded |
| zoom.us | Yes | N/A |
| addthis.com | No | Refused to connect when embedded |
| get.google.com | No | Refused to connect when embedded |
| mozilla.com | No | Refused to connect when embedded |
| thetimes.co.uk | No | Refused to connect when embedded |
| youronlinechoices.com | No | Refused to connect when embedded |
| marketingplatform.google.com | Yes | N/A |
| huffpost.com | No | Refused to connect when embedded |
| biglobe.ne.jp | No | Refused to connect when embedded |
| indiatimes.com | No | Refused to connect when embedded |
| justgiving.com | No | Refused to connect when embedded |
| google.com | No | Refused to connect when embedded |
| mirror.co.uk | No | Refused to connect when embedded |
| storage.googleapis.com | Error | Missing security header |
| canva.com | No | Refused to connect when embedded |
| wordpress.org | No | Refused to connect when embedded |
| gofundme.com | Yes | N/A |
| ipv4.google.com | No | Refused to connect when embedded |
| globo.com | Yes | N/A |
| bbc.com | No | Refused to connect when embedded |
| joomla.org | No | Refused to connect when embedded |
| office.com | No | Refused to connect when embedded |
| disney.com | Yes | N/A |
| nginx.org | Yes | N/A |
| goodreads.com | No | Refused to connect when embedded |

| Framable Websites | Non-Framable Websites | Errors |
| :---------------: | :---------: | :---------- |
| 31 | 63 | 6 |


# Video Demonstrations
The video showing the details on the website framing and report can be found [here](https://www.youtube.com/watch?v=oSrfb-soFM4).

The video showing the demonstration of the frame path attack can be found [here](https://www.youtube.com/watch?v=nKQdvAgJmd8).
