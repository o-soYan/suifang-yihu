const global = {
  state: {
    loading: {
      isShow: false,
      msg: '加载中'
    }
  },
  getters: {
    loading: state => state.loading
  },
  mutations: {
    SHOW_LOADING: (state, options) => {
      state.loading = {
        msg: options.msg,
        isShow: true
      }
    },
    HIDE_LOADING: (state) => {
      state.loading.isShow = false
    }
  },
  actions: {
    showLoading ({commit}, options) {
      let obj = {
        msg: '加载中...',
        isShow: true
      }
      let newObj = {}
      Object.assign(newObj, obj, options)
      if (options.autoClose === undefined) {
        options.autoClose = true
      }
      commit('SHOW_LOADING', newObj)
      if (options.autoClose) {
        window.setTimeout(function () { commit('HIDE_LOADING') }, 2000)
      }
    },
    hideLoading ({commit}) {
      commit('HIDE_LOADING')
    }
  }
}
export default global
