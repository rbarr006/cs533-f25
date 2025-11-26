const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 4000;
const app = express();

// Change rootPath later
const rootPath = path.join('C:/Users/joel2/Desktop/Schoolwork/2025 Fall/CS 433 - Web Security/Local Copy/assignments/aquino/4');
app.use(express.static(rootPath));

// Get for the server original location
app.get("/", async(request, response) =>{
    // Reads the iFrameMainPage.html file which is the page format for the root location
    fs.readFile('iFrameMainPage.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('iFrameMainPage.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
});

// Read list of websites from text file, loop for the entire list, and make a get for each link
const websiteList = fs.readFileSync("Websites.txt").toString().split("\r\n");
for(let line = 0; line < websiteList.length; line++){
    let websiteHTMLFile = '../framable/' + websiteList[line] + '.html';
    app.get(websiteHTMLFile, (request, response) =>{
        fs.readFile(websiteHMLFile, function(err, data){
        if(err){
            response.writeHead(404);
            response.write(websiteLine[line] + '.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
        });
    });
}

// Listens for server
app.listen(port, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Server is listening on localhost:' + port);
    }
})