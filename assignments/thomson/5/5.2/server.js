const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
    
const favorites = JSON.parse(fs.readFileSync("./favorites.json", "utf8"));

const allowWildcardCORS = process.argv.includes("--allow-wildcard-cors");

if (allowWildcardCORS) {
    const cors = require("cors");
    app.use(cors({
        origin: '*',
        exposedHeaders: [
          "X-CS533f25-book",
          "X-CS533f25-youtuber",
          "X-CS533f25-tvshow",
          "X-CS533f25-place"
        ]
    }));
    console.log("WARNING: CORS policy disabled. Allowing all origins."); 
}

app.get('/api/favorites', (req, res) => {
  res.setHeader("X-CS533f25-book", "Lies of Locke Lamora");
  res.setHeader("X-CS533f25-youtuber", "Linus Sebastian");
  res.setHeader("X-CS533f25-tvshow", "Fullmetal Alchemist");
  res.setHeader("X-CS533f25-place", "Hatteras");
  res.json(favorites);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
