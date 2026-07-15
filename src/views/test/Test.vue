<template>
  <div class="search-wrapper" :class="{ 'is-focused': isFocused }">
    <!-- 搜索图标（左侧） -->
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke="iconColor"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>

    <!-- 输入框 -->
    <input
      ref="inputRef"
      type="text"
      class="search-input"
      :placeholder="placeholder"
      v-model="keyword"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="handleInput"
    />

    <!-- 清除按钮（右侧） -->
    <button
      v-if="keyword.length > 0"
      class="clear-btn"
      @click="clearInput"
      aria-label="清除搜索内容"
    >
      <!-- 使用内联 SVG 的 "X" 图标，颜色可随父级改变 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke="iconColor"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// props 定义（可定制）
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '搜索位置、攻略…',
  },
  iconColor: {
    type: String,
    default: '#999', // 默认灰色，可传入任意颜色
  },
})

const emit = defineEmits(['update:modelValue', 'search'])

const keyword = ref(props.modelValue)
const isFocused = ref(false)
const inputRef = ref(null)

// 双向绑定：当内部变化时同步到父组件
watch(keyword, (newVal) => {
  emit('update:modelValue', newVal)
})

// 父组件传入的 modelValue 变化时同步到内部
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== keyword.value) {
      keyword.value = newVal
    }
  },
)

// 输入事件（可触发搜索）
const handleInput = () => {
  // 可在此处添加防抖搜索
  emit('search', keyword.value)
}

// 清空输入
const clearInput = () => {
  keyword.value = ''
  emit('search', '') // 通知父组件搜索清空
  inputRef.value?.focus() // 清空后继续聚焦输入框
}

// 暴露给父组件，以便重置或聚焦
defineExpose({
  focus: () => inputRef.value?.focus(),
  clear: clearInput,
})
</script>

<style scoped>
.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  background-color: #f3f4f6;
  border-radius: 9999px; /* 全圆角 */
  padding: 0 16px;
  transition:
    background-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
  border: 1.5px solid transparent;
}

.search-wrapper.is-focused {
  background-color: #ffffff;
  border-color: #4a90d9;
  box-shadow: 0 0 0 4px rgba(74, 144, 217, 0.15);
  transform: scale(1.02);
}

/* 搜索图标 */
.search-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: stroke 0.2s;
}

/* 输入框 */
.search-input {
  flex: 1;
  height: 44px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  color: #1f2937;
  padding: 0;
  min-width: 0; /* 防止撑开 */
}

.search-input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

/* 清除按钮 */
.clear-btn {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.clear-btn svg {
  width: 18px;
  height: 18px;
  pointer-events: none; /* 让点击事件由 button 处理 */
}
</style>
