import axios from 'axios'

// 基础URL
const baseURL = 'http://codercba.com:1888/api'
// 全局请求拦截器
export const service = axios.create({
  baseURL,
  timeout: 5000,
})
// 全局请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 全局响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)
// ========= 新增：模块专属实例工厂 =========
/**
 * 创建一个带有模块前缀的 axios 实例，并自动继承相同的拦截器
 * @param {string} modulePrefix - 模块路径前缀，如 '/home'
 * @returns {axios.AxiosInstance}
 */
export const createInstanceWithPrefix = (prefix) => {
  const instance = axios.create({
    baseURL: baseURL + prefix,
    timeout: 5000,
  })
  // 请求拦截器与全局一致
  instance.interceptors.request.use(
    service.interceptors.request.handlers[0].fulfilled,
    service.interceptors.request.handlers[0].rejected,
  )
  // 响应拦截器与全局一致
  instance.interceptors.response.use(
    service.interceptors.response.handlers[0].fulfilled,
    service.interceptors.response.handlers[0].rejected,
  )
  return instance
}

// 第三方请求实例
export const reqInstance = axios.create({
  timeout: 5000,
})
reqInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
reqInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)
