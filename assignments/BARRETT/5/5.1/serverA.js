// serverA.js — Static server (Origin A) @ http://localhost:4000
const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

// Serve the current folder so /index.html loads
app.use(express.static(__dirname));

// Optional: redirect root to index.html
app.get("/", (_req, res) => res.redirect("/index.html"));

app.listen(PORT, () => {
  console.log(`Static server running on http://localhost:${PORT}`);
});