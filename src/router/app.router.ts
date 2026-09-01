import LadingLayout from '@/modules/landing/layouts/LadingLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const appRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: LadingLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../modules/landing/pages/HomePage.vue'),
        },
        {
          path: 'features',
          name: 'features',
          component: () => import('../modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('../modules/landing/pages/PricingPage.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../modules/landing/pages/ContactPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../modules/auth/pages/LoginPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});
