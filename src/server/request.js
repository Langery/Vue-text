import axios from 'axios'
import conf from '../config/index'

axios.defaults.withCredentials = true

const hostFilter = hostType => {
  switch (hostType) {
    case 'public':
      return conf.publicPath
    case 'RTCRoom':
      return conf.webRTCRoomPath
  }
}

// 拦截器

export default {

  postIMG: (hostType, url, data, error, option) =>
    axios.post(hostFilter(hostType) + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.error(err)
        }
      }),
  post: (hostType, url, data, error, option) =>
    axios.post(hostFilter(hostType) + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.error(err)
        }
      }),
  get: (hostType, url, error, option) =>
    axios.get(hostFilter(hostType) + url, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  put: (hostType, url, data, error, option) =>
    axios.put(hostFilter(hostType) + url, data, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  delete: (hostType, url, error, option) =>
    axios.delete(hostFilter(hostType) + url, option)
      .then(response => response.data)
      .catch((err) => {
        if (error) {
          error(err)
        } else {
          console.log(err)
        }
      }),
  url (hostType, path) { return hostFilter(hostType) + path },
  api: (hostType, url, error, option) => {
    return axios.get(hostFilter(hostType), url, option)
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
