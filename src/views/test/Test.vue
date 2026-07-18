<template>
  <div class="city-picker">
    <!-- 左侧城市列表 -->
    <div class="city-list" ref="cityListRef">
      <div v-for="(cities, letter) in sortedCityData" :key="letter" class="letter-group">
        <div class="letter-title" :id="`letter-${letter}`">
          {{ letter }}
        </div>
        <ul>
          <li v-for="city in cities" :key="city.adcode">
            {{ city.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 右侧索引 -->
    <div class="index-bar">
      <div
        v-for="letter in sortedLetters"
        :key="letter"
        class="index-item"
        @click="scrollToLetter(letter)"
      >
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getCites } from '@/views/position/getCites' // 导入获取城市数据的函数
// 存储原始数据
const cityData = ref({})

// 请求数据
const fetchCities = async () => {
  try {
    const res = await getCites() // 你的接口地址
    // res.data 已经是解析后的对象，如 { cityByLetter: { A: [...], B: [...] } }
    cityData.value = res.record.cityByLetter || {}
  } catch (error) {
    console.error('获取城市数据失败', error)
  }
}

// 排序字母（确保 A-Z 顺序）
const sortedLetters = computed(() => {
  return Object.keys(cityData.value).sort()
})

// 按字母顺序获取城市列表，方便模板遍历
const sortedCityData = computed(() => {
  const result = {}
  sortedLetters.value.forEach((letter) => {
    result[letter] = cityData.value[letter] || []
  })
  return result
})

// 滚动到指定字母区块
const cityListRef = ref(null)
const scrollToLetter = (letter) => {
  // 方式1：通过 id 获取元素并 scrollIntoView
  const target = document.getElementById(`letter-${letter}`)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 方式2：如果使用了 ref，也可通过 ref 查找子元素（略）
}

// 组件挂载后请求数据
onMounted(() => {
  fetchCities()
})
</script>

<style scoped>
.city-picker {
  display: flex;
  height: 500px; /* 固定高度，产生滚动 */
  position: relative;
}
.city-list {
  flex: 1;
  overflow-y: auto;
  padding-right: 40px;
}
.letter-group {
  margin-bottom: 20px;
}
.letter-title {
  font-weight: bold;
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 4px;
  position: sticky;
  top: 0; /* 使字母标题吸顶 */
  z-index: 1;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 6px 10px;
  border-bottom: 1px solid #eee;
}
.index-bar {
  position: sticky;
  top: 0;
  right: 0;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-left: 1px solid #ddd;
  height: 100%;
  overflow-y: auto;
}
.index-item {
  font-size: 12px;
  padding: 2px 0;
  cursor: pointer;
  color: #409eff;
  user-select: none;
}
.index-item:hover {
  background: #eee;
}
</style>
