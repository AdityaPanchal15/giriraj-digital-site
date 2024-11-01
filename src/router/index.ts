import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/cards',
      name: 'Cards',
      // route level code-splitting
      // this generates a separate chunk (Cards.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardsView.vue'),
    },
    {
      path: '/transactions',
      name: 'Transactions',
      // route level code-splitting
      // this generates a separate chunk (Transactions.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TransactionsView.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      // route level code-splitting
      // this generates a separate chunk (Settings.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SettingsView.vue'),
    },
  ],
})

export default router
