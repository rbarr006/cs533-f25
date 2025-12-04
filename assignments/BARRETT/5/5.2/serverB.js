// 5.2/serverB.js — API (Origin B) @ http://localhost:4001
const express = require("express");
const app = express();
const PORT = 4001;

// Toggle with env var (PowerShell example):
// $env:ENABLE_CORS = "false"  OR  $env:ENABLE_CORS = "true"
const ENABLE_CORS = String(process.env.ENABLE_CORS).toLowerCase() === "true";

const favorites = {
    personality: "Kobe Bryant",
    place: "Outer-Banks",
    bookOrSong: "Dont-Worry-It-Gets-Worse",
    movieOrTV: "Mr-Church"
};

// For allowed case, we must EXPOSE non-simple headers so JS can read them
const EXPOSE = [
    "X-CS533f25-Personality",
    "X-CS533f25-Place",
    "X-CS533f25-BookOrSong",
    "X-CS533f25-MovieOrTV"
];

function setFavoriteHeaders(res) {
    res.set({
        "X-CS533f25-Personality": favorites.personality,
        "X-CS533f25-Place": favorites.place,
        "X-CS533f25-BookOrSong": favorites.bookOrSong,
        "X-CS533f25-MovieOrTV": favorites.movieOrTV
    });
}

app.get("/", (_req, res) => {
    res.type("text/plain").send(
        `API up on :${PORT}\nENABLE_CORS=${ENABLE_CORS}\nTry GET /api/headers`
    );
});

// Single endpoint. We only add CORS headers when ENABLE_CORS is true.
app.get("/api/headers", (_req, res) => {
    setFavoriteHeaders(res);

    if (ENABLE_CORS) {
        res.set("Access-Control-Allow-Origin", "http://localhost:5000");
        res.set("Vary", "Origin"); // good practice
        res.set("Access-Control-Expose-Headers", EXPOSE.join(", "));
    }

    res.json({ ok: true, note: "Custom headers attached." });
});

app.listen(PORT, () => {
    console.log(`API server (B) on http://localhost:${PORT} (ENABLE_CORS=${ENABLE_CORS})`);
});