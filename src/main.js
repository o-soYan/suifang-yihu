// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/rem'
import Vant from 'vant'
import 'vant/lib/index.css'
import { ajaxUtil } from './common/request'
Vue.request = ajaxUtil
Vue.prototype.$post = ajaxUtil.post
Vue.prototype.$get = ajaxUtil.get
Vue.prototype.$bodyPost = ajaxUtil.bodyPost
Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
