const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const data = JSON.parse(fs.readFileSync("quotes.json"));

app.use(express.json());
app.use(cors());

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

app.get("/api", (req, res) => {
  const randomMovie = parseInt(Math.random() * Object.keys(data).length);
  const randomQuote = parseInt(
    Math.random() * Object.keys(data[Object.keys(data)[randomMovie]]).length - 1
  );
  res.json({
    movie_name: Object.keys(data)[randomMovie],
    quote: data[Object.keys(data)[randomMovie]][randomQuote],
  });
});
