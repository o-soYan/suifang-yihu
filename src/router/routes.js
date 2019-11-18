
import app from '@/App.vue'
import home from '@/pages/home'
import patientManage from '@/pages/patientManage'
import patientInfo from '@/pages/patientInfo'
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
    }, {
      path: '/patientManage',
      name: 'patientManage',
      component: patientManage,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/patientInfo',
      name: 'patientInfo',
      component: patientInfo,
      meta: {
        keepAlive: false
      }
    }]
  }
]
export default routes
