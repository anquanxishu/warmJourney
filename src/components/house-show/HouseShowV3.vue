<template>
  <div class="houseShowV3">
    <img :src="houseList.image.url" alt="" />
    <!-- 房屋信息 -->

    <div class="homeHouseShow-info">
      <div>{{ houseList.summaryText }}</div>
      <div class="housename">{{ houseList.houseName }}</div>
      <!--评分和价格 一行 -->
      <div class="homeHouseShow-score-price">
        <!-- 评分使用图片展示 -->
        <Rating :rating="Number(houseList.commentScore)" />
        <span>￥{{ houseList.productPrice }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Rating from '@/components/rating/Rating.vue'
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
  .homeHouseShow-info {
    .housename {
      font-size: 16px;
      font-weight: 500;
      margin: 10px 0;
    }
    .homeHouseShow-score-price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-size: 14px;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
