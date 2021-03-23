import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginPage.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import Usuarios from "../views/Usuarios.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home-admin",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/homeadmin",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,

  },
      import("../views/Acceso.vue"),
];

const router = new VueRouter({
  routes,
});

export default router;
