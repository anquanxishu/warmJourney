<template>
  <div class="houseDetail">
    <HouseDetailTop />
    <Banner :house-picture="houseDetail?.mainPart?.topModule?.housePicture || []" />
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import HouseDetailTop from './comps/HouseDetailTop.vue'
import Banner from './comps/Banner.vue'
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

const mainPart = computed(() => houseDetail.value)
const topModule = computed(() => mainPart.value)
// 房屋详情
</script>
<style scoped lang="scss"></style>
