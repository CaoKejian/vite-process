import axios from 'axios'

const instance = axios.create({
  baseURL: "http://43.139.142.203:9999",
  timeout: 15000
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(result => {
  return result.data
}, err => {
  return Promise.reject(err)
})

export default instance 