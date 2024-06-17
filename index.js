const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.send("Lista de productos");
})

app.post("/products", (req, res) => {
  res.send("Creando productos");
})

app.put("/products", (req, res) => {
  res.send("Actualizando productos");
})

app.delete("/products", (req, res) => {
  res.send("Eliminando productos");
})

app.patch("/products", (req, res) => {
  res.send("Actulizando una parte del producto");
})


app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}`);
});
