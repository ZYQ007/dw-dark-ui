import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children: [
      //   {
      //     path: '/Button',
      //     name: 'Button',
      //     component: () => import('../views/components/Button.vue')
      //   },
      //   {
      //     path: '/Dropdown',
      //     name: 'Dropdown',
      //     component: () => import('../views/components/Dropdown.vue')
      //   }
      // ]
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('../views/components/Select.vue'),
    }
  ]
})

export default router
