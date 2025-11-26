// generate.js
// Reads sites.txt and creates framable HTML files in framable/
const fs = require('fs');
const path = require('path');
const base = __dirname;
const outDir = path.join(base, '4','framable');
fs.mkdirSync(outDir, { recursive: true });
const sites = fs.readFileSync(path.join(base,'sites.txt'),'utf8').split(/\r?\n/).filter(s=>s.trim() && !s.startsWith('#'));
if (sites.length === 0) {
  console.log('No sites found in sites.txt. Open sites.txt in VS Code and paste your 100 sites (one per line).');
  process.exit(0);
}
sites.forEach((site, idx) => {
  const name = 'site_' + String(idx+1).padStart(3,'0') + '.html';
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Framing test ${site}</title></head>
<body>
<h2>Framing test for ${site}</h2>
<p>If the site loads in the iframe below, it's framable. If you see a "refused to connect" or blank, it is not framable.</p>
<iframe src="${site}" width="1000" height="700" sandbox></iframe>
<hr>
<p>Open devtools → Network to inspect response headers (X-Frame-Options, CSP frame-ancestors).</p>
</body></html>`;
  fs.writeFileSync(path.join(outDir,name), html);
  console.log('Wrote', name);
});
console.log('Done. Open the folder 4/framable in VS Code or serve with the server.');
