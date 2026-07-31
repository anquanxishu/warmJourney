import { createInstanceWithPrefix } from '@/utils/request'

// 创建模块专属实例
export const moduleInstance = createInstanceWithPrefix('/home')

// 热门建议
export const getHotSuggests = async () => {
  const res = await moduleInstance.get('/hotSuggests')
  return res
}
// 推荐类别
export const getCategories = async () => {
  const res = await moduleInstance.get('/categories')
  return res
}
// 房屋列表
// 分页获取房屋列表
export const getHouseList = async (page) => {
  const res = await moduleInstance.get(`/houseList?page=${page}`)
  return res
}
