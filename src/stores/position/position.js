import { defineStore } from 'pinia'
export const usePositionStore = defineStore('position', {
  state: () => ({
    currentCity: {
      adcode: '370200',
      name: '青岛',
    },
  }),
  actions: {
    setCurrentCity(city) {
      this.currentCity = city
    },
  },
  getters: {
    getCurrentCityName: (state) => state.currentCity.name,
    getCurrentCityId: (state) => state.currentCity.adcode,
  },
})
