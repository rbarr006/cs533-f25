# Assignment 5 Submission

## Assignment Description
This assignment is split up into three different sections. First, a javascript server is used to show how a response can be requested from another server, how it is blocked, and how it can be allowed. Second, a javascript server is used to show how custom response headers can be blocked and allowed by a server. And third, a javascript server is used to show how an HTML file which renders a website in an iFrame can prohibit the site from embedding.

## Included Files
The files for this assignment are distributed among three directories corresponding to to the three different parts of the assignment.

### [5.1](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.1)
This directory includes the files necessary for demonstrating how javascript running in an HTML file can request a response from another origin, how it is blocked, and how it can be allowed.
* [Multiserver.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.1/Multiserver.js): Javascript file which hosts the servers.
* [RequestPage.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.1/RequestPage.html): The HTML file which renders a page used in the demonstration.
* [Response.json](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.1/Response.json): The json file that is requested during the demonstration.

### [5.2](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.21)
This directory includes the files necessary for demonstrating how custom response headers can be blocked and allowed by a server.
* [Multiserver.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.2/Multiserver.js): Javascript file which hosts the servers.
* [RequestPage.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.2/RequestPage.html): The HTML file which renders a page used in the demonstration.
* [Response.json](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.2/Response.json): The json file that is requested during the demonstration.

### [5.3](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.3)
This directory includes the files necessary for demonstrating how a local server is able to prevent a remote site from embedding in an iFrame.
* [Multiserver.js](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.3/Multiserver.js): Javascript file which hosts the servers.
* [website.html](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/5/5.3/website.html): The html file which attempts to render a website in an iFrame.

# Video Demonstration

The video showing the demonstration of the servers can be found [here](https://www.youtube.com/watch?v=DSONhrSiWEk).
