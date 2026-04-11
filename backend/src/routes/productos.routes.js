const express = require("express");
const router = express.Router();
const {
  getProductos,
  createProducto,
  getAlertas,
  updateProducto,
  desactivarProducto,
} = require("../controllers/productos.controller");

router.get("/", getProductos);
router.post("/", createProducto);
router.get("/alertas", getAlertas);
router.put("/:id", updateProducto);
router.put("/:id/desactivar", desactivarProducto);

module.exports = router;
