<template>
  <div class="houseDetail">
    <div ref="observed"></div>
    <HouseDetailTop />
    <!-- 可选链操作 -->

    <Banner :house-picture="houseDetail?.mainPart?.topModule?.housePicture || []" />
    <!-- 无数据 不渲染 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <Infos v-if="topModule" :top-module="topModule" />
    </div>
    <!-- 当前房屋 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <CurrentHouse v-if="currentHouse" :current-house="currentHouse" />
    </div>
    <!-- 评论 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <Comment v-if="dynamicModule" :comment-module="dynamicModule.commentModule" />
    </div>
    <!-- 房屋设施 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <HouseFacility
        v-if="dynamicModule"
        :house-facility="dynamicModule.facilityModule.houseFacility"
      />
    </div>
    <!-- 预订须知 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <ReservationNotice v-if="dynamicModule" :rules-module="dynamicModule.rulesModule" />
    </div>

    <!-- 位置信息 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <PositionMap v-if="dynamicModule" :position-module="dynamicModule.positionModule" />
    </div>

    <!-- 相似房屋 -->
    <div class="toTag"></div>
    <div class="observedTag">
      <h3>相似房屋</h3>
      <HouseShow :house-list="houseList" :has-more="false" />
    </div>
  </div>
  <!-- 标签导航 -->
  <NavTab
    :tags="tags"
    :is-visible="isVisible"
    :current-tag-index="currentTagIndex"
    @toTag="toTag"
  />
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue'
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
import { getDetailInfos } from './getDetailInfos.js'
import { getHouseList } from '../home/homeRequest.js'
import { getRandomInt } from '@/utils/randomUtils.js'
import NavTab from './comps/NavTab.vue'
const router = useRouter()
const route = useRoute()
const houseList = ref([])

// 相似房屋
// 先使用随机代替相似房屋数据
getHouseList(getRandomInt(1, 1))
  .then((res) => {
    houseList.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })

// 房屋详情
const houseDetail = ref({})

// 房屋详情的获取
getDetailInfos(route.query.houseId)
  .then((res) => {
    houseDetail.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })

watch(
  () => route.query.houseId,
  (newVal) => {
    if (newVal) {
      getDetailInfos(newVal)
        .then((res) => {
          houseDetail.value = res.data
        })
        .catch((err) => {
          console.log(err)
        })

      getHouseList(getRandomInt(1, 1))
        .then((res) => {
          houseList.value = res.data
        })
        .catch((err) => {
          console.log(err)
        })

      toTag(0, 'instant')
    }
  },
)

const mainPart = computed(() => houseDetail.value.mainPart)
// 当前房屋
const currentHouse = computed(() => houseDetail.value.currentHouse)
const dynamicModule = computed(() => mainPart.value?.dynamicModule)
const topModule = computed(() => mainPart.value?.topModule)
// 房屋详情
// 标签导航
const tags = ['概览', '房源', '点评', '设施', '须知', '位置', '推荐']
const currentTagIndex = ref(0)
const isVisible = ref(false)
const isUseNav = ref(false)

// 切换标签并滚动到对应位置
const toTag = (index, behavior) => {
  isUseNav.value = true
  currentTagIndex.value = Number(index)
  if (!behavior) {
    behavior = 'smooth'
  }
  // 滚动到对应位置
  const tagItems = document.querySelectorAll('.toTag')
  tagItems[index].scrollIntoView({
    behavior: behavior,
    block: 'center',
  })
  setTimeout(() => {
    isUseNav.value = false
  }, 500)
}
const observed = ref(null)
const infoObserver = ref(null)
const tagObserver = ref(null)

onMounted(() => {
  // 监听概览区域是否进入视口
  // 如果进入视口，隐藏导航栏
  infoObserver.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = false
      } else {
        isVisible.value = true
      }
    })
  })
  infoObserver.value.observe(observed.value)

  // 监听标签区域是否进入视口
  // 如果进入视口，切换到对应标签
  tagObserver.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!isUseNav.value) {
          if (entry.isIntersecting) {
            currentTagIndex.value = Number(entry.target.dataset.index)
          }
        }
      })
    },
    {
      rootMargin: '-50% 0px -49% 0px',
      threshold: [0, 0.2, 0.5, 0.8, 1], // 多设阈值，提高触发频率
    },
  )
  document.querySelectorAll('.observedTag').forEach((item, index) => {
    item.dataset.index = index
    tagObserver.value.observe(item)
  })
})
onUnmounted(() => {
  // 组件卸载时，断开监听
  infoObserver.value.disconnect()
  tagObserver.value.disconnect()
})
</script>

<style scoped lang="scss">
.houseDetail {
  background-color: #f5f5f5;
}

h3 {
  padding-left: 20px;
  background-color: white;
}
</style>
