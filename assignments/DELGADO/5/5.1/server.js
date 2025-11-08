const express = require('express');
const path = require('path');

// Servers and Ports
const server = express();
const fileServer = express();

const serverPort = 4000;
const filePort = 3000;

// Served files
const indexFile = path.join(__dirname, 'index.html');
const jsonFile = path.join(__dirname, 'data.json');

server.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`);
});

fileServer.listen(filePort, () => {
    console.log(`File Server listening on port ${filePort}`);
});

// localhost:4000/
server.get('/', (req, res) => {
    res.sendFile(indexFile);
});

// localhost:3000/
fileServer.get('/fail', (req, res) => {
    res.sendFile(jsonFile)
});

fileServer.get('/succeed', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(jsonFile)
});