/*
 * @Author: pq yxqxq79@gmail.com
 * @Date: 2025-07-10 12:01:42
 * @LastEditors: pq yxqxq79@gmail.com
 * @LastEditTime: 2025-09-16 17:20:28
 * @FilePath: \order2-h5d:\小花\citypay-H5-PC\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// router/index.js
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useWalletStore } from '@/stores/wallet'

const routes = [
  {
    path: '/',
    component: () => import('@/views/SuperFundPage.vue')
  },
  {
    path: '/AssetOverview',
    component: () => import('@/views/AssetOverview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// src/router/index.js
router.beforeEach((to, from, next) => {
  const store = useWalletStore()
  if (to.meta.requiresAuth && !store.isLogin) {
    store.login().then(() => next()).catch(() => next('/'))
  } else next()
})

export default router