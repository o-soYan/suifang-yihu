import Vue from 'vue'
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
})

export default router
