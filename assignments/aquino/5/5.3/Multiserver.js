const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
const port1 = 4000;
const port2 = 5000;

const app1 = express();
// Get for the server original location
app1.get("/", async(request, response) =>{
    // Reads the website.html file which is the page format for the root location
    fs.readFile('website.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('website.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
});

// Listens for server
app1.listen(port1, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Server is listening on localhost:' + port1);
    }
})


const app2 = express();

app2.use((request, response, next) =>{
    //response.removeHeader('X-Frame-Options');
    //response.removeHeader('Content-Security-Policy');
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Content-Security-Policy', `frame-src 'none';`);
    next();
});

// Get for the server original location
app2.get("/", async(request, response) =>{
    // Reads the website.html file which is the page format for the root location
    fs.readFile('website.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('website.html cannot be found');
        }
        else{
            response.write(data);
        }

        response.end();
    });
});

// Listens for server
app2.listen(port2, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Server is listening on localhost:' + port2);
    }
})

