<template>
  <div class="home">
    <HomeHeader />

    <div class="home-img">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>

    <HomePosition />
    <!-- 搜索 -->
    <HomeSearch :hot-suggests="hotSuggests" />
    <!-- 推荐类别 -->
    <div class="home-categories">
      <div v-for="item in categories" :key="item.id">
        <img :src="item.pictureUrl" alt="" />
        <div>{{ item.title }}</div>
      </div>
    </div>
    <!-- 房屋展示 -->
    <h3>热门精选</h3>
    <HouseShow
      :house-list="houseList"
      :loading="loading"
      :has-more="hasMore"
      @loadMore="loadMore"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomePosition from './components/HomePosition.vue'
import HomeSearch from './components/HomeSearch.vue'
import HouseShow from '@/components/HouseShow.vue'
import { getHotSuggests, getCategories } from './homeRequest.js'
import { useHouseListStore } from '@/stores/houseList.js'
import { storeToRefs } from 'pinia'
const houseListStore = useHouseListStore()

// 房屋列表
const { houseList, loading, hasMore } = storeToRefs(houseListStore)
// 加载更多
const loadMore = houseListStore.loadMore
// 热门精选
const hotSuggests = ref([])

// 分页
const page = ref(1)
// 推荐类别
const categories = ref([])
getCategories()
  .then((res) => {
    categories.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })
// 房屋列表
// 加载下一页
loadMore()
// 搜索
getHotSuggests()
  .then((res) => {
    hotSuggests.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })
</script>
<style scoped lang="scss">
.home-img {
  img {
    width: 100%;
  }
}
.home-categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  height: 70px;
  margin-left: 10px;
  gap: 10px;
  overflow-x: scroll;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    flex-wrap: nowrap;
    width: 60px;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
