import { defineStore } from 'pinia'
export const usePositionStore = defineStore('position', {
  state: () => ({
    currentCity: { cityId: 8, cityName: '青岛' },
  }),
  actions: {
    setCurrentCity(city) {
      this.currentCity = city
    },
  },
  getters: {
    getCurrentCityName: (state) => state.currentCity.cityName,
    getCurrentCityId: (state) => state.currentCity.cityId,
  },
  persist: true,
})
