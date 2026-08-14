<template>
  <!-- 标签导航 -->
  <div class="tag-nav" :class="{ visible: isVisible }">
    <div class="tag-nav-inner">
      <div
        class="tag-item"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ active: currentTagIndex == index }"
        @click="bar(index)"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  currentTagIndex: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['toTag'])
const currentIndex = ref(0)
// 切换标签
const toNavTag = (index) => {
  currentIndex.value = index
  const tagNavItem = document.querySelectorAll('.tag-item')
  tagNavItem[currentIndex.value].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
  })
}
// 点击标签切换标签并滚动到对应位置
const bar = (index) => {
  // 标签滚动到对应位置
  toNavTag(index)
  emit('toTag', index)
}
watch(
  () => props.currentTagIndex,
  (newVal) => {
    toNavTag(newVal)
  },
)
</script>
<style scoped lang="scss">
.tag-nav {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
  background-color: white;
  overflow-x: auto;
  &.visible {
    transform: translateY(0);
  }
  .tag-nav-inner {
    display: flex;
    height: 56px;
    align-items: center;
    gap: 30px;
    white-space: nowrap;
    overflow-x: auto;
    .tag-item {
      margin: 0 10px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      padding: 5px 0;

      &.active {
        color: var(--primary-color);
        font-weight: 600;

        border-bottom: 3px solid var(--primary-color);
      }
    }
  }
}
</style>
