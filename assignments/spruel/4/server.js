const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

const cookieParser = require('cookie-parser');

app.use(cookieParser('super-secret-key123'));

// Setup to server static files
app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Setup to serve HTML files
app.set('view engine', 'html');
app.engine('html', require('fs').readFile);

// Routes for iFrame pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'framable', 'index.html'));
});

app.get('/wikia', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'wikia.com.html'));
});

app.get('/biblegateway', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'biblegateway.com.html'));
});

app.get('/yelp', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'yelp.com.html'));
});

app.get('/gofundme', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'gofundme.com.html'));
});

app.get('/intel', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'intel.com.html'));
});

app.get('/people', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'people.com.html'));
});

app.get('/change', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'change.org.html'));
});

app.get('/nikkei', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'nikkei.com.html'));
}); 

app.get('/translate-google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'translate.google.com.html'));
});

app.get('/lefigaro', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'lefigaro.fr.html'));
});

app.get('/elpais', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'elpais.com.html'));
});

app.get('/sciencedirect', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'sciencedirect.com.html'));
});

app.get('/wired', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'wired.com.html'));
});

app.get('/accounts.google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'accounts.google.com.html'));
});

app.get('/rt', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'rt.com.html'));
});

app.get('/doubleclick', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'doubleclick.net.html'));
});

app.get('/www.gov', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'www.gov.br.html'));
});

app.get('/dw', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'dw.com.html'));
});

app.get('/zoom', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'zoom.us.html'));
});

app.get('/opera', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'opera.com.html'));
});

app.get('/bitly', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'bitly.com.html'));
});

app.get('/guardian.co', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'guardian.co.uk.html'));
});

app.get('/afternic', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'afternic.com.html'));
});

app.get('/digg', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'digg.com.html'));
});

app.get('/mashable', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'mashable.com.html'));
});

app.get('/sapo', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'sapo.pt.html'));
});

app.get('/medium', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'medium.com.html'));
});

app.get('/planalto.gov', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'planalto.gov.br.html'));
});

app.get('/linktr', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'linktr.ee.html'));
});

app.get('/soundcloud', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'soundcloud.com.html'));
});

app.get('/amebaownd', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'amebaownd.com.html'));
});

app.get('/engadget', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'engadget.com.html'));
});

app.get('/ipv4.google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ipv4.google.com.html'));
});

app.get('/techradar', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'techradar.com.html'));
});

app.get('/scribd', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'scribd.com.html'));
});

app.get('/ads.google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ads.google.com.html'));
});

app.get('/docs.google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'docs.google.com.html'));
});

app.get('/shutterstock', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'shutterstock.com.html'));
});

app.get('/msn', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'msn.com.html'));
});

app.get('/adobe', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'adobe.com.html'));
});

app.get('/usda', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'usda.gov.html'));
});

app.get('/merriam-webster', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'merriam-webster.com.html'));
});

app.get('/netlify', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'netlify.app.html'));
});

app.get('/fb', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'fb.me.html'));
});

app.get('/kickstarter', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'kickstarter.com.html'));
});

app.get('/sedo', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'sedo.com.html'));
});

app.get('/tmz', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'tmz.com.html'));
});

app.get('/quora', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'quora.com.html'));
});

app.get('/lexpress', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'lexpress.fr.html'));
});

app.get('/dan', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'dan.com.html'));
});

app.get('/istockphoto', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'istockphoto.com.html'));
});

app.get('/twitter', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'twitter.com.html'));
});

app.get('/ouest-france', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ouest-france.fr.html'));
});

app.get('/m', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'm.me.html'));
});

app.get('/ovh', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ovh.com.html'));
});

app.get('/sendspace', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'sendspace.com.html'));
});

app.get('/indiegogo', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'indiegogo.com.html'));
});

app.get('/nginx', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'nginx.com.html'));
});

app.get('/youtu', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'youtu.be.html'));
});

app.get('/forbes', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'forbes.com.html'));
});

app.get('/ea', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ea.com.html'));
});

app.get('/justice', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'justice.gov.html'));
});

app.get('/mozilla', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'mozilla.org.html'));
});

app.get('/theatlantic', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'theatlantic.com.html'));
});

app.get('/amzn', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'amzn.to.html'));
});

app.get('/sedoparking', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'sedoparking.com.html'));
});

app.get('/linkedin', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'linkedin.com.html'));
});

app.get('/canada', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'canada.ca.html'));
});

app.get('/telegra', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'telegra.ph.html'));
});

app.get('/reuters', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'reuters.com.html'));
});

app.get('/tinyurl', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'tinyurl.com.html'));
});

app.get('/taringa', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'taringa.net.html'));
});

app.get('/nginx', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'nginx.org.html'));
});

app.get('/buydomains', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'buydomains.com.html'));
});

app.get('/hp', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'hp.com.html'));
});

app.get('/google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'google.it.html'));
});

app.get('/it.wikipedia', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'it.wikipedia.org.html'));
});

app.get('/mit', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'mit.edu.html'));
});

app.get('/files.wordpress', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'files.wordpress.com.html'));
});

app.get('/standard.co', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'standard.co.uk.html'));
});

app.get('/last', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'last.fm.html'));
});

app.get('/twimg', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'twimg.com.html'));
});

app.get('/bp.blogspot', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'bp.blogspot.com.html'));
});

app.get('/telegram', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'telegram.me.html'));
});

app.get('/foursquare', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'foursquare.com.html'));
});

app.get('/outlook', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'outlook.com.html'));
});

app.get('/samsung', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'samsung.com.html'));
});

app.get('/bbc.co', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'bbc.co.uk.html'));
});

app.get('/ssl-images-amazon', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ssl-images-amazon.com.html'));
});

app.get('/stackoverflow', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'stackoverflow.com.html'));
});

app.get('/interia', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'interia.pl.html'));
});

app.get('/google.com', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'google.com.tw.html'));
});

app.get('/usatoday', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'usatoday.com.html'));
});

app.get('/disqus', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'disqus.com.html'));
});

app.get('/picasaweb.google', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'picasaweb.google.com.html'));
});

app.get('/doi', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'doi.org.html'));
});

app.get('/fr.wikipedia', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'fr.wikipedia.org.html'));
});

app.get('/springer', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'springer.com.html'));
});

app.get('/liveinternet', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'liveinternet.ru.html'));
});

app.get('/ap', (req, res) => {
 res.sendFile(path.join(__dirname, 'framable', 'ap.or.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'framable', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});