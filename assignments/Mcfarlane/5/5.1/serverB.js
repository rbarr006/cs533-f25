// 5.1/serverB.js
const express = require("express");
const app = express();
const PORT = 4000;

// CORS enablement
const cors = require("cors");
app.use(cors());  // Allow all origins

app.get("/favorites", (req, res) => {
  res.json({
    personality: "Keanu Reeves",
    place: "Kyoto",
    book: "The Alchemist",
    movie: "Inception"
  });
});

app.listen(PORT, () => console.log(`Server B running at http://localhost:${PORT}`));
