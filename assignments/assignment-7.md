## Assignment 7, CS 433/533 Web Security, Fall 2025

Due: 2025-12-07

Points available: 15 + 15 Extra credits

For this assignment, you will construct a phishing site that collects login information. 

Note: This is intended solely for educational purposes to enhance understanding of phishing techniques and defensive strategies.  Under no circumstances should this information be used to engage in unauthorized access or any form of malicious activity. All users are expected to act responsibly and adhere to all applicable laws and ethical guidelines in cybersecurity. 

Relevant resources:

* [Complete Guide to Creating and Hosting a Phishing Page for Beginners](https://null-byte.wonderhowto.com/forum/complete-guide-creating-and-hosting-phishing-page-for-beginners-0187744/) -- note that this site's example code is in PHP, but you will do this in node.js.


### Create a simple phishing site (15 points)

Using one of your 100 web sites that offers logging in from the previous assignments, modify the HTML and serve it from your own node server on your machine to create a convincing phishing site.
You'll have to make sure all the images, Javascript, CSS, etc. are all loaded from your local resources.  When the login button is pushed, send the login information to your local node server and record it in a log file.  
**Document and demonstrate the operation of your phishing site with text, screen shots, and a Youtube video in your `README.md`.**

### Extra credit (15 points)

Using Zphisher ([blogpost](https://www.securitynewspaper.com/2020/03/25/create-phishing-page-of-29-websites-in-minutes/), [GitHub](https://github.com/htr-tech/zphisher), create and demonstrate (screen shots, Youtube video) **three phishing sites**.

### Setting up directory "7"

All of the code, files, images, etc. necessary to complete this
assignment will be in directory ```7```.  

The `README.md` for this assignment will have 
1. links to the code, 
2. a short discussion of any issues you encountered making the site "display" correctly from your server, 
3. Screen shots with captions of the site rendered in your browser, and
the log file of harvested dummy user names and passwords, 
4. a link to Youtube video of your site in operation.

