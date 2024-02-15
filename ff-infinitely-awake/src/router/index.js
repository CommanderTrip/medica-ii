import { createRouter, createWebHistory } from "vue-router"
import LettersView from "../views/LettersView.vue"
import HomeView from "@/views/HomeView.vue"
import GiftView from "@/views/GiftView.vue"
import DaisyLoveView from "@/views/DaisyLoveView.vue"
import ValentineView from "@/views/ValentineView.vue"
import NumbersGameView from "@/views/NumbersGameView.vue"

const router = createRouter({
  history: createWebHistory(),
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
      component: DaisyLoveView
    },
    {
      path: "/valentine",
      name: "Be My Valentine?",
      component: ValentineView
    },
    {
      path: "/lockpick",
      name: "Numbers lock picking game",
      component: NumbersGameView
    },
    {
      // path: "*",
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView
    }
  ]
})

export default router
