import { createRouter, createWebHistory } from "vue-router";
import TemplatesView from "../views/TemplatesView.vue";
import RegisterView from "../views/RegisterView.vue";
import FinishView from "../views/FinishView.vue";
import LessonView from "../views/LessonView.vue";
import BuildView from "../views/BuildView.vue";
import LoginView from "../views/LoginView.vue";
import ListView from "../views/ListView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/end",
      name: "End",
      component: FinishView,
    },
    {
      path: "/templates/:lessonId",
      name: "Templates",
      component: TemplatesView,
    },
    {
      path: "/build/:lessonId/:template",
      name: "Build",
      component: BuildView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/lesson/:lesson_id",
      name: "Lesson",
      component: LessonView,
    },
    {
      path: "/list-lessons",
      name: "List",
      component: ListView,
    },
  ],
});

export default router;
