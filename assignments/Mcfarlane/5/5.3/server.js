// 5.3/server.js
const express = require("express");
const app = express();
const PORT = 3000;

const {createReadStream} = require('fs')

app.get('/', (req, res) => {
    res.setHeader('Content-Security-Policy', "frame-src 'self'" )
    createReadStream('index.html').pipe(res)
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
