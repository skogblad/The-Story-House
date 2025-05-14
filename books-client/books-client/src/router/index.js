import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBooksView from '@/views/AllBooksView.vue';
//import useAuthStore from '@/stores/useAuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', name: 'home', component: HomeView },
    { path: '/books', name: 'books', component: AllBooksView },    
    { path: '/signin', name: 'signin', component: () => import('@/views/SigninView.vue') },
    { path: '/AdminPanel', name: 'admin', component: () => import('@/views/AdminView.vue'), meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
    { path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue') },
    { path: '/userpage', name: 'userpage', component: () => import('@/views/UserView.vue') }
  ]
})

//const useAuth = useAuthStore();

/* router.beforeEach((to, from, next) => {
 if (to.meta.requiresAuth && !useAuth.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}) */

export default router;