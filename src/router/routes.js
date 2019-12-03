// import app from '@/App.vue'
import home from '@/pages/home/home'
import mainhome from '@/pages/home/mainhome'
import patientManage from '@/pages/home/patientManage'
import patientInfo from '@/pages/patientInfo'
import remindLog from '@/pages/remindLog'
import DoneQuesDetail from '@/pages/DoneQuesDetail'
import noDoQuesDetail from '@/pages/noDoQuesDetail'
import statistics from '@/pages/statistics'
import remindLogDetail from '@/pages/remindLogDetail'
import callLog from '@/pages/callLog'
import SatisfactionSta from '@/pages/SatisfactionSta'
import analyze from '@/pages/analyze'
import spinsterhoodSat from '@/pages/spinsterhoodSat'

const routes = [{
  path: '/',
  redirect: '/mainhome'
}, { // 首页
  path: '',
  name: 'home',
  component: home,
  children: [{
    path: '/mainhome',
    name: 'mainhome',
    component: mainhome,
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
    path: '/statistics',
    name: 'statistics',
    component: statistics,
    meta: {
      keepAlive: false
    }
  }]
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
}, {
  path: '/remindLogDetail',
  name: 'remindLogDetail',
  component: remindLogDetail,
  meta: {
    keepAlive: false
  }
}, {
  path: '/callLog',
  name: 'callLog',
  component: callLog,
  meta: {
    keepAlive: false
  }
}, {
  path: '/SatisfactionSta',
  name: 'SatisfactionSta',
  component: SatisfactionSta,
  meta: {
    keepAlive: false
  }
}, {
  path: '/analyze',
  name: 'analyze',
  component: analyze,
  meta: {
    keepAlive: false
  }
}, {
  path: '/spinsterhoodSat',
  name: 'spinsterhoodSat',
  component: spinsterhoodSat,
  meta: {
    keepAlive: false
  }
}
]
export default routes
