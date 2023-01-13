import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signIn",
    component: () => import("../views/signIn.vue"),
  },
  {
    path: "/about",
    name: "signUp",
    component: () => import("../views/signUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
