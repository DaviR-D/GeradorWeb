import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FinishView from "../views/FinishView.vue";
import BuildView from "../views/BuildView.vue";
import TemplatesView from "../views/TemplatesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/end",
      name: "end",
      component: FinishView,
    },
    {
      path: "/templates",
      name: "Templates",
      component: TemplatesView,
    },
    {
      path: "/build/:template",
      name: "build",
      component: BuildView,
    },
  ],
});

export default router;
