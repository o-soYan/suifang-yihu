import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'
if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}
export default new Vuex.Store({
  modules: {
    global
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
