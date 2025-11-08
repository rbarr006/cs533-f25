const express = require('express');
const path = require('path');

// Servers and Ports
const server = express();
const fileServer = express();

const serverPort = 4000;
const filePort = 3000;

// Served files
const indexFile = path.join(__dirname, 'index.html');
const clientFile = path.join(__dirname, 'client.html');

// localhost:4000/
server.get('/', (req, res) => {
    res.sendFile(indexFile);
});

// localhost:3000/
fileServer.get('/show-iframe', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(clientFile);
});

fileServer.get('/hide-iframe', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Frame-Options', 'DENY');
    res.sendFile(clientFile);
})

server.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`);
});

fileServer.listen(filePort, () => {
    console.log(`Server listening on port ${filePort}`);
});