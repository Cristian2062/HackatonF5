import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/LoginPage.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import Usuarios from "../views/Usuarios.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
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
];

const router = new VueRouter({
  routes,
});

export default router;
