<template>
  <div class="carousel-container">
    <!-- 图片容器 -->
    <div class="carousel-wrapper">
      <div class="carousel-track">
        <div class="carousel-slide">
          <img :src="housePic.url" :alt="housePic.title" />
        </div>
      </div>

      <!-- 左右箭头 -->
      <button class="arrow arrow-left" @click="prev">‹</button>
      <button class="arrow arrow-right" @click="next">›</button>
    </div>

    <!-- 底部小圆点指示器 -->
    <div class="dots">
      <span
        v-for="(item, index) in housePics.length"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
    <!-- 收藏按钮 -->
    <!-- <Favor /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed } from 'vue'
import Favor from '@/components/favor/Favor.vue'

const props = defineProps({
  housePicture: {
    type: Object,
    default: () => ({}),
  },
})
const housePics = computed(() => {
  return props.housePicture.housePics || []
})
// 2. 当前索引
const currentIndex = ref(0)

const housePic = computed(() => {
  return housePics.value[currentIndex.value] || []
})
// 自动播放定时器
let timer = null

// 3. 核心方法
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % housePics.value.length
}
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + housePics.value.length) % housePics.value.length
}

const goTo = (index) => {
  currentIndex.value = index
  resetAutoPlay() // 手动点击小圆点后重置计时器，防止卡顿
}

// 4. 自动播放控制
const startAutoPlay = () => {
  timer = setInterval(next, 3000) // 3秒切换一次
}
const resetAutoPlay = () => {
  clearInterval(timer)
  startAutoPlay()
}

// 5. 生命周期：挂载时启动，卸载时销毁
onMounted(() => {
  startAutoPlay()
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped lang="scss">
.carousel-container {
  width: 96%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out; /* 平滑滑动动画 */
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel-slide img {
  width: 96%;
  height: 250px;
  object-fit: cover; /* 保持比例裁剪，避免变形 */
  display: block;
}

/* 左右箭头样式 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}
.arrow-left {
  left: 10px;
}
.arrow-right {
  right: 10px;
}

/* 底部小圆点 */
.dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s;
}
.dot.active {
  background: #ffffff;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}
</style>
