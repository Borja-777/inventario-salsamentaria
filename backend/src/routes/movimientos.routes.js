const express = require("express");
const router = express.Router();
const {
  getMovimientos,
  createMovimiento,
} = require("../controllers/movimientos.controller");

router.get("/", getMovimientos);
router.post("/", createMovimiento);

module.exports = router;
