// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/js/rem'
=======
import {
  Swipe, SwipeItem
} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
>>>>>>> e3121cf79df44bec1f7fba1292887fb8d075b928
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
