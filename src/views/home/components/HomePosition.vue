<template>
  <div class="home-position">
    <span class="position">{{ positionStore.getCurrentCityName }}</span>

    <span class="position-select" @click="router.push('/position')">位置选择</span>
    <img src="@/assets/img/home/icon_location.png" alt="" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { usePositionStore } from '@/stores/position/position.js' // 导入位置状态管理
const positionStore = usePositionStore() // 实例化位置状态管理
</script>
<style scoped lang="scss">
.home-position {
  margin-bottom: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  .position {
    flex: 1;
    font-size: 18px;
    margin-left: 10px;
    font-weight: 500;
  }

  img {
    width: 20px;
  }
}
</style>
