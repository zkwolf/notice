import { createRouter, createWebHistory } from 'vue-router';

export const staticRoutes = [
  {
    path: '/',
    component: () => import('/@/views/home/home.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('/@/views/exception/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
});

export default router;
