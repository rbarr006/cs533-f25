const express = require('express');
const path = require('path');

const app = express();
const PORT = 4001;


// Setup to server static files
app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app.set('view engine', 'html');
app.engine('html', require('fs').readFile);

// Routes for favorites pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/attack', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'attack.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});