import { createRouter, createWebHistory } from 'vue-router'
import CUttingEdge from '../views/CuttingEdge.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cutting',
      name: 'cutting-edge',
      component: CUttingEdge
    }
    
  ]
})

export default router
