import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "signIn",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requireAuth: true },
    children: [
      {
        path: "project",
        name: "project",
        component: () => import("@/views/Project"),
      },
    ],
  },
  {
    path: "/login",
    name: "signIn",
    component: () => import("@/views/SignIn.vue"),
    meta: { requireAuth: false },
  },
  {
    path: "/register",
    name: "signUp",
    component: () => import("@/views/SignUp.vue"),
    meta: { requireAuth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem("isAuth"));
  console.log({ to, auth });
  if (to.matched.some((record) => record.meta.requireAuth)) {
    !auth ? next("/login") : next();
  } else {
    auth ? next("/dashboard") : next();
  }
});

export default router;
