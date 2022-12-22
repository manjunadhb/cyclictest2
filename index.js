const express = require("express");
const cors = require("cors");
const PORT = process.env.port || 5000;
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(cors());

// app.get("*", (req, res) => {
//   res.sendFile(__dirname, "./client/build/index.html");
// });

// app.get("/", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

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
