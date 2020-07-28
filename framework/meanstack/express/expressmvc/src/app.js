const express = require("express");
const app = express();

app.get("/", (req, rest) => {
  app.send("My first express web page !!!");
});

app.get("/about", (req, res) => {
  res.send("Edd this is edwin");
});

app.listen(3000, () => {
  console.log("Thes server is running at port 3000");
});

