import axios from 'axios'
import conf from '../config/index'

axios.defaults.withCredentials = true

const host = conf.publicPath

// 拦截器
axios.interceptors.response.use(data => {
  if (data.data.code && data.data.code !== 0) {
    Message({
      message: data.data.msg,
      type: 'error'
    })
  }
  return data
}, error => {
  if (error.response.status === 401) {
    const paramsString = encodeURI(window.location.href)
    window.location.href = error.response.data.loginUrl + '?service=' + paramsString
  }
  return Promise.reject(error)
})

export default {

  postIMG: (url, data, error, option) =>
    axios.post(imgUrl + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.error(err)
        }
      }),
  post: (url, data, error, option) =>
    axios.post(apiurl + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.error(err)
        }
      }),
  get: (url, error, option) =>
    axios.get(apiurl + url, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  put: (url, data, error, option) =>
    axios.put(apiurl + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  delete: (url, error, option) =>
    axios.delete(apiurl + url, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  url (path) { return apiurl + path },
  api: (url, error, option) => {
    return axios.get(url, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      })
  }
}
