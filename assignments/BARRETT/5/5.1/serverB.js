// 5.1/serverB.js — API (Origin B) @ http://localhost:4001
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4001;

// Toggle with PowerShell:
// $env:ENABLE_CORS="false"  or  $env:ENABLE_CORS="true"
const ENABLE_CORS = String(process.env.ENABLE_CORS).toLowerCase() === "true";

// Favorites (same data you used before)
const favorites = {
    personality: "Kobe Bryant",
    place: "Outer-Banks",
    bookOrSong: "Dont-Worry-It-Gets-Worse",
    movieOrTV: "Mr-Church"
};

// If enabled, allow Origin A
if (ENABLE_CORS) {
    app.use(cors({ origin: "http://localhost:4000" }));
}

app.get("/", (_req, res) => {
    res.type("text/plain").send(
        `API up on :${PORT}\nENABLE_CORS=${ENABLE_CORS}\nTry GET /api/favorites`
    );
});

// Single endpoint: when CORS is OFF, browsers at :4000 will be blocked
app.get("/api/favorites", (_req, res) => {
    res.json(favorites);
});

app.listen(PORT, () => {
    console.log(`API server on http://localhost:${PORT} (ENABLE_CORS=${ENABLE_CORS})`);
});

app.listen(PORT, () => console.log(`Server B running at http://localhost:${PORT}`));