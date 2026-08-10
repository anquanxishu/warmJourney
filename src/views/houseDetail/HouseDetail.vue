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
  </div>
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
</script>
<style scoped lang="scss">
.houseDetail {
  background-color: #f5f5f5;
}
</style>
