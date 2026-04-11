const { get } = require("node:http");
const pool = require("../db/connection");

//Funcion para obtener todos los productos
const getProductos = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM productos WHERE activo = true ORDER BY id ASC",
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

//Funcion para crear un nuevo producto
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

//Funcion para actualizar un producto existente
const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      categoria,
      precio_venta,
      stock_actual,
      stock_minimo,
      unidad,
    } = req.body;
    const result = await pool.query(
      "UPDATE productos SET nombre = $1, categoria = $2, precio_venta = $3, stock_actual = $4, stock_minimo = $5, unidad = $6 WHERE id = $7 RETURNING *",
      [nombre, categoria, precio_venta, stock_actual, stock_minimo, unidad, id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

//Funcion para desactivar un producto (marcar como inactivo)
const desactivarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "UPDATE productos SET activo = false WHERE id = $1 RETURNING *",
      [id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al desactivar producto" });
  }
};

//Funcion de alerta para productos con stock bajo
const getAlertas = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM productos WHERE stock_actual <= stock_minimo ORDER BY stock_actual ASC",
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener alertas" });
  }
};

module.exports = {
  getProductos,
  createProducto,
  getAlertas,
  updateProducto,
  desactivarProducto,
};
