// server.js -- combined: framables @4000 and frame-path demo @4001
const express = require('express');
const path = require('path');

// ---------------------------------------------------------
// Server A: framables @4000 (serves your framable/ index)
// ---------------------------------------------------------
const app4000 = express();

// IMPORTANT: server.js lives in frame-path-attack, framable is one level up
const framableDir = path.resolve(__dirname, '..', 'framable'); // ../framable

app4000.use(express.static(framableDir));
app4000.get('/index', (req, res) => res.sendFile(path.join(framableDir, 'index.html')));
app4000.get('/', (req, res) => res.status(404).send('Framable server root: try /index'));

app4000.listen(4000, () => {
  console.log('Framable server on http://localhost:4000');
  console.log(' - index: http://localhost:4000/index');
});

// ---------------------------------------------------------
// Server B: frame-path demo @4001 (serves parent & protected)
// ---------------------------------------------------------
const app4001 = express();
const demoDir = __dirname; // frame-path-attack folder

app4001.use(express.json());
app4001.use(express.urlencoded({ extended: false }));

// Serve demo files (parent.html, protected.html) from frame-path-attack
app4001.use(express.static(demoDir));

app4001.get('/protected/set', (req, res) => {
  res.cookie('sensitiveCookie', 'crypto12345', {
    httpOnly: false,
    path: '/protected',
    maxAge: 60 * 60 * 1000
  });
  res.send('Set sensitiveCookie with Path=/protected (httpOnly: false). <a href="/protected">Open /protected</a>');
});

app4001.get('/protected/set-secure', (req, res) => {
  res.cookie('sensitiveCookie', 'crypto12345', {
    httpOnly: true,
    secure: false,
    path: '/protected',
    maxAge: 60 * 60 * 1000
  });
  res.send('Set sensitiveCookie with httpOnly: true (secure variant). <a href="/protected">Open /protected</a>');
});

app4001.get('/parent', (req, res) => res.sendFile(path.join(demoDir, 'parent.html')));
app4001.get('/protected', (req, res) => res.sendFile(path.join(demoDir, 'protected.html')));

app4001.post('/stolen', (req, res) => {
  console.log(new Date().toISOString(), 'EXFILTRATED:', req.body);
  res.json({ ok: true });
});

app4001.use((req, res) => res.status(404).send('<h1>Not found</h1><p>Try <a href="/parent">/parent</a></p>'));

app4001.listen(4001, () => {
  console.log('Frame-path demo server on http://localhost:4001');
  console.log(' - parent:          http://localhost:4001/parent');
  console.log(' - set cookie:      http://localhost:4001/protected/set');
  console.log(' - secure set test: http://localhost:4001/protected/set-secure');
});
