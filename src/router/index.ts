import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';

export const createVueRouter = (isSSR = import.meta.env.SSR) => {
  const createHistory = isSSR ? createMemoryHistory : createWebHistory;
  const router = createRouter({
    history: createHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/user',
        component: () => import('@/views/user.vue'),
      },
    ],
  });
  return { router };
};
