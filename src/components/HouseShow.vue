<template>
  <div class="houseShow">
    <div
      v-for="item in houseList"
      :key="item.data.houseId"
      class="houseShow-item"
      @click="toHouseDetail(item.data.houseId)"
    >
      <HouseShowV9 :house-item="item" v-if="item.discoveryContentType === 9" />
      <HouseShowV3 :house-item="item" v-else />
    </div>

    <!-- 加载更多 -->
    <div v-if="loading">加载中...</div>
    <div
      ref="lmBut"
      id="lm1"
      v-if="!loading && hasMore"
      class="load-more"
      @click="$emit('loadMore')"
    >
      加载下一页
    </div>
  </div>
</template>
<script setup>
import { ref, onUnmounted, defineProps, defineEmits, nextTick, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import HouseShowV9 from '@/components/house-show/HouseShowV9.vue'
import HouseShowV3 from '@/components/house-show/HouseShowV3.vue'

const props = defineProps({
  houseList: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hasMore: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['loadMore'])

// 路由实例
const router = useRouter()
// 跳转房屋详情页
const toHouseDetail = (houseId) => {
  router.push({
    name: 'houseDetail',
    query: {
      houseId,
    },
  })
}
const lmBut = ref(null)
// 监听加载更多按钮是否进入视口
const a = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    emit('loadMore')
  }
})

onUpdated(async () => {
  a.disconnect()
  await nextTick()
  if (lmBut.value) {
    a.observe(lmBut.value)
  }
})
onUnmounted(() => {
  // 组件卸载时，断开监听
  a.disconnect()
})
</script>

<style scoped lang="scss">
.houseShow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  .houseShow-item {
    width: 48%;
    margin-bottom: 10px;
  }
  .load-more {
    width: 100%;
    text-align: center;
    margin: 10px auto;
  }
}
</style>
