<template>
  <div class="houseShowV9">
    <img :src="house.image.url" alt="" />
    <!-- 房屋信息 -->
    <div class="homeHouseShow-info-container">
      <div class="homeHouseShow-bottom">
        <div class="homeHouseShow-info">
          <div>{{ house.summaryText }}</div>
          <div>{{ house.houseName }}</div>
          <!--评分和价格 一行 -->
          <div class="homeHouseShow-score-price">
            <!-- 评分使用图片展示 -->
            <Rating :rating="Number(house.commentScore)" />
            <span>￥{{ house.productPrice }}</span>
          </div>
        </div>
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
.houseShowV9 {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  .homeHouseShow-info-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 5px;
    color: white;
    font-size: 14px;
    z-index: 10; /* 确保文字在图片上层 */
    text-shadow: 0 2px 4px rgba(120, 47, 47, 0.5); /* 如果图片花，加阴影增加可读性 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
