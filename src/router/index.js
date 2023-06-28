import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details-cards',
      name: 'DetailsCards',
      component: () => import('../views/DetailsCardsView.vue')
    }
  ]
})

export default router
