const pool = require("../db/connection");

const getProductos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

const createProducto = async (req, res) => {
  try {
    const {
      nombre,
      categoria,
      precio_venta,
      stock_actual,
      stock_minimo,
      unidad,
    } = req.body;
    const result = await pool.query(
      "INSERT INTO productos (nombre, categoria, precio_venta, stock_actual, stock_minimo, unidad) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [nombre, categoria, precio_venta, stock_actual, stock_minimo, unidad],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};

module.exports = { getProductos, createProducto };
