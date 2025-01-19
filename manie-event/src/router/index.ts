import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/espace-personnel',
    name: 'Espace Perso',
    component: () => import('../views/EspacePersonnel.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
