<template>
  <div class="houseShowV3">
    <img :src="houseList.image.url" alt="" />
    <!-- 房屋信息 -->

    <div class="homeHouseShow-info">
      <div>{{ houseList.summaryText }}</div>
      <div>{{ houseList.houseName }}</div>
      <!--评分和价格 一行 -->
      <div class="homeHouseShow-score-price">
        <!-- 评分使用图片展示 -->
        <span>{{ houseList.commentScore }}</span>
        <span>{{ houseList.productPrice }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  houseList: {
    type: Object,
    default: () => {},
  },
})
</script>
<style scoped lang="scss">
.houseShowV3 {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
