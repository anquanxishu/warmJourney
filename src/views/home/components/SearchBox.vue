<template>
  <div class="searchBox">
    <div class="top">
      <!-- 返回图片 -->
      <img
        class="return-icon"
        src="@/assets/img/common/ic_public_arrow_left.svg"
        alt=""
        @click="router.back()"
      />

      <div class="search-content">
        <!-- 地址 -->
        <div class="city" @click="router.push('/position')">
          {{ positionStore.getCurrentCityName }}
        </div>
        <!-- 住退上下两行 -->
        <div class="home-date">
          <div class="date-content"><span>住：</span>{{ query.startDate }}</div>
          <div class="date-content"><span>退：</span>{{ query.endDate }}</div>
        </div>
        <!-- 搜索建议 点击跳转搜索界面 -->
        <div class="search-suggest">
          <span>搜索：{{ positionStore.getCurrentCityName }}的景点/地标/房源</span>
        </div>
      </div>
      <!-- 菜单 -->
      <img src="/public/warm_logo.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue'
import { usePositionStore } from '@/stores/position/position.js'

const positionStore = usePositionStore()

const props = defineProps({
  query: {
    type: Object,
    default: () => ({}),
  },
})
import { useRouter } from 'vue-router'
const router = useRouter()
// 搜索
const search = ref('')
</script>
<style scoped lang="scss">
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  // 搜索内容
  .search-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 0 10px;
    border-radius: 6px;
  }
  img {
    margin: 0 auto;
    width: 20px;
    height: 20px;
  }
  .return-icon {
    width: 30px;
    height: 30px;
  }
  .home-date {
    font-size: 10px;
    padding: 0 5px;
    border-right: 2px solid white;
    display: relative;
  }
  .city,
  .home-date,
  .search-suggest {
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .search-suggest {
    font-size: 12px;
  }
  span {
    color: #999;
  }
}
</style>
