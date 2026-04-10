import { createRouter, createWebHistory } from "vue-router";
import ProductosView from "../views/ProductosView.vue";
import MovimientosView from "../views/MovimientosView.vue";
import AlertasView from "../views/AlertasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Productos",
      component: ProductosView,
    },
    {
      path: "/movimientos",
      name: "Movimientos",
      component: MovimientosView,
    },
    {
      path: "/alertas",
      name: "Alertas",
      component: AlertasView,
    },
  ],
});

export default router;
