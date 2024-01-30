import { createRouter, createWebHistory } from 'vue-router'
import CUttingEdge from '../views/CuttingEdge.vue'
import Google from '../views/Google.vue'
import GoogleResults1 from '../views/GoogleResults1.vue'
import GoogleResults2 from '../views/GoogleResults2.vue'
import DockArticle from '../views/DockArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cutting',
      name: 'cutting-edge',
      component: CUttingEdge
    },
    {
      path: '/google',
      name: 'google',
      component: Google
    },
    {
      path: '/results1',
      name: 'results1',
      component: GoogleResults1
    },
    {
      path: '/results2',
      name: 'results2',
      component: GoogleResults2
    },
    {
      path: '/article',
      name: 'dock',
      component: DockArticle
    },

    
  ]
})

export default router
