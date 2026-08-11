<template>
  <div class="houseDetail">
    <HouseDetailTop />
    <!-- 可选链操作 -->
    <Banner :house-picture="houseDetail?.mainPart?.topModule?.housePicture || []" />
    <!-- 无数据 不渲染 -->
    <Infos v-if="topModule" :top-module="topModule" />
    <!-- 当前房屋 -->
    <CurrentHouse v-if="currentHouse" :current-house="currentHouse" />
    <!-- 评论 -->
    <Comment v-if="dynamicModule" :comment-module="dynamicModule.commentModule" />
    <!-- 房屋设施 -->
    <HouseFacility
      v-if="dynamicModule"
      :house-facility="dynamicModule.facilityModule.houseFacility"
    />
    <!-- 预订须知 -->
    <ReservationNotice v-if="dynamicModule" :rules-module="dynamicModule.rulesModule" />
    <!-- 位置信息 -->
    <PositionMap v-if="dynamicModule" :position-module="dynamicModule.positionModule" />
    <!-- 相似房屋 -->
    <h3 v-if="false">相似房屋</h3>
    <HouseShow v-if="false" />
  </div>
  <!-- 标签导航 -->
  <div class="tag-nav" :class="{ visible: isVisible }" v-if="false">
    <div class="tag-nav-inner">
      <div
        class="tag-item"
        v-for="(tag, index) in tags"
        :key="tag"
        :class="{ active: currentTagIndex === index }"
        @click="currentTagIndex = index"
      >
        {{ tag }}
      </div>
    </div>
  </div>

  <button @click="changeVisible" class="toggle-btn" v-if="false">切换导航</button>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import HouseDetailTop from './comps/HouseDetailTop.vue'
import Banner from './comps/Banner.vue'
import Infos from './comps/Infos.vue'
import CurrentHouse from './comps/CurrentHouse.vue'
import Comment from './comps/Comment.vue'
import HouseFacility from './comps/HouseFacility.vue'
import ReservationNotice from './comps/ReservationNotice.vue'
import PositionMap from './comps/PositionMap.vue'
import HouseShow from '@/components/HouseShow.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
// 房屋详情
import { getDetailInfos } from './getDetailInfos.js'
// 房屋详情
const houseDetail = ref({})
// 房屋详情
getDetailInfos(route.query.houseId)
  .then((res) => {
    houseDetail.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })

const mainPart = computed(() => houseDetail.value.mainPart)
// 当前房屋
const currentHouse = computed(() => houseDetail.value.currentHouse)
const dynamicModule = computed(() => mainPart.value?.dynamicModule)
const topModule = computed(() => mainPart.value?.topModule)
// 房屋详情

const tags = ['概览', '房源', '点评', '设施', '须知', '位置', '推荐']
const currentTagIndex = ref(0)
const isVisible = ref(false)
const changeVisible = () => {
  isVisible.value = !isVisible.value
}
</script>
<style scoped lang="scss">
.houseDetail {
  background-color: #f5f5f5;
}
h3 {
  padding-left: 20px;
  background-color: white;
}
.tag-nav {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
  background-color: rgba(225, 225, 225, 0.8);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  .tag-nav-inner {
    display: flex;
    height: 56px;
    align-items: center;
    gap: 50px;
    white-space: nowrap;
    overflow-x: auto;
  }
}
.tag-nav.visible {
  transform: translateY(0);
}

.toggle-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  padding: 10px 20px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  box-shadow: 0px 2px 10px rgba(64, 158, 255, 0.4);
  transition: transform 0.2s;
}
</style>
