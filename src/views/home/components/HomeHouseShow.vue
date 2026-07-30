<template>
  <h1>热门精选</h1>
  <div class="homeHouseShow">
    <div v-for="item in houseList" :key="item.data.houseId" class="homeHouseShow-item">
      <img :src="item.data.image.url" alt="" />
      <div>{{ item.data.houseName }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
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
    img {
      width: 100%;
    }
  }
}
</style>
