<template>
  <div class="rating-display">
    <!-- 星星容器 -->
    <div class="stars" :style="{ '--rating': rating }">
      <span v-for="i in 5" :key="i">★</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rating: { type: Number, default: 3.7 }, // 支持小数
})
</script>

<style scoped>
.rating-display {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* 核心：利用 CSS 遮罩和 linear-gradient 实现半星 */
.stars {
  display: inline-flex;
  font-size: 14px;
  color: #acafad; /* 未点亮颜色 */
  position: relative;
  letter-spacing: 4px;
}
.stars::before {
  content: '★★★★★';
  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--rating) / 5 * 100%);
  color: #f5a623; /* 点亮颜色 */
  overflow: hidden;
  white-space: nowrap;
}
</style>
