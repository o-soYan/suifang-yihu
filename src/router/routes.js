
import app from '@/App.vue'
import home from '@/pages/home'
const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '',
    component: app,
    name: 'app',
    children: [{
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        keepAlive: false
      }
    }]
  }
]
export default routes
