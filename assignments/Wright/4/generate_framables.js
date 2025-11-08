#!/usr/bin/env node
// generate_framables.js
// Usage: node generate_framables.js <sites.txt> <responses_dir> <out_dir>

const fs = require('fs');
const path = require('path');

if (process.argv.length < 5) {
  console.error('Usage: node generate_framables.js <sites.txt> <responses_dir> <out_dir>');
  process.exit(1);
}

const sitesFile = path.resolve(process.argv[2]);
const responsesDir = path.resolve(process.argv[3]);
const outDir = path.resolve(process.argv[4]);

if (!fs.existsSync(sitesFile)) { console.error('sites file not found:', sitesFile); process.exit(2); }
if (!fs.existsSync(responsesDir)) { console.error('responses directory not found:', responsesDir); process.exit(3); }
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function readLines(p) {
  return fs.readFileSync(p, 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
}

function findResponseFile(site) {
  const candidates = [
    path.join(responsesDir, site),
    path.join(responsesDir, site + '.txt'),
    path.join(responsesDir, site + '.response'),
    path.join(responsesDir, site + '.http'),
    path.join(responsesDir, site + '.headers'),
  ];
  for (const c of candidates) if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  const all = fs.readdirSync(responsesDir);
  const found = all.find(f => f.toLowerCase().includes(site.toLowerCase()));
  return found ? path.join(responsesDir, found) : null;
}

function parseResponseHeaders(raw) {
  const lines = raw.split(/\r?\n/);
  const headers = [];
  for (const l of lines) {
    const idx = l.indexOf(':');
    if (idx > 0) {
      const name = l.slice(0, idx).trim();
      const val = l.slice(idx + 1).trim();
      headers.push({ name, val });
    }
  }
  const xfo = headers.find(h => h.name.toLowerCase() === 'x-frame-options');
  const csp = headers.find(h => h.name.toLowerCase() === 'content-security-policy');
  let frameAncestors = null;
  if (csp) {
    const m = csp.val.match(/frame-ancestors\s+([^;]+)/i);
    if (m) frameAncestors = m[1].trim();
  }
  return {
    xFrameOptions: xfo ? xfo.val : null,
    contentSecurityPolicy: csp ? csp.val : null,
    frameAncestors
  };
}

function safeFilename(site) {
  return site.replace(/[:\/\\?%*|"<> ]+/g, '_') + '.html';
}
function escapeHtml(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const sites = readLines(sitesFile);
console.log(`Found ${sites.length} sites in ${sitesFile}`);

const rows = [];

for (const site of sites) {
  try {
    const respFile = findResponseFile(site);
    let rawResponse = '(no saved response found for this site in responses directory)';
    let parsed = { xFrameOptions: null, contentSecurityPolicy: null, frameAncestors: null };
    if (respFile) {
      rawResponse = fs.readFileSync(respFile, 'utf8');
      parsed = parseResponseHeaders(rawResponse);
    }

    const outName = safeFilename(site);
    const outPath = path.join(outDir, outName);
    const iframeSrc = `https://${site}`;

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Framable test — ${escapeHtml(site)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{font-family:system-ui,Segoe UI,Arial;margin:18px;color:#111}
  .meta{margin-bottom:10px;padding:8px;background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px}
  iframe{width:100%;height:420px;border:1px solid #444;border-radius:6px}
  pre{background:#111;color:#eee;padding:12px;white-space:pre-wrap;overflow:auto;max-height:360px;border-radius:6px}
  a.small{font-size:90%}
</style>
</head>
<body>
  <h1>${escapeHtml(site)}</h1>
  <div class="meta">
    <strong>Iframe src:</strong> <a class="small" href="${iframeSrc}" target="_blank" rel="noopener">${iframeSrc}</a><br>
    <strong>X-Frame-Options:</strong> ${escapeHtml(parsed.xFrameOptions || '---')}<br>
    <strong>Content-Security-Policy:</strong> ${escapeHtml(parsed.contentSecurityPolicy || '---')}<br>
    <strong>frame-ancestors:</strong> ${escapeHtml(parsed.frameAncestors || '---')}
  </div>

  <h2>Live attempt to render</h2>
  <p>Below iframe points to <code>${escapeHtml(iframeSrc)}</code>. Use DevTools → Console / Network to inspect blocking messages and response headers.</p>
  <iframe src="${iframeSrc}" sandbox="" title="iframe for ${escapeHtml(site)}"></iframe>

  <h2>Saved HTTP response (evidence)</h2>
  <pre>${escapeHtml(rawResponse)}</pre>

  <p><a href="index.html" class="small">Back to index</a></p>
</body>
</html>`;

    fs.writeFileSync(outPath, html, 'utf8');
    rows.push({
      site,
      file: outName,
      xFrameOptions: parsed.xFrameOptions,
      frameAncestors: parsed.frameAncestors,
      respFile: respFile ? path.relative(process.cwd(), respFile) : null
    });
    console.log(`Wrote ${outName}`);
  } catch (e) {
    console.error('Error processing', site, e && e.message);
  }
}

// Build a prettier index.html (table + CSS)
const indexRows = rows.map((r, i) => {
  const xfoText = r.xFrameOptions ? escapeHtml(r.xFrameOptions).toUpperCase() : '—';
  const fa = r.frameAncestors ? escapeHtml(r.frameAncestors) : '—';
  const resp = r.respFile ? escapeHtml(r.respFile) : 'missing';
  return `<tr>
    <td class="num">${i+1}</td>
    <td class="site"><a href="./${r.file}" target="_blank" rel="noopener">${escapeHtml(r.site)}</a></td>
    <td class="xfo">${xfoText}</td>
    <td class="fa">${fa}</td>
    <td class="resp">${resp}</td>
  </tr>`;
}).join('\n');

const indexHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Framable test index</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--bg:#f8fafb;--card:#fff;--border:#e6e9ef;--accent:#0366d6}
  body{font-family:system-ui,Segoe UI,Arial;margin:18px;background:var(--bg);color:#111}
  .container{max-width:1200px;margin:0 auto}
  h1{font-size:32px;margin-bottom:8px}
  p.lead{color:#444;margin-top:0}
  table{width:100%;border-collapse:collapse;margin-top:12px;background:var(--card);border:1px solid var(--border);border-radius:6px;overflow:hidden}
  th,td{padding:10px 12px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}
  th{background:#fafbfd;color:#333;font-weight:600}
  tr:nth-child(even) td{background:#fff}
  a{color:var(--accent)}
  td.num{width:48px;text-align:right;color:#666}
  td.xfo{width:140px;color:#333;font-weight:600}
  td.fa{font-size:90%;color:#444;max-width:420px}
  td.resp{font-size:90%;color:#666}
  @media (max-width:900px){ td.fa{display:block} table,thead,tbody,th,td,tr{display:block} tr{margin-bottom:12px} th{display:none} td{border-bottom:none;padding:8px} td.num{text-align:left} }
</style>
</head>
<body>
  <div class="container">
    <h1>Framable test index</h1>
    <p class="lead">Click a site to open the test page (iframe + saved response). After opening, inspect DevTools Console/Network for why a site was blocked.</p>

    <table>
      <thead>
        <tr><th>#</th><th>site</th><th>X-Frame-Options</th><th>frame-ancestors</th><th>response file</th></tr>
      </thead>
      <tbody>
        ${indexRows}
      </tbody>
    </table>

    <footer style="margin-top:18px;color:#666;font-size:90%">Generated by generate_framables.js on ${new Date().toISOString()}</footer>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outDir,'index.html'), indexHtml, 'utf8');
console.log('Index written to', path.join(outDir,'index.html'));
console.log('Done.');
