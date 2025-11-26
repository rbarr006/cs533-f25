// server.js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

app.use(cookieParser());

// tiny helper to render HTML
function page(title, bodyHtml) {
  return `<!doctype html>
  <html lang="en">
  <head><meta charset="utf-8"><title>${title}</title></head>
  <body style="font-family: -apple-system, Arial; line-height:1.45; padding:20px;">
    <h1>${title}</h1>
    ${bodyHtml}
    <p style="margin-top:24px;">
      <a href="/">Home</a> |
      <a href="/cookies">See my cookies</a> |
      <a href="/clear-cookies">Clear cookies</a>
    </p>
  </body></html>`;
}

app.get('/', (req, res) => {
  res.send(page('My Favorites',
    `<ul>
      <li><a href="/justin-bieber">Justin Bieber</a></li>
      <li><a href="/nicki-minaj">Nicki Minaj</a></li>
      <li><a href="/lawandorder">Law & Order</a></li>
      <li><a href="/glee">Glee</a></li>
    </ul>
    <p>Visit each path once—each sets a human-readable cookie.</p>`));
});

// 1) Justin Bieber
app.get('/justin-bieber', (req, res) => {
  res.cookie('favoriteArtist', 'Justin Bieber', { httpOnly: false });
  res.send(page('Justin Bieber',
    `<p>Pop icon with decade-long hits; love the vocals & production.</p>
     <p><strong>Cookie set:</strong> favoriteArtist=Justin Bieber</p>`));
});

// 2) Nicki Minaj
app.get('/nicki-minaj', (req, res) => {
  res.cookie('favoriteRapper', 'Nicki Minaj', { httpOnly: false });
  res.send(page('Nicki Minaj',
    `<p>Bars, flow, personality—queen of punchlines.</p>
     <p><strong>Cookie set:</strong> favoriteRapper=Nicki Minaj</p>`));
});

// 3) Law & Order
app.get('/lawandorder', (req, res) => {
  res.cookie('favoriteShow', 'Law & Order', { httpOnly: false });
  res.send(page('Law & Order',
    `<p>Crime-to-courtroom format keeps me locked in every episode.</p>
     <p><strong>Cookie set:</strong> favoriteShow=Law & Order</p>`));
});

// optional alias so /laworder also works
app.get('/laworder', (req, res) => res.redirect('/lawandorder'));

// 4) Glee
app.get('/glee', (req, res) => {
  res.cookie('favoriteMusicalShow', 'Glee', { httpOnly: false });
  res.send(page('Glee',
    `<p>Feel-good covers, drama, friendship — my comfort watch.</p>
     <p><strong>Cookie set:</strong> favoriteMusicalShow=Glee</p>`));
});

// see cookies
app.get('/cookies', (req, res) => {
  const list = Object.entries(req.cookies || {})
    .map(([k, v]) => `<li><code>${k} = ${v}</code></li>`).join('');
  res.send(page('Your Cookies', `<ul>${list || '<li>(none)</li>'}</ul>`));
});

// clear cookies (handy when re-recording)
app.get('/clear-cookies', (req, res) => {
  ['favoriteArtist','favoriteRapper','favoriteShow','favoriteMusicalShow']
    .forEach(name => res.clearCookie(name));
  res.send(page('Cookies Cleared', `<p>All favorite cookies cleared.</p>`));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
