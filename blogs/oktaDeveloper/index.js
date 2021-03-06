import express from "express";
const app = express();

const port = 5664;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server started at http://localhost:$1", port);
});
