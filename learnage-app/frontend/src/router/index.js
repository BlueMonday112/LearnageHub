import { createRouter, createWebHistory } from "vue-router";
import SignageView from "../views/SignageView.vue";

const routes = [{ path: "/", component: SignageView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
