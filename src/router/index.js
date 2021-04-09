import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import LoginUser from "../views/LoginUser.vue";
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
    component: LoginPage,
  },
  {
    path: "/login-usuario",
    component: LoginUser,
  },
  {
    path: "/homeadmin",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/homeusuario",
    name: "HomeUsuario",
    component: HomeUsuario,
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
    path: "/logros",
    name: "Logros",
    component: Logros,
  },
  {
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
