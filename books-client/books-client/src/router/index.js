import { createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '@/stores/useAuthStore'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/signin', 
      name: 'signin', 
      component: () => import('@/views/SigninView.vue') },
    { 
      path: '/AdminPanel', 
      name: 'admin', 
      component: () => import('@/views/AdminView.vue'), 
      meta: { requiresAuth: true } },
    { 
      path: '/login', 
      name: 'login', 
      component: () => import('@/views/LoginView.vue') },
    { 
      path: '/register', 
      name: 'register', 
      component: () => import('@/views/RegisterView.vue') }

  ]
})

const pinia = createPinia();
const useAuth = useAuthStore(pinia);

 router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuth.isAuthenticated) {
     next('/auth/login');
  } else {
     next();
  }
 })

export default router;