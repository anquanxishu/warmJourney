<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import { useRoute } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="main">
      <!-- 路由出口 -->
      <!-- 加入key属性，防止路由切换时组件不更新或者同一路由不渲染 -->
      <RouterView :key="$route.fullPath"></RouterView>
    </div>
    <TabBar class="tabBar" v-show="useRoute().meta.showTabBar"></TabBar>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100vw;
  overflow: hidden; /* 防止整体滚动 */
  position: relative;
  margin: auto;
  .main {
    flex: 1;
    overflow: auto;
  }
}
</style>
