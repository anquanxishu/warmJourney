import { defineStore } from 'pinia'
const useFavorListStore = defineStore('favorList', {
  state: () => ({
    favorList: [],
  }),
  actions: {
    addFavor(house) {
      this.favorList.push(house)
    },
    removeFavor(house) {
      this.favorList = this.favorList.filter((item) => item.id !== house.id)
    },
  },
})
export default useFavorListStore
