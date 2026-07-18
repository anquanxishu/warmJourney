import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/position',
      name: 'position',
      component: () => import('@/views/position/Position.vue'),
      meta: {
        showTabBar: false,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        showTabBar: true,
      },
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message/Message.vue'),
      meta: {
        showTabBar: true,
      },
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/Order.vue'),
      meta: {
        showTabBar: true,
      },
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('@/views/favor/Favor.vue'),
      meta: {
        showTabBar: true,
      },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/Test.vue'),
      meta: {
        showTabBar: false,
      },
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('@/views/test/Test2.vue'),
      meta: {
        showTabBar: false,
      },
    },
  ],
})

export default router
