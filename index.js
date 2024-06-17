const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data/miarchivo", (req, res) => {
  res.sendFile(__dirname + "/luis-banchero.txt");
});

app.get("/data/lbr", (req, res) => {
  res.sendFile("/lbr.json", { root: __dirname });
});

app.get("/isAlive", (req, res) => {
  res.send("I'm alive!");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Luis",
    age: 25,
    country: "Peru",
    city: "Lima",
    married: false,
  });
});

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}`);
});
