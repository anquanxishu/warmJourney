import axios from 'axios'

export const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

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
