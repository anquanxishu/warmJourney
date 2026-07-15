<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import { useRoute } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="main">
      <RouterView></RouterView>
    </div>
    <TabBar class="tabBar" v-show="useRoute().meta.showTabBar"></TabBar>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 占满视口高度 */
  overflow: hidden; /* 防止整体滚动 */
}
.main {
  flex: 1;
  overflow: auto;
}
</style>
