const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const data = JSON.parse(fs.readFileSync("quotes.json"));

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/api", (req, res) => {
  const dataLength = Object.keys(data).length;

  const randomMovie = parseInt(Math.random() * dataLength);

  const quotesLength = parseInt(
    Object.keys(data[Object.keys(data)[randomMovie]]).length
  );

  const randomQuote = parseInt(Math.random() * Object.keys(quotesLength - 1));

  res.json({
    movie_name: Object.keys(data)[randomMovie],
    movie_thumb: data[Object.keys(data)[randomMovie]]["img_src"],
    quote: data[Object.keys(data)[randomMovie]][randomQuote],
  });
});
