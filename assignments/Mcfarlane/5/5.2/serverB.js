// 5.2/serverB.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

// Initially comment this out to show blocking
app.use(cors({ exposedHeaders: ["X-CS533f25-Personality", "X-CS533f25-Place", "X-CS533f25-Book", "X-CS533f25-Movie"] }));

app.get("/favorites", (req, res) => {
  res.setHeader("X-CS533f25-Personality", "Keanu Reeves");
  res.setHeader("X-CS533f25-Place", "Kyoto");
  res.setHeader("X-CS533f25-Book", "The Alchemist");
  res.setHeader("X-CS533f25-Movie", "Inception");
  res.json({ message: "Custom headers sent!" });
});

app.listen(PORT, () => console.log(`Server B running at http://localhost:${PORT}`));
