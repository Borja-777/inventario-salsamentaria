const express = require("express");
const router = express.Router();
const {
  getProductos,
  createProducto,
  getAlertas,
} = require("../controllers/productos.controller");

router.get("/", getProductos);
router.post("/", createProducto);
router.get("/alertas", getAlertas);

module.exports = router;
