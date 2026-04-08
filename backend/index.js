const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/db/connection");

const productosRoutes = require("./src/routes/productos.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/productos", productosRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "API Inventario Salsamentaria funcionando ✅" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
