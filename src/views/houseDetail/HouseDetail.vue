<template>
  <div class="houseDetail">
    <HouseDetailTop />
    <!-- 可选链操作 -->
    <Banner :house-picture="houseDetail?.mainPart?.topModule?.housePicture || []" />
    <!-- 无数据 不渲染 -->
    <Infos v-if="topModule" :top-module="topModule" />
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import HouseDetailTop from './comps/HouseDetailTop.vue'
import Banner from './comps/Banner.vue'
import Infos from './comps/Infos.vue'
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
const topModule = computed(() => mainPart.value?.topModule)
// 房屋详情
</script>
<style scoped lang="scss"></style>
