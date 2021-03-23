import Vue from "vue";
import VueRouter from "vue-router";
import HomeAdmin from "../views/HomeAdmin.vue";
import Usuarios from "../views/Usuarios.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,

  },
];

const router = new VueRouter({
  routes,
});

export default router;
