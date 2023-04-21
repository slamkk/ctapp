import { createRouter, createWebHistory } from "vue-router";
import Transformer from "@/components/Transformer.vue";
const routes = [
  {
    path: "/",
    name: "Transformer",
    component: Transformer,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
