<template>
  <div class="container">
    <!-- 搜索栏 -->
    <div class="position-search-container">
      <Search class="position-search" v-model="searchText" />
      <!-- 两个标签 城市和省份  -->
      <div class="position-tabs">
        <span @click="tab = 'nation'" :class="{ active: tab === 'nation' }">国内</span>
        <span @click="tab = 'foreign'" :class="{ active: tab === 'foreign' }">国外</span>
      </div>
    </div>

    <!-- 城市列表容器 -->
    <div class="position-cities-container">
      <!-- 热门城市 -->
      <div class="position-hot-cities">
        <div><span class="temp"></span> 热门城市</div>
        <div class="position-hot-cities-list">
          <div v-for="city in cityList?.hotCities" :key="city.cityName" @click="handleClick(city)">
            {{ city.cityName }}
          </div>
        </div>
      </div>

      <!-- 城市列表 -->
      <div
        class="position-cities"
        v-for="item in cityList?.cities"
        :key="item.group"
        :id="item.group"
      >
        <div class="position-letter">{{ item.group }}</div>
        <div
          v-for="item in item.cities"
          :key="item.cityName"
          class="position-city"
          @click="handleClick(item)"
        >
          {{ item.cityName }}
        </div>
      </div>

      <!-- 字母检索 -->
      <div class="position-letter-search">
        <div class="position-letter-search-list">
          <div
            v-for="item in cityList?.cities"
            :key="item.group"
            @click="handleClickLetter(item.group)"
          >
            {{ item.group }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 仅用于调试，显示当前搜索词 -->
  <!-- <p>当前搜索词：{{ searchText }}</p> -->

  <!-- // 城市列表 -->
</template>
<script setup>
import { ref, computed } from 'vue' // 导入 ref 创建响应式数据，computed 计算属性，根据 tab 切换显示城市或省份列表
import { useRouter } from 'vue-router' // 获取路由实例
import { getCitiesAll } from '@/views/position/getCites' // 导入获取城市数据的函数
import Search from '@/views/position/components/Search.vue' // 导入搜索栏组件
import { usePositionStore } from '@/stores/position/position.js' // 导入位置状态管理
const positionStore = usePositionStore() // 实例化位置状态管理
import { storage } from '@/utils/localStorage.js' // 导入本地存储工具

const router = useRouter() // 路由实例，用于返回

const searchText = ref('') // 搜索关键词，响应式

const cityData = ref(JSON.parse(localStorage.getItem('cityData') || '[]')) // 城市数据列表，响应式
const cityList = computed(() => {
  return tab.value === 'nation' ? cityData.value?.cityGroup : cityData.value?.cityGroupOverSea
})

if (cityData.value == '') {
  // 获取城市数据  重试两次
  function bar() {
    getCitiesAll()
      .then((res) => {
        // 缓存城市数据
        storage.setItem('cityData', res.data)
        cityData.value = res.data
        a = 0
      })
      .catch((err) => {
        console.log('error', err)
      })
  }
  bar()
}

// 根签切换，响应式，默认显示城市
const tab = ref('nation') // 标签切换，响应式，默认显示城市

// 点击城市或省份，返回上一页并传递参数 name
const handleClick = (city) => {
  positionStore.setCurrentCity(city)
  router.back()
}

// 点击字母检索，滚动到对应字母位置
const handleClickLetter = (letter) => {
  const element = document.getElementById(letter)
  if (element) {
    element.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    })
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;

  .position-search-container {
    flex: 1;
    .position-search {
      position: sticky;
      top: 0;
    }
    .position-tabs {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .active {
        color: var(--primary-color);
        font-weight: 500;
      }
    }
  }
  // 城市列表容器
  .position-cities-container {
    overflow: auto;
    position: relative;
    // 不显示滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    // 热门城市
    .position-hot-cities {
      font-size: 18px;
      color: #1f2937;
      font-weight: 500;
      margin: 10px 0;

      .temp {
        display: inline-block;
        height: 15px;
        width: 3px;
        -webkit-box-shadow: 4px 0 10px 0 rgba(255, 144, 47, 0.3);
        box-shadow: 4px 0 10px 0 rgba(255, 144, 47, 0.3);
        border-radius: 4px;
        margin-right: 5px;

        background: var(--tjc-theme, #ff9645);
      }
      .position-hot-cities-list {
        margin: 10px 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;

        div {
          height: 25px;
          border-radius: 50px;
          background-color: var(--primary-color);
          border: solid 1px #d1d5db;
          padding: 4px 8px;
          text-align: center;
          font-size: 18px;
          color: #1f2937;
          font-weight: 500;
          // margin: 5px;
          padding: 10px 20px;
        }
      }
    }
    // 城市列表
    .position-cities {
      border: solid 1px #d1d5db;
      .position-letter {
        font-size: 18px;
        color: #1f2937;
        font-weight: 500;
        margin-bottom: 10px;
        background-color: #ecf1f6;
        padding: 5px;
      }
      .position-city {
        font-size: 15px;
        color: #1f2937;
        font-weight: 500;
        margin-bottom: 10px;
        padding: 5px;
        border-bottom: solid 1px #d1d5db;
      }
    }
    // 字母检索
    .position-letter-search {
      // border: solid 1px #3d5a84;
      // background-color: #b7c4d1;
      // padding: 5px;
      width: 15px;
      position: fixed;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      .position-letter-search-list {
        color: #1511de;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
      }
    }
  }
}
</style>
