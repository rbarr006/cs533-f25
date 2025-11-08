const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
    
const favorites = JSON.parse(fs.readFileSync("./favorites.json", "utf8"));

const allowWildcardCORS = process.argv.includes("--allow-wildcard-cors");

if (allowWildcardCORS) {
    const cors = require("cors");
    app.use(cors());
    console.log("WARNING: CORS policy disabled. Allowing all origins."); 
}

app.get('/api/favorites', (req, res) => {
  res.json(favorites);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
