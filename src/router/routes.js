
import app from '@/App.vue'
import home from '@/pages/home'
import patientManage from '@/pages/patientManage'
import patientInfo from '@/pages/patientInfo'
import remindLog from '@/pages/remindLog'
import DoneQuesDetail from '@/pages/DoneQuesDetail'
import noDoQuesDetail from '@/pages/noDoQuesDetail'
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
    }, {
      path: '/remindLog',
      name: 'remindLog',
      component: remindLog,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/DoneQuesDetail',
      name: 'DoneQuesDetail',
      component: DoneQuesDetail,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/noDoQuesDetail',
      name: 'noDoQuesDetail',
      component: noDoQuesDetail,
      meta: {
        keepAlive: false
      }
    }]
  }
]
export default routes
