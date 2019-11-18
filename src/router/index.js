import Vue from 'vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
import routeConfig from './routes'

// 加载路由中间件
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 定义路由
const router = new VueRouter({
  routes: routeConfig
  // mode: 'history'
=======
import Router from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    }

  ]
>>>>>>> e3121cf79df44bec1f7fba1292887fb8d075b928
})

export default router
