const pool = require("../db/connection");

const getMovimientos = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT m.*, p.nombre as producto_nombre 
      FROM movimientos m
      JOIN productos p ON m.producto_id = p.id
      ORDER BY m.fecha DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener movimientos" });
  }
};

const createMovimiento = async (req, res) => {
  try {
    const { producto_id, tipo, cantidad, nota } = req.body;

    // Registrar el movimiento
    const movimiento = await pool.query(
      "INSERT INTO movimientos (producto_id, tipo, cantidad, nota) VALUES ($1, $2, $3, $4) RETURNING *",
      [producto_id, tipo, cantidad, nota],
    );

    // Actualizar el stock del producto
    if (tipo === "entrada") {
      await pool.query(
        "UPDATE productos SET stock_actual = stock_actual + $1 WHERE id = $2",
        [cantidad, producto_id],
      );
    } else if (tipo === "salida") {
      await pool.query(
        "UPDATE productos SET stock_actual = stock_actual - $1 WHERE id = $2",
        [cantidad, producto_id],
      );
    }

    res.status(201).json(movimiento.rows[0]);
  } catch (error) {
    console.error("Error detallado:", error);
    res.status(500).json({ error: "Error al registrar movimiento" });
  }
};

module.exports = { getMovimientos, createMovimiento };
