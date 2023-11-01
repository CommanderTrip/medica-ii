import { createRouter, createWebHistory } from "vue-router"
import LettersView from "../views/LettersView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
