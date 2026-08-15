import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useFavorListStore = defineStore(
  'favorList',
  () => {
    const favorList = ref([])
    // 检查是否收藏该房屋
    const isFavor = (id) => {
      return favorList.value.some((item) => item.data.houseId === id)
    }
    // 添加收藏房屋
    const addFavor = (houseItem) => {
      favorList.value.push(houseItem)
      // localStorage.setItem('favorite-list', JSON.stringify(favorites.value))
    }
    // 删除收藏房屋
    const removeFavor = (houseId) => {
      favorList.value = favorList.value.filter((item) => item.data.houseId !== houseId)
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
  },
  // ---------- 持久化配置（必须放在第三个参数） ----------
  {
    persist: {
      key: 'favorList',
      storage: localStorage,
    },
  },
)
