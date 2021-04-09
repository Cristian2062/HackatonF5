import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginPage.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import HomeUsuario from "../views/HomeUsuario.vue";
import AgendaUsuario from "../views/AgendaUsuario.vue";
import AgendaSemana from "../views/AgendaSemana.vue";
import AgendaMes from "../views/AgendaMes.vue";
import Logros from "../views/Logros.vue";
import Usuarios from "../views/Usuarios.vue";
import Acceso from "../views/Acceso.vue";
import NuevaTarea from "../views/FormTarea"


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
    path: "/agendames",
    name: "AgendaMes",
    component: AgendaMes,
  },
  {
    path: "/agendausuario",
    name: "AgendaUsuario",
    component: AgendaUsuario,
  },
  {
    path: "/agendasemana",
    name: "AgendaSemana",
    component: AgendaSemana,
  },
  {
    path: "/homeusuario",
    name: "HomeUsuario",
    component: HomeUsuario,
  },
  {
    path: "/logros",
    name: "Logros",
    component: Logros,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
  {
    path: "/nueva-tarea",
    name: "NuevaTarea",
    component: NuevaTarea,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
