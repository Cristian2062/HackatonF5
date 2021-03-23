import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import HomeUsuario from "../views/HomeUsuario.vue";
import AgendaUsuario from "../views/AgendaUsuario.vue";
import AgendaSemana from "../views/AgendaSemana.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/homeadmin",
    name: "HomeAdmin",
    component: HomeAdmin,
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
