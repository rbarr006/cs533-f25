// header-check.js
// Node >=18 (uses fetch). Usage: node header-check.js sites.txt results.csv

const fs = require('fs');

if (process.argv.length < 4) {
    console.error('Usage: node header-check.js sites.txt results.csv');
    process.exit(1);
}

const sitesFile = process.argv[2];
const outCsv = process.argv[3];

const sites = fs.readFileSync(sitesFile, 'utf8').trim().split(/\r?\n/).filter(Boolean);

// ---- Helper: normalize URL ----
function normalizeUrl(site) {
    let url = site.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url; // Default to HTTPS
    }
    return url;
}


async function check(site) {
    const url = normalizeUrl(site);
    try {
        const res = await fetch(url, { method: 'HEAD', redirect: 'follow', timeout: 10000 });
        // Some servers don't respond well to HEAD; fall back to GET if HEAD fails
        let headers = {};
        if (res && res.headers) {
            for (const [k, v] of res.headers) headers[k.toLowerCase()] = v;
        }
        // If HEAD returns 405 etc, try GET
        if (!res || res.status >= 400) {
            const r2 = await fetch(url, { method: 'GET', redirect: 'follow', timeout: 10000 });
            for (const [k, v] of r2.headers) headers[k.toLowerCase()] = v;
        }
        return {
            url,
            status: res ? res.status : 'ERR',
            xframe: headers['x-frame-options'] || '',
            csp: headers['content-security-policy'] || '',
            notes: ''
        };
    } catch (e) {
        return { url, status: 'ERR', xframe: '', csp: '', notes: String(e).slice(0, 200) };
    }
}

(async () => {
    const out = ['site,url,status,x-frame-options,frame-ancestors,notes'];
    for (const s of sites) {
        const r = await check(s);
        // Extract frame-ancestors part if present
        let fa = '';
        if (r.csp) {
            const m = r.csp.match(/frame-ancestors\s+([^;]+)/i);
            if (m) fa = m[1].trim();
        }
        out.push(`"${s.replace(/"/g, '""')}",${r.status},"${(r.xframe || '').replace(/"/g, '""')}","${fa.replace(/"/g, '""')}","${(r.notes || '').replace(/"/g, '""')}"`);
        console.log(s, r.status, r.xframe || '', fa || '');
    }
    fs.writeFileSync(outCsv, out.join('\n'));
    console.log('Wrote', outCsv);
})();
