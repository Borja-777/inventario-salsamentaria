<template>
  <div>
    <nav>
      <RouterLink to="/"> 📦 Productos</RouterLink>
      <RouterLink to="/movimientos"> 🔄 Movimientos</RouterLink>
      <RouterLink to="/alertas"> ⚠️ Alertas</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
nav {
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #2c3e50;
  border-radius: 12px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 24px;
}
</style>
