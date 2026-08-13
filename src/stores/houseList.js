import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHouseList } from '@/views/home/homeRequest'
export const useHouseListStore = defineStore('houseList', () => {
  const houseList = ref([])
  const loading = ref(false)
  const hasMore = ref(false)
  const page = ref(1)
  // 分页获取房屋列表
  const loadMore = async () => {
    if (loading.value) {
      return
    }
    loading.value = true
    try {
      const res = await getHouseList(page.value)
      // 检查是否有更多数据 目前无法拿到总页数，只能先写死
      hasMore.value = true
      houseList.value.push(...res.data)
      page.value++
    } catch (err) {
      console.log('error', err)
    } finally {
      loading.value = false
    }
  }
  return { houseList, loading, hasMore, loadMore }
})
