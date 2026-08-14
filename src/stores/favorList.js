import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useFavorListStore = defineStore('favorList', () => {
  const favorites = ref([])
  const favorList = computed(() => favorites.value)
  // 检查是否收藏该房屋
  const isFavor = (id) => {
    return favorList.value.some((item) => item.data.houseId === id)
  }
  // 添加收藏房屋
  const addFavor = (houseItem) => {
    favorites.value.push(houseItem)
  }
  // 删除收藏房屋
  const removeFavor = (houseId) => {
    favorites.value = favorites.value.filter((item) => item.data.houseId !== houseId)
  }
  // 切换收藏状态
  const toggleFavorite = (houseItem) => {
    const id = houseItem.data.houseId
    if (isFavor(id)) {
      removeFavor(id)
    } else {
      addFavor(houseItem)
    }
  }
  return {
    favorList,
    isFavor,
    addFavor,
    removeFavor,
    toggleFavorite,
  }
})
