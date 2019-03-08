import axios from 'axios'
import qs from 'qs'

const fetch = axios.create({
  baseURL: '/',
  timeout: 5000
})
// http request 拦截器
fetch.interceptors.request.use(function (config) {
  console.log('config', config)
  return config
}, function (error) {
  return Promise.reject(error)
})

// http response 拦截器
fetch.interceptors.response.use(response => { return response }, (error) => { return Promise.reject(error) })

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    let headers = {
      withCredentials: true,
      'Content-Type': 'application/x-www-form-urlencoded',
      common: {'auth': ''}
    }
    const token = localStorage.getItem('token')
    if (token) {
      // perfectyang是JWT的认证头部信息
      headers.common['auth'] = 'perfectyang ' + token
    }
    fetch.get(url, { params, headers }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, data, type = 1) {
  let datas = data
  const config = Object.assign({
    headers: {
      withCredentials: true,
      'Content-Type': 'application/x-www-form-urlencoded',
      common: {'auth': ''}
    }
  })
  const token = localStorage.getItem('token')
  if (token) {
    // perfectyang是JWT的认证头部信息
    config.headers.common['auth'] = 'perfectyang ' + token
  }
  // 处理不是form-data形式时的数据处理
  if (type === 1) {
    console.log('ni')
    Object.keys(datas).forEach(key => {
      if (typeof datas[key] === 'object') {
        datas[key] = JSON.stringify(datas[key])
      }
    })
    datas = qs.stringify(datas)
  } else {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return new Promise((resolve, reject) => {
    fetch.post(url, datas, config).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    fetch.patch(url, data).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

const request = (url, params = {}) => {
  const defaultProps = Object.assign({
    method: 'post',
    data: {}
  }, params)

  switch (defaultProps.method) {
    case 'post':
      return post(url, defaultProps.data, params.type)
      // breakpu
    case 'get':
      return get(url, defaultProps.data)
      // break
    default:
      return get(url, defaultProps.data)
  }
}

export default request
