const axios = require('axios');
const fs = require('fs');
const path = require('path');

const urls = fs.readFileSync('sitelist.txt', 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

const results = [];
const outputFile = 'frame_report.md';
const framesDir = path.join(__dirname, 'framable');

// Ensure frames directory exists
if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir);
}

let framableCount = 0;
let nonFramableCount = 0;
let unknownCount = 0;

async function checkHeaders() {
    for (const url of urls) {
        let framable = 'Unknown';
        let notes = '';
        let status = 0;

        try {
            console.log(`Checking ${url}...`);
            // Use GET with browser-like headers. Some sites block HEAD requests or
            // non-browser user-agents which can produce false 403s.
            const response = await axios.get(`https://${url}`, {
                timeout: 50000,
                validateStatus: null,
                maxRedirects: 50,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Referer': 'https://www.google.com/'
                }
            });

            status = response.status;
            const headers = response.headers || {};
            const xFrameOptions = headers['x-frame-options'];
            const cspHeader = headers['content-security-policy'] || headers['content-security-policy-report-only'] || '';

            // Try to extract frame-ancestors from CSP
            let frameAncestors = null;
            const faMatch = cspHeader.match(/frame-ancestors\s+([^;]+)/i);
            if (faMatch) {
                frameAncestors = faMatch[1].trim();
            }

            if (status >= 200 && status < 400) {
                if (xFrameOptions) {
                    framable = 'No';
                    notes = `X-Frame-Options: ${xFrameOptions}`;
                    nonFramableCount++;
                } else if (frameAncestors) {
                    // If frame-ancestors is present and not a wildcard, assume it's blocking
                    if (frameAncestors === "*") {
                        framable = 'Yes';
                        notes = `Content-Security-Policy frame-ancestors: ${frameAncestors}`;
                        framableCount++;
                    } else {
                        framable = 'No';
                        notes = `Content-Security-Policy frame-ancestors: ${frameAncestors}`;
                        nonFramableCount++;
                    }
                } else {
                    framable = 'Yes';
                    notes = `No X-Frame-Options or frame-ancestors detected (Server: ${headers['server'] || 'unknown'})`;
                    framableCount++;
                }
            } else if (status >= 400 && status < 500) {
                // If X-Frame-Options blocks framing or frame-ancestors is restrictive, mark as 'No'
                if (
                    (xFrameOptions && /deny|sameorigin/i.test(xFrameOptions)) ||
                    (frameAncestors && frameAncestors !== "*")
                ) {
                    framable = 'No';
                    notes = `HTTP error ${status} ${response.statusText || ''}`;
                    if (xFrameOptions) notes += ` | X-Frame-Options: ${xFrameOptions}`;
                    if (frameAncestors) notes += ` | CSP frame-ancestors: ${frameAncestors}`;
                    nonFramableCount++;
                } else {
                    framable = 'Unknown';
                    notes = `HTTP error ${status} ${response.statusText || ''}`;
                    if (xFrameOptions) notes += ` | X-Frame-Options: ${xFrameOptions}`;
                    if (frameAncestors) notes += ` | CSP frame-ancestors: ${frameAncestors}`;
                    unknownCount++;
                }
                console.error(`Received HTTP ${status} checking ${url}`);
            } else if (status >= 500) {
                framable = 'No';
                notes = `Server error ${status}`;
                nonFramableCount++;
            } else {
                framable = 'Unknown';
                notes = `Unexpected status ${status}`;
                unknownCount++;
            }
        } catch (error) {
            // axios can put a response on the error for HTTP responses; surface that
            if (error.response) {
                const errRes = error.response;
                status = errRes.status || 0;
                const headers = errRes.headers || {};
                const xFrameOptions = headers['x-frame-options'];
                const cspHeader = headers['content-security-policy'] || headers['content-security-policy-report-only'] || '';
                let frameAncestors = null;
                const faMatch = cspHeader.match(/frame-ancestors\s+([^;]+)/i);
                if (faMatch) frameAncestors = faMatch[1].trim();

                framable = (xFrameOptions || frameAncestors) ? 'No' : 'Unknown';
                notes = `HTTP ${status} from server`;
                if (xFrameOptions) notes += ` | X-Frame-Options: ${xFrameOptions}`;
                if (frameAncestors) notes += ` | CSP frame-ancestors: ${frameAncestors}`;
                if (headers['server']) notes += ` | Server: ${headers['server']}`;
                console.warn(`Received HTTP ${status} checking ${url}`);
            } else {
                console.warn(`Dead site: ${url} (${error.message})`);
                framable = 'No';
                notes = 'Dead site or network error';
            }
        }

        results.push({ url, framable, notes });
        createFrameHTML(url, framable, notes);
    }

    writeMarkdownReport();
    createIndexPage();
}

