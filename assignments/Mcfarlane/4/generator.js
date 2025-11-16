// generator.js
const fs = require('fs');
const sites = fs.readFileSync('AMCFA010@ODU.EDU', 'utf8').trim().split(/\r?\n/).filter(Boolean);

// ---- Helper: normalize URL ----
function normalizeUrl(site) {
    let url = site.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url; // Default to HTTPS
    }
    return url;
}

if (!fs.existsSync('test-pages')) fs.mkdirSync('test-pages');

let indexLines = ['<h1>Framable tests</h1>', '<ul>'];
sites.forEach((site, idx) => {
    const url = normalizeUrl(site);
    const fname = `site_${idx + 1}.html`;
    const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Test ${idx + 1}</title></head>
<body>
<h2>Test ${idx + 1}</h2>
<p>URL: <a href="${url}" target="_blank">${url}</a></p>
<iframe id="f" src="${url}" style="width:100%;height:500px;border:1px solid #333"></iframe>
<p id="status">Loading...</p>
<script>
  const f = document.getElementById('f');
  f.addEventListener('load', () => {
    try {
      // try to access iframe's title — will throw for cross-origin
      const t = f.contentDocument && f.contentDocument.title;
      document.getElementById('status').textContent = 'Loaded. frame accessible? ' + (t ? 'yes (same-origin)':'no (cross-origin)');
    } catch (e) {
      document.getElementById('status').textContent = 'Load event fired but access blocked (cross-origin or sandbox).';
    }
  });
  // fallback: check after 8 seconds whether frame remains blank
  setTimeout(()=> {
    const status = document.getElementById('status').textContent;
    if (status === 'Loading...') document.getElementById('status').textContent = 'No load detected (possibly blocked by X-Frame-Options or CSP).';
  }, 8000);
</script>
</body></html>`;
    fs.writeFileSync(`test-pages/${fname}`, html);
    indexLines.push(`<li><a href="test-pages/${fname}" target="_blank">Test ${idx + 1}</a> — <a href="${url}" target="_blank">source</a></li>`);
});
indexLines.push('</ul>');
fs.writeFileSync('parent-index.html', indexLines.join('\n'));
console.log('Generated', sites.length, 'test pages in test-pages/ and parent-index.html');
