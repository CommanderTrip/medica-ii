import { createRouter, createWebHistory } from "vue-router"
import LettersView from "../views/LettersView.vue"
import HomeView from "@/views/HomeView.vue";
import GiftView from "@/views/GiftView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/WasTheOriginalGift",
      name: "original gift",
      component: GiftView
    },
    {
      path: "/Letters",
      name: "letters",
      component: LettersView
    },
    {
      path: "/DaisyLove",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // This page loads a lot of images; lets lazy load this
      component: () => import("../views/DaisyLoveView.vue")
    }
  ]
})

export default router
