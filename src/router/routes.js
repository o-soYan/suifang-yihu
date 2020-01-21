// import app from '@/App.vue'
// import home from '@/pages/home/home'
// import mainHome from '@/pages/home/mainHome'
// import patientManage from '@/pages/home/patientManage'
// import patientInfo from '@/pages/patientInfo'
// import remindLog from '@/pages/remindLog'
// import followUpLog from '@/pages/followUpLog'
// import DoneQuesDetail from '@/pages/DoneQuesDetail'
// import noDoQuesDetail from '@/pages/noDoQuesDetail'
// import statistics from '@/pages/statistics'
// import remindLogDetail from '@/pages/remindLogDetail'
// import callLog from '@/pages/callLog'
// import SatisfactionSta from '@/pages/SatisfactionSta'
// import analyze from '@/pages/analyze'
// import statisticsItem from '@/pages/statisticsItem'
// import go404 from '@/pages/normal/404'
// import go500 from '@/pages/normal/500'

const routes = [{
  path: '',
  redirect: '/mainHome'
}, { // 首页
  path: '/home',
  name: 'home',
  component: resolve => require(['@/pages/home/home'], resolve),
  children: [{
    path: '/mainHome',
    name: 'mainHome',
    component: resolve => require(['@/pages/home/mainHome'], resolve),
    meta: {
      keepAlive: false
    }
  }, {
    path: '/patientManage',
    name: 'patientManage',
    component: resolve => require(['@/pages/home/patientManage'], resolve),
    meta: {
      keepAlive: true
    }
  }, {
    path: '/analyze',
    name: 'analyze',
    component: resolve => require(['@/pages/analyze'], resolve),
    meta: {
      keepAlive: false
    }
  }]
}, {
  path: '/statistics',
  name: 'statistics',
  component: resolve => require(['@/pages/statistics'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/patientInfo',
  name: 'patientInfo',
  component: resolve => require(['@/pages/patientInfo'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/remindLog',
  name: 'remindLog',
  component: resolve => require(['@/pages/remindLog'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/followUpLog',
  name: 'followUpLog',
  component: resolve => require(['@/pages/followUpLog'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/DoneQuesDetail',
  name: 'DoneQuesDetail',
  component: resolve => require(['@/pages/DoneQuesDetail'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/noDoQuesDetail',
  name: 'noDoQuesDetail',
  component: resolve => require(['@/pages/noDoQuesDetail'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/remindLogDetail',
  name: 'remindLogDetail',
  component: resolve => require(['@/pages/remindLogDetail'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/callLog',
  name: 'callLog',
  component: resolve => require(['@/pages/callLog'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/SatisfactionSta',
  name: 'SatisfactionSta',
  component: resolve => require(['@/pages/SatisfactionSta'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/statisticsItem',
  name: 'statisticsItem',
  component: resolve => require(['@/pages/statisticsItem'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/404',
  name: '404',
  component: resolve => require(['@/pages/normal/404'], resolve),
  meta: {
    keepAlive: false
  }
}, {
  path: '/500',
  name: '500',
  component: resolve => require(['@/pages/normal/500'], resolve),
  meta: {
    keepAlive: false
  }
}]
export default routes
