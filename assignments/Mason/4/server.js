// server.js - simple static server for the assignment folder "4"
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const staticDir = path.join(__dirname, '4');
app.use(express.static(staticDir));
app.listen(port, ()=> console.log('Serving', staticDir, 'on http://localhost:' + port));
