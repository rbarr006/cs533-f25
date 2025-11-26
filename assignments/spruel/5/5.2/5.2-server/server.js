const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

const options = {
    origin: ['http://localhost:4002'],
    exposedHeaders: ['X-CS533f25-Monk', 'X-CS533f25-Psych', 'X-CS533f25-Mr-Robot', 'X-CS533f25-Parks-And-Rec']
};

// Setup to server static files
app.use(express.static('public'));

// Setup CORS for server 
app.use(cors(options));

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

app.get('/monk', (req, res) => {
    res.setHeader('X-CS533f25-Monk','Go Monk!')
    const data = {
        message : 'Monk is a great show'
    };  
    res.json(data);
});

app.get('/psych', (req, res) => {
    res.setHeader('X-CS533f25-Psych','Go Psych!')
    const data = {
        message : 'Psych is a great show'
    };  
    res.json(data);
});

app.get('/mr-robot', (req, res) => {
    res.setHeader('X-CS533f25-Mr-Robot','Go Mr-Robot!')
    const data = {
        message : 'Mr-Robot is a great show'
    };  
    res.json(data);
});

app.get('/parks-and-rec', (req, res) => {
    res.setHeader('X-CS533f25-Parks-And-Rec','Go Parks-And-Rec!')
    const data = {
        message : 'Parks-And-Rec is a great show'
    };  
    res.json(data);
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Available pages:`);
    console.log(`- Home: http://localhost:${PORT}/`);
    console.log(`- Monk: http://localhost:${PORT}/monk`);
    console.log(`- Psych: http://localhost:${PORT}/psych`);
    console.log(`- Mr-Robot: http://localhost:${PORT}/mr-robot`);
    console.log(`- Parks And Rec: http://localhost:${PORT}/parks-and-rec`);
});