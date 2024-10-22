import { createRouter, createWebHistory } from 'vue-router'
import PerfilComponent from '../views/PerfilComponent.vue'
import IngresoUsuarios from '../views/IngresoUsuarios.vue'
import PruebasComponent from '@/components/pruebas/PruebasComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),


  routes: [
    {
      path: '/',
      name: 'home',
      component: IngresoUsuarios,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilComponent,
    },
    {
      path: '/pruebas',
      name: 'pruebas',
      component: PruebasComponent,
    }
  ]
})
console.log("Base URL:", import.meta.env.BASE_URL);

export default router
