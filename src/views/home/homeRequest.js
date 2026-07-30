import { service } from '@/utils/request'
const baseUrl = service.defaults.baseURL + '/home'
console.log(baseUrl, 'baseurl')
service.defaults.baseURL = baseUrl
// 热门建议
export const getHotSuggests = async () => {
  const res = await service.get('/hotSuggests')
  return res
}
// 推荐类别
export const getCategories = async () => {
  const res = await service.get('/categories')
  return res
}
// 房屋列表
export const getHouseList = async (page) => {
  const res = await service.get(`/houseList?page=${page}`)
  return res
}