function createFrameHTML(url, framable, notes) {
    const safeName = url.replace(/[^a-zA-Z0-9.-]/g, '_');
    const htmlPath = path.join(framesDir, `${safeName}.html`);
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Frame Test - ${url}</title>
<style>
  body { font-family: sans-serif; background: #fafafa; color: #222; margin: 0; padding: 1rem; }
  header { background: #007acc; color: white; padding: 1rem; border-radius: 0.5rem; }
  iframe { width: 100%; height: 90vh; border: 2px solid #ccc; border-radius: 0.5rem; margin-top: 1rem; }
  .styled-link {
      color: #fff;
      background: #005fa3;
      padding: 0.5em 1em;
      border-radius: 0.3em;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.2s;
    }
    .styled-link:hover {
      background: #003f6b;
    }
</style>
</head>
<body>
<header>
  <h2>${url}</h2>
  <p><strong>Framable:</strong> ${framable} &nbsp; | &nbsp; <strong>Notes:</strong> ${notes}</p>
  <a href="index.html" class="styled-link"> Return Home </a>
</header>
<iframe src="https://${url}" loading="lazy"></iframe>
</body>
<footer>
    <a href="index.html" class="styled-link"> Return Home </a>
</footer>
</html>
`;
    fs.writeFileSync(htmlPath, htmlContent);
}

function writeMarkdownReport() {
    let markdown = '# Cookie Report\n\n';
    markdown += '| URL | Framable? | Notes |\n';
    markdown += '|-|-|-|\n';

    for (const { url, framable, notes } of results) {
        markdown += `| ${url} | ${framable} | ${notes} |\n`;
    }
    
    markdown += `\nTotal Sites: ${results.length} | Framable: ${framableCount} | Not Framable: ${nonFramableCount} | Unknown: ${unknownCount}\n`;

    fs.writeFileSync(outputFile, markdown);
    console.log(`\n Markdown report written to ${outputFile}`);
}

function createIndexPage() {
    const indexPath = path.join(framesDir, 'index.html');
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Framability Test Index</title>
<style>
  body { font-family: system-ui, sans-serif; background: #f5f7fa; color: #222; padding: 2rem; }
  h1 { color: #007acc; }
  table { border-collapse: collapse; width: 100%; margin-top: 1rem; }
  th, td { border: 1px solid #ccc; padding: 0.5rem 1rem; text-align: left; }
  th { background: #007acc; color: white; }
  tr:nth-child(even) { background: #f0f4f8; }
  a { color: #007acc; text-decoration: none; }
  a:hover { text-decoration: underline; }
  
</style>
</head>
<body>
<h1>Framability Test Index</h1>
<table>
  <tr><th>URL</th><th>Framable?</th><th>Notes</th><th>View Test</th></tr>
`;

    for (const { url, framable, notes } of results) {
        const safeName = url.replace(/[^a-zA-Z0-9.-]/g, '_');
        html += `<tr>
            <td>${url}</td>
            <td>${framable}</td>
            <td>${notes}</td>
            <td><a href="${safeName}.html" target="_blank">Open</a></td>
        </tr>`;
        
    }

    html += `
</table>
<p>Total Sites: ${results.length} | Framable: ${framableCount} | Not Framable: ${nonFramableCount} | Unknown: ${unknownCount}</p>
</body>
</html>
`;

    fs.writeFileSync(indexPath, html);
    console.log(`Index page written to ${indexPath}`);
}

checkHeaders();
