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
  // 靠边影响体验 所以这里设置为98dvh
  // 96vw 是为了在不同设备上都能正常显示
  // 98dvh 是为了在不同设备上都能正常显示
  height: 98dvh;
  width: 96vw;
  overflow: hidden; /* 防止整体滚动 */
  position: relative;
  margin: auto;
  .main {
    flex: 1;
    overflow: auto;
  }
}
</style>
