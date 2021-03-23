import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginPage.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import Usuarios from "../views/Usuarios.vue";
import Acceso from "../views/Acceso.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Acceso,
  },
  {
    path: "/login-admin",
    component: Login,
  },
  {
    path: "/login-usuario",
    component: Login,
  },
  {
    path: "/home-admin",
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
