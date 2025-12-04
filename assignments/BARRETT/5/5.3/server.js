// 5.3 — CSP Embedding Test (same localhost)
// PowerShell:
//   $env:ENABLE_EMBEDDING="true";  node server.js
//   $env:ENABLE_EMBEDDING="false"; node server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;
const REMOTE_URL = 'https://www.wikipedia.org';
const ENABLE_EMBEDDING = (process.env.ENABLE_EMBEDDING || 'false') === 'true';

// Set CSP only for the embed page
app.use((req, res, next) => {
  if (req.path === '/embed.html') {
    if (ENABLE_EMBEDDING) {
      res.setHeader(
        'Content-Security-Policy',
        `frame-src 'self' ${new URL(REMOTE_URL).origin};`
      );
      console.log(`Embedding ENABLED | frame-src 'self' ${new URL(REMOTE_URL).origin}`);
    } else {
      res.setHeader('Content-Security-Policy', `frame-src 'none';`);
      console.log(`Embedding DISABLED | frame-src 'none'`);
    }
  }
  next();
});

// Serve the test page
app.get('/embed.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'embed.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/embed.html`);
  console.log(`ENABLE_EMBEDDING = ${ENABLE_EMBEDDING}`);
});