const express = require("express");
const fs = require("fs");
const path = require("path");
const md5 = require("md5");

const app = express();
const PORT = 4000;

// Four headers used for fingerprinting
const FINGERPRINT_HEADERS = [
  "User-Agent",
  "Accept-Language",
  "Accept-Encoding",
  "Accept"
];

// Store fingerprints in memory
// key: fingerprint hash, value: info object
const fingerprints = new Map();

/**
 * Create an MD5 fingerprint string from selected request headers.
 */
function makeFingerprint(req) {
  const parts = FINGERPRINT_HEADERS.map(name => req.get(name) || "");
  const raw = parts.join("|");
  return md5(raw);
}

/**
 * Append a simple log line to server.log.
 */
function writeServerLog(id, info) {
  const logPath = path.join(__dirname, "server.log");
  const line = `Fingerprint=${id}, Visits=${info.count}\n`;
  fs.appendFileSync(logPath, line);
}

/**
 * Main route: fingerprint the client and respond with a short message.
 */
app.get("/", (req, res) => {
  const id = makeFingerprint(req);

  // Snapshot of headers
  const headerSnapshot = {};
  FINGERPRINT_HEADERS.forEach(name => {
    headerSnapshot[name] = req.get(name) || "";
  });

  let info = fingerprints.get(id);
  let message;

  if (!info) {
    // First time client
    info = {
      id,
      headers: headerSnapshot,
      firstSeen: new Date(),
      lastSeen: new Date(),
      count: 1
    };
    fingerprints.set(id, info);

    message = "Hello, new client! You are client number 1";

    console.log("New fingerprint:", id);
  } else {
    // Returning client
    info.count += 1;
    info.lastSeen = new Date();

    message = `Welcome back! We recognized you as client number ${info.count}`;

    console.log("Returning fingerprint:", id, "visits =", info.count);
  }

  // Write to server.log
  writeServerLog(id, info);

  // Minimal browser output
  res.type("text/plain").send(`${message}`);
});

/**
 * Optional debug route
 */
app.get("/debug/fingerprints", (_req, res) => {
  const list = [...fingerprints.values()].map(f => ({
    id: f.id,
    visits: f.count,
    firstSeen: f.firstSeen,
    lastSeen: f.lastSeen,
    headers: f.headers
  }));
  res.json(list);
});

app.listen(PORT, () => {
  console.log("Fingerprint server running.");
}); 
