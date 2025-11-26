## Assignment 6, CS CS 433/533 Web Security, Fall 2025

Due: 2025-11-23

Points available: 15 + 5 Extra Credits

For this assignment, you will fingerprint various browsers on your local network.  

Relevant resources:

* [md5](https://www.npmjs.com/package/md5)
* [req.get](http://expressjs.com/en/api.html#req.get)
* [echo service](http://scooterlabs.com/echo) 
* [httpbing.org](https://httpbin.org/headers)

### Fingerprint at least six different clients 

Write server side code for your Express server that fingerprints browsers (as per week 7's lecture).  The server should write these fingerprints out to a server-side log and recognize the client when it visits again.  For different clients, use different browsers (Firefox, Chrome, curl, Safari, etc.) as well as different devices on your local network (phones, tablets, etc.).  

Use at least **four** different HTTP request headers to form your browser fingerprint.


### Extra credit (5 points)

For each fingerprint, serve a different HTML file.  This way each client has a unique experience, different from other clients.  See also: [cloaking](https://en.wikipedia.org/wiki/Cloaking).

### Setting up directory "6"

All of the code, files, images, etc. necessary to complete this assignment will be in directory ```6```.  

The `README.md` for this assignment will have:
1. links to the code, 
2. Short description of the fingerprinting algorithm, 
3. Screenshot of the 6+ fingerprints, 
4. Link to the Youtube video demonstrating the clients connecting and being recognized by the server.

