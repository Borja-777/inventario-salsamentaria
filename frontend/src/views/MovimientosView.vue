<template>
  <div>
    <h1>Registrar Movimiento</h1>

    <form @submit.prevent="registrarMovimiento">
      <div>
        <label>Producto:</label>
        <select v-model="form.producto_id">
          <option v-for="producto in productos" :key="producto.id" :value="producto.id">
            {{ producto.nombre }}
          </option>
        </select>
      </div>

      <div>
        <label>Tipo:</label>
        <select v-model="form.tipo">
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
      </div>

      <div>
        <label>Cantidad:</label>
        <input type="number" v-model="form.cantidad" min="1" />
      </div>

      <div>
        <label>Nota:</label>
        <input type="text" v-model="form.nota" />
      </div>

      <button type="submit">Registrar</button>
    </form>

    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const productos = ref([]);
const mensaje = ref("");

const form = ref({
  producto_id: "",
  tipo: "entrada",
  cantidad: 1,
  nota: "",
});

onMounted(async () => {
  const response = await api.get("/productos");
  productos.value = response.data;
});

const registrarMovimiento = async () => {
  try {
    await api.post("/movimientos", form.value);
    mensaje.value = "✅ Movimiento registrado correctamente";
    form.value = { producto_id: "", tipo: "entrada", cantidad: 1, nota: "" };
  } catch (error) {
    mensaje.value = "❌ Error al registrar movimiento";
  }
};
</script>
