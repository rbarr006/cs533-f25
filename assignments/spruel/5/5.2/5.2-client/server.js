const express = require('express');
const path = require('path');

// Block server section
const app_block = express();
const BLOCK_PORT = 4001;

// Setup to server static files
app_block.use(express.static('public'));

app_block.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app_block.set('view engine', 'html');
app_block.engine('html', require('fs').readFile);

// Routes for iFrame pages
app_block.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'framable', 'index.html'));
});

app_block.get('/monk', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'monk.html'));
});

app_block.get('/mr-robot', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'mr-robot.html'));
});

app_block.get('/parks-and-rec', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'parks-and-rec.html'));
});

app_block.get('/psych', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'psych.html'));
});

// 404 handler
app_block.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'framable', '404.html'));
});

// Start server
app_block.listen(BLOCK_PORT, () => {
    console.log(`Block server is running on http://localhost:${BLOCK_PORT}`);
});


// Allow server section
const app_allow = express();
const ALLOW_PORT = 4002;

// Setup to server static files
app_allow.use(express.static('public'));

app_allow.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app_allow.set('view engine', 'html');
app_allow.engine('html', require('fs').readFile);

// Routes for iFrame pages
app_allow.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'framable', 'index.html'));
});

app_allow.get('/monk', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'monk.html'));
});

app_allow.get('/mr-robot', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'mr-robot.html'));
});

app_allow.get('/parks-and-rec', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'parks-and-rec.html'));
});

app_allow.get('/psych', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'psych.html'));
});

// 404 handler
app_allow.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'framable', '404.html'));
});

// Start server
app_allow.listen(ALLOW_PORT, () => {
    console.log(`Allow server is running on http://localhost:${ALLOW_PORT}`);
});