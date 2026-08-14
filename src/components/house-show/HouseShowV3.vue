<template>
  <div class="houseShowV3">
    <img :src="house.image.url" alt="" />
    <!-- 房屋信息 -->

    <div class="homeHouseShow-info">
      <div>{{ house.summaryText }}</div>
      <div class="housename">{{ house.houseName }}</div>
      <!--评分和价格 一行 -->
      <div class="homeHouseShow-score-price">
        <!-- 评分使用图片展示 -->
        <Rating :rating="Number(house.commentScore)" />
        <span>￥{{ house.productPrice }}</span>
      </div>
    </div>
    <!-- 收藏按钮 -->
    <Favor :house-item="houseItem" />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import Favor from '@/components/favor/Favor.vue'
import Rating from '@/components/rating/Rating.vue'
const props = defineProps({
  houseItem: {
    type: Object,
    default: () => {},
  },
})
const house = computed(() => props.houseItem.data)
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
