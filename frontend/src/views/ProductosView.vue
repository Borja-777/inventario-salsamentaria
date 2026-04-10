<template>
  <div>
    <h1>Productos</h1>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock actual</th>
          <th>Stock mínimo</th>
          <th>Unidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.categoria }}</td>
          <td>{{ producto.precio_venta }}</td>
          <td>{{ producto.stock_actual }}</td>
          <td>{{ producto.stock_minimo }}</td>
          <td>{{ producto.unidad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const productos = ref([]);

onMounted(async () => {
  const response = await api.get("/productos");
  productos.value = response.data;
});
</script>
