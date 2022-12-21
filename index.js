const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/moviesList", (req, res) => {
  res.json([
    "Bahubali 1",
    "Bahubali 2",
    "KGF 1",
    "KGF 2",
    "Karthikeya 1",
    "Karthikeya 2",
  ]);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});