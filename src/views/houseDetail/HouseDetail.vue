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
      <HouseShow />
    </div>
  </div>
  <!-- 标签导航 -->
  <div class="tag-nav" :class="{ visible: isVisible }">
    <div class="tag-nav-inner">
      <div
        class="tag-item"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ active: currentTagIndex == index }"
        @click="toTag(index)"
      >
        {{ tag }}
      </div>
    </div>
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
const isUseNav = ref(false)
const bar = () => {
  // 标签滚动到对应位置
  const tagNavItem = document.querySelectorAll('.tag-item')
  tagNavItem[currentTagIndex.value].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
  })
}
// 切换标签并滚动到对应位置
const toTag = (index) => {
  isUseNav.value = true
  currentTagIndex.value = index

  // 滚动到对应位置
  const tagItems = document.querySelectorAll('.toTag')
  tagItems[index].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
  bar()
  setTimeout(() => {
    isUseNav.value = false
  }, 500)
}
const observed = ref(null)
onMounted(() => {
  const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = false
      } else {
        isVisible.value = true
      }
    })
  })
  infoObserver.observe(observed.value)
  const tagObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isUseNav.value) {
            currentTagIndex.value = entry.target.dataset.index
            bar()
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
    tagObserver.observe(item)
  })
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
.tag-nav {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
  background-color: white;
  &.visible {
    transform: translateY(0);
  }
  .tag-nav-inner {
    display: flex;
    height: 56px;
    align-items: center;
    gap: 30px;
    white-space: nowrap;
    overflow-x: auto;
    .tag-item {
      margin: 0 10px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      padding: 5px 0;

      &.active {
        color: var(--primary-color);
        font-weight: 600;

        border-bottom: 3px solid var(--primary-color);
      }
    }
  }
}
</style>
