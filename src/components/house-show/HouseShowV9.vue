<template>
  <div class="houseShowV9">
    <img :src="houseList.image.url" alt="" />
    <!-- 房屋信息 -->
    <div class="homeHouseShow-info-container">
      <!-- 顶部 -->
      <div class="homeHouseShow-top">
        <span>prop</span>
        <span>收藏</span>
      </div>
      <!-- 底部 -->
      <div class="homeHouseShow-bottom">
        <div class="homeHouseShow-info">
          <div>{{ houseList.summaryText }}</div>
          <div>{{ houseList.houseName }}</div>
          <!--评分和价格 一行 -->
          <div class="homeHouseShow-score-price">
            <!-- 评分使用图片展示 -->
            <Rating :rating="Number(houseList.commentScore)" />
            <span>￥{{ houseList.productPrice }}</span>
          </div>
        </div>
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
.houseShowV9 {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  .homeHouseShow-info-container {
    position: absolute;
    top: 0;
    color: white;
    font-size: 14px;
    z-index: 10; /* 确保文字在图片上层 */
    text-shadow: 0 2px 4px rgba(120, 47, 47, 0.5); /* 如果图片花，加阴影增加可读性 */
    height: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .homeHouseShow-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .homeHouseShow-bottom {
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
}
</style>
