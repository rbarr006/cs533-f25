// 5.3/server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files (for demonstration)
app.use(express.static(path.join(__dirname)));

// Route that blocks embedding
app.get("/blocked", (req, res) => {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Blocked Embedding Demo</title></head>
    <body>
      <h1>This page cannot be embedded in an iframe</h1>
      <p>If you try to embed it, the browser will refuse to render it.</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://192.168.8.242:${PORT}`);
  console.log(`Try embedding http://192.168.8.242:${PORT}/blocked`);
});
