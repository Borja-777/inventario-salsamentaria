<template>
  <div>
    <h1>📦 Productos</h1>

    <button @click="mostrarFormulario = !mostrarFormulario">
      {{ mostrarFormulario ? "Cancelar" : "+ Agregar Producto" }}
    </button>

    <form v-if="mostrarFormulario" @submit.prevent="agregarProducto">
      <div>
        <label>Nombre:</label>
        <input type="text" v-model="form.nombre" required />
      </div>

      <div>
        <label>Categoría:</label>
        <select v-model="form.categoria">
          <option value="">Seleccionar...</option>
          <option value="Embutidos">Embutidos</option>
          <option value="Lácteos">Lácteos</option>
          <option value="Carnes">Carnes</option>
          <option value="Enlatados">Enlatados</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Condimentos">Condimentos</option>
          <option value="Panadería">Panadería</option>
          <option value="Medicamentos">Medicamentos</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <div>
        <label>Precio venta:</label>
        <input type="number" v-model="form.precio_venta" required min="1" />
      </div>

      <div>
        <label>Stock actual:</label>
        <input type="number" v-model="form.stock_actual" required min="1" />
      </div>

      <div>
        <label>Stock mínimo:</label>
        <input type="number" v-model="form.stock_minimo" required min="1" />
      </div>

      <div>
        <label>Unidad de medida:</label>
        <select v-model="form.unidad">
          <option value="">Seleccionar...</option>
          <option value="Kilogramo">kg - kilogramo</option>
          <option value="Libra">lb - libra</option>
          <option value="Gramo">g - gramo</option>
          <option value="Litro">l - litro</option>
          <option value="Mililitro">ml - mililitro</option>
          <option value="Unidad">und - unidad</option>
          <option value="Paquete">paq - paquete</option>
          <option value="Onza">oz - onza</option>
        </select>
      </div>

      <button type="submit">Guardar</button>
    </form>

    <p v-if="mensaje">{{ mensaje }}</p>

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
const mostrarFormulario = ref(false);
const mensaje = ref("");

const form = ref({
  nombre: "",
  categoria: "",
  precio_venta: 0,
  stock_actual: 0,
  stock_minimo: 0,
  unidad: "",
});

const cargarProductos = async () => {
  const response = await api.get("/productos");
  productos.value = response.data;
};

const agregarProducto = async () => {
  try {
    await api.post("/productos", form.value);
    mensaje.value = "✅ Producto agregado exitosamente.";
    mostrarFormulario.value = false;
    form.value = {
      nombre: "",
      categoria: "",
      precio_venta: 0,
      stock_actual: 0,
      stock_minimo: 0,
      unidad: "",
    };
    await cargarProductos();
  } catch (error) {
    mensaje.value = "❌ Error al agregar el producto.";
  }
};

onMounted(cargarProductos);
</script>
