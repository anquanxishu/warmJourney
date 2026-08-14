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
import { ref, onMounted, nextTick, onActivated, onDeactivated, inject } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomePosition from './components/HomePosition.vue'
import HomeSearch from './components/HomeSearch.vue'
import HouseShow from '@/components/HouseShow.vue'
import { getHotSuggests, getCategories } from './homeRequest.js'
import { useHouseListStore } from '@/stores/houseList.js'
import { storeToRefs } from 'pinia'
import { onBeforeRouteLeave } from 'vue-router'

// 注入父组件提供的滚动容器（它是一个 ref）
const scrollContainer = inject('scrollContainer')

// 保存离开时的滚动位置
const savedScrollTop = ref(0)

// 页面失活时记录滚动位置
// 不行 因为在渲染时滚动位置是 0
// 所以在路由离开前记录滚动位置
// onDeactivated(() => {
// })
// 在路由离开前执行（此时 DOM 还是完整的 Home 页面）
onBeforeRouteLeave(() => {
  if (scrollContainer?.value) {
    // 此时读取到的绝对是真实有效的滚动位置
    savedScrollTop.value = scrollContainer.value.scrollTop
  }
})

// 页面激活时恢复滚动位置
onActivated(() => {
  // 必须等 DOM 更新后再滚动，防止被渲染覆盖
  nextTick(() => {
    if (scrollContainer?.value && savedScrollTop.value > 0) {
      scrollContainer.value.scrollTop = savedScrollTop.value
    }
  })
})
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
.btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
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
