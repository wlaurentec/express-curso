const express = require("express");
const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
  console.log("Body:", req.body);
  res.send("Nuevo usuario creado!");
});



app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}`);
});
