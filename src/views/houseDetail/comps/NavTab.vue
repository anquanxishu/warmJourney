<template>
  <!-- 标签导航 -->
  <div class="tag-nav" :class="{ visible: isVisible }">
    <div class="tag-nav-inner">
      <div
        class="tag-item"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ active: currentTagIndex == index }"
        @click="$emit('toTag', index)"
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
const bar = (newVal) => {
  // 标签滚动到对应位置
  const tagNavItem = document.querySelectorAll('.tag-item')
  tagNavItem[newVal].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
  })
}
watch(
  () => props.currentTagIndex,
  (newVal) => {
    bar(newVal)
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
