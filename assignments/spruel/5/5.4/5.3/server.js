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

app_block.use(function(req, res, next) {
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self';");
    next();
});

// Setup to serve HTML files
app_block.set('view engine', 'html');
app_block.engine('html', require('fs').readFile);

// Routes for iFrame pages
app_block.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'framable', 'index.html'));
});

app_block.get('/githubpages', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'githubpages.html'));
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

app_allow.get('/githubpages', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', '/githubpages.html'));
});

// 404 handler
app_allow.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'framable', '404.html'));
});

// Start server
app_allow.listen(ALLOW_PORT, () => {
    console.log(`Allow server is running on http://localhost:${ALLOW_PORT}`);
});