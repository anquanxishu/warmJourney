<template>
  <h1>热门精选</h1>
  <div class="homeHouseShow">
    <div v-for="item in houseList" :key="item.data.houseId" class="homeHouseShow-item">
      <HouseShowV9 :houseList="item.data" v-if="item.discoveryContentType === 9" />
      <HouseShowV3 :houseList="item.data" v-else />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import HouseShowV9 from '@/components/house-show/HouseShowV9.vue'
import HouseShowV3 from '@/components/house-show/HouseShowV3.vue'

const props = defineProps({
  houseList: {
    type: Array,
    default: () => [],
  },
})
</script>
<style scoped lang="scss">
.homeHouseShow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .homeHouseShow-item {
    width: 48%;
    margin-bottom: 10px;
  }
}
</style>
