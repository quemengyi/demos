import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/content/:id",
    name: "Content",
    component: () =>
      import("../views/content.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
