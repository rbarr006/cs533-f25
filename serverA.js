// 5.2/serverA.js — static pages (Origin A) @ http://localhost:4000
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.static(__dirname));
app.get("/", (_req, res) => res.redirect("/index.html"));

app.listen(PORT, () => {
    console.log(`Static server (A) on http://localhost:${PORT}`);
});