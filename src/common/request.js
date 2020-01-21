import Vue from 'vue'
// import axios from 'axios'
import _ from 'underscore'
import store from '../store'
import router from '../router'
import { Notify } from 'vant'
let serverTimeout = 30000
const debug = process.env.NODE_ENV !== 'production'
let baseAddress = 'http://medicalcareapi.gdbkyz.com/api/'
// eslint-disable-next-line no-undef
const service = axios.create({
  baseAddress,
  timeout: serverTimeout, // 请求的超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // changeOrigin: true,
  withCredentials: true // 允许携带cookie
})
var nextStr = ''
function changeDataType (obj) {
  let str = ''
  if (typeof obj === 'object') {
    for (let i in obj) {
      if (typeof obj[i] !== 'function' && typeof obj[i] !== 'object') {
        str += i + '=' + obj[i] + '&'
      } else if (typeof obj[i] === 'object') {
        nextStr = ''
        str += changeSonType(i, obj[i])
      }
    }
  }
  return str.replace(/&$/g, '')
}
function changeSonType (objName, objValue) {
  if (typeof objValue === 'object') {
    for (let i in objValue) {
      if (typeof objValue[i] !== 'object') {
        let value = objName + '[' + i + ']=' + objValue[i]
        nextStr += encodeURI(value) + '&'
      } else {
        changeSonType(objName + '[' + i + ']', objValue[i])
      }
    }
  }
  return nextStr
}
let clientGet = function (action, controller, query, ajaxGlobal) {
  let newObj = {}
  if (debug) {
    let newQuery = query || {}
    let obj = {
      // openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI',
      // usertype: 'WX'
    }
    Object.assign(newObj, obj, newQuery)
    // query = _.extend(query || {}, { openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI', usertype: 'WX' })
  }
  if (ajaxGlobal === undefined) {
    ajaxGlobal = true
  }
  newObj = changeDataType(newObj || {})
  let url = baseAddress + controller + '/' + action + '?' + newObj

  let resolveProxy
  let promise = new Promise(function (resolve, reject) {
    resolveProxy = resolve
  })
  service(Object.assign({
    method: 'GET',
    url: url
  })).then((res) => {
    if (resolveProxy) resolveProxy(res.data)
  }).catch((xhr) => {
    if (xhr.status === 401) {
      // document.location.href = ajax401Url
    } else {
      // document.location.href = ajax500Url
    }
  })
  return promise
}
let clientPost = function (action, controller, query, data, ajaxGlobal) {
  let newObj = {}
  if (debug) {
    let newQuery = query || {}
    let obj = {
      // openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI',
      // usertype: 'WX'
    }
    Object.assign(newObj, obj, newQuery)
    // query = _.extend(query || {}, { openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI', usertype: 'WX' })
  }
  if (ajaxGlobal === undefined) {
    ajaxGlobal = true
  }

  let url = baseAddress + controller + '/' + action

  let resolveProxy
  let promise = new Promise(function (resolve, reject) {
    resolveProxy = resolve
  })
  service(Object.assign({
    method: 'POST',
    url: url,
    params: newObj,
    data: newObj
  })).then((res) => {
    if (resolveProxy) resolveProxy(res.data)
  }).catch((xhr) => {
    console.log(xhr.status)
  })

  return promise
}
let clientBodyPost = function (action, controller, query, data, ajaxGlobal) {
  let newObj = {}
  if (debug) {
    let newQuery = query || {}
    let obj = {
      // openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI',
      // usertype: 'WX'
    }
    Object.assign(newObj, obj, newQuery)
    // query = _.extend(query || {}, { openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI', usertype: 'WX' })
  }
  if (ajaxGlobal === undefined) {
    ajaxGlobal = true
  }

  let url = baseAddress + controller + '/' + action

  let resolveProxy
  let promise = new Promise(function (resolve, reject) {
    resolveProxy = resolve
  })
  service(Object.assign({
    method: 'POST',
    url: url,
    params: data,
    data: newObj
  })).then((res) => {
    if (resolveProxy) resolveProxy(res.data)
  }).catch((xhr) => {
    console.log(xhr.status)
  })

  return promise
}
let clientDelete = function (action, controller, query, data, ajaxGlobal) {
  let newObj = {}
  if (debug) {
    let newQuery = query || {}
    let obj = {
      openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI',
      usertype: 'WX'
    }
    Object.assign(newObj, obj, newQuery)
    // query = _.extend(query || {}, { openid: 'oxKlnuJnTV6TgnZ7hqzG_0-spINI', usertype: 'WX' })
  }
  if (ajaxGlobal === undefined) {
    ajaxGlobal = true
  }

  let url = baseAddress + controller + '/' + action

  let resolveProxy
  let promise = new Promise(function (resolve, reject) {
    resolveProxy = resolve
  })
  service(Object.assign({
    method: 'delete',
    url: url,
    params: newObj,
    data: newObj
  })).then((res) => {
    if (resolveProxy) resolveProxy(res.data)
  }).catch((xhr) => {
    console.log(xhr.status)
  })

  return promise
}

let loadCount = 0
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  config.headers['Work-Token'] = 'vNMiK0i3CVjE6Nv4A86HMCVVD0JJ4U8Ifq0wF6syDhmPcPOLWCNRmawgvoa3qbsE8S5xpK4b9wFexDbI6kefbnVsH1ss%252bU7hHQ49PGHhMdcZr0aH35ZeZ5Sk7d6GB4iHJ5DVa9bS7TyZXRYnCR7y2cAjkkGcCbrbxb7eEORMzWgIuZzxXgZxG5BmUrwBDmgZi%252fCnxFMc98ViW4Yf8v%252fLGHvgYdeYSKi03ToYwAEOby%252bn5OYijD7TlTl9%252fX8CB05tmUACebjvABs7Pt9QOcRy4T5dzo%252bhlR0CfdOeEktyDV1nmKprb0fb%252fe1WEaxSGWMYDg9nlv3woOnIoh4xhBgrUz7L80R5bRJ3GP4063zN%252bUSaFEE1UGdkg40wDgY6TMrbk%252fTuj4uON1nVx%252b4EMRmu0PHbO7rx6iQO3SorwiLJLllxtvQ%252fFioikVal%252boi5qegq'
  // 在发送请求之前做些什么
  loadCount = loadCount++
  return config
}, function (error) {
  // 对请求错误做些什么
  Notify(error.message)
  store.state.global.loading.isShow = false
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
// 对响应数据做点什么
  loadCount = loadCount--
  return response
}, function (error) {
  // 对响应错误做点什么
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误，未找到资源'
        router.replace({name: '404'})
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 500:
        error.message = '服务器出错'
        router.replace({name: '500'})
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '网络出现问题，请稍后再试'
    router.replace({name: '500'})
  }
  store.state.global.loading.isShow = false
  Notify(error.message)
  loadCount = loadCount--
  return Promise.reject(error)
})
let httpPlugin = {
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $http: {
        get: function () {
          let self = this
          return {
            get: _.bind(clientGet, self),
            post: _.bind(clientPost, self),
            delete: _.bind(clientDelete, self)
          }
        }
      }
    })
  }
}

if (window.Vue) {
  Vue.use(httpPlugin)
}

export default httpPlugin

export const ajaxUtil = {
  get: clientGet,
  post: clientPost,
  delete: clientDelete,
  bodyPost: clientBodyPost
}
