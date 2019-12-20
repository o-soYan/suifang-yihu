import Vue from 'vue'
// import axios from 'axios'
import _ from 'underscore'
let serverTimeout = 30000
const debug = process.env.NODE_ENV !== 'production'
let baseAddress = 'http://192.168.4.165:8002/api/'
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
    // params: newObj,
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
  // 在发送请求之前做些什么
  loadCount = loadCount++
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
// 对响应数据做点什么
  loadCount = loadCount--
  return response
}, function (error) {
// 对响应错误做点什么
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
