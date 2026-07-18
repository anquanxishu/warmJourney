<template>
  <Search />
  <!-- 两个标签 城市和省份  -->
  <div class="position-tabs">
    <span @click="tab = 'city'">城市</span>
    <span @click="tab = 'province'">省份</span>
  </div>

  <!-- 热门城市 -->
  <div class="position-hot-cities">
    <div>热门城市</div>
    <div class="position-hot-cities-list">
      <div v-for="city in cityData?.cityData?.hotCities?.slice(1)" :key="city.name">
        {{ city.name }}
      </div>
    </div>
  </div>

  <!-- 城市列表 -->
  <div class="position-cities" v-for="letter in Object.keys(cities)" :key="letter">
    <span>{{ letter }}</span>
    <div v-for="item in cities[letter]" :key="item.name">
      {{ item.name }}
    </div>
  </div>

  <!-- 仅用于调试，显示当前搜索词 -->
  <!-- <p>当前搜索词：{{ searchText }}</p> -->

  <!-- // 城市列表 -->
</template>
<script setup>
import { ref, computed } from 'vue' // 导入 ref 创建响应式数据，computed 计算属性，根据 tab 切换显示城市或省份列表
import { useRouter } from 'vue-router' // 获取路由实例
import { getCites } from '@/views/position/getCites' // 导入获取城市数据的函数
import Search from '@/views/position/components/search.vue' // 导入搜索栏组件
const router = useRouter() // 路由实例，用于返回

const searchText = ref('') // 搜索关键词，响应式

const cityData = ref({
  hotCities: [],
  cityByLetter: [],
  provinceByLetter: [],
}) // 城市数据列表，响应式

const cityByLetter = ref('')
const provinceByLetter = ref('')

// 获取城市数据
getCites().then((res) => {
  cityData.value = res.record
  cityByLetter.value = res.record.cityByLetter
  provinceByLetter.value = res.record.provinceByLetter
})
// 根签切换，响应式，默认显示城市
const tab = ref('city') // 标签切换，响应式，默认显示城市
const cities = computed(() => {
  console.log(tab)
  console.log(cityData)
  return tab.value === 'city' ? cityByLetter.value : provinceByLetter.value
})
</script>
<style scoped lang="scss">
.position-tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.position-hot-cities {
  font-size: 18px;
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 10px;
  .position-hot-cities-list {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
      width: 100px;
      height: 25px;
      border-radius: 12px;
      background-color: var(--primary-color);
      border: solid 1px #d1d5db;
      padding: 2px;
      text-align: center;
      font-size: 18px;
      color: #1f2937;
      font-weight: 500;
      margin-bottom: 5px;
    }
  }
}
.position-cities {
  min-height: 250px;
  border: solid 1px #d1d5db;
}
</style>
