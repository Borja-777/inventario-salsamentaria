<template>
  <div>
    <h1>⚠️ Alertas de Stock</h1>
    <p v-if="alertas.length === 0">✅ Todos los productos tienen stock suficiente.</p>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Stock Actual</th>
          <th>Stock Mínimo</th>
          <th>Unidad</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="producto in alertas">
          :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.categoria }}</td>
          <td style="color: red; font-weight: bold">{{ producto.stock_actual }}</td>
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

const alertas = ref([]);

onMounted(async () => {
  const response = await api.get("/productos/alertas");
  alertas.value = response.data;
});
</script>
