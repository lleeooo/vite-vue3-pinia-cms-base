import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
// import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/HelloWorld',
  },
  {
    path: '/HelloWorld',
    name: 'helloWorld',
    component: () => import('@/components/HelloWorld.vue'),
  },
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: () => import('@/view/main/Main.vue')
  // }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token')
//     if (!token) {
//       return '/login'
//     }
//   }
// })

export default router;
