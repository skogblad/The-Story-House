import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBooksView from '@/views/AllBooksView.vue';
//import useAuthStore from '@/stores/useAuthStore'
import useAuthStore from '@/stores/useAuthStore'
import { createPinia } from 'pinia'


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

const pinia = createPinia();
const useAuth = useAuthStore(pinia);

// ⛔ Protect routes (including admin-only)
router.beforeEach((to, from, next) => {
  const useAuth = useAuthStore();

  // Block if not authenticated
  if (to.meta.requiresAuth && !useAuth.isAuthenticated) {
    return next('/login');
  }

  // Block access to /AdminPanel if not admin
  if (to.path === '/AdminPanel' && useAuth.username !== 'admin') {
    return next('/'); // redirect to homepage
  }

  // Allow access
  next();
});

export default router;
