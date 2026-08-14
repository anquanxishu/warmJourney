<script setup>
import TabBar from './components/tab-bar/TabBar.vue'
import { useRoute } from 'vue-router'
import { ref, provide } from 'vue'
// 获取滚动容器的 DOM 引用
const mainRef = ref(null)

// 提供给所有子组件使用
provide('scrollContainer', mainRef)
</script>

<template>
  <div class="container">
    <div ref="mainRef" class="main">
      <!-- keep-alive组件，用于缓存路由组件，避免重复渲染 -->

      <RouterView v-slot="{ Component }">
        <keep-alive :include="['Home']">
          <component :is="Component" />
        </keep-alive>
      </RouterView>
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
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
