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
    // Reads the index.html file which is the page format for the original server location
    fs.readFile('MaliciousSite.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('MaliciousSite.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
});

// Get for the site that has cookies stolen from it
app.get("/VulnerableSite.html", (request, response) =>{
        fs.readFile("VulnerableSite.html", function(err, data){
        if(err){
            response.writeHead(404);
            response.write("VulnerableSite.html cannot be found");
        }
        else{
            response.write(data);
        }
        response.end();
        });
    });


// Listens for server
app.listen(port, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Server is listening on localhost:' + port);
    }
})