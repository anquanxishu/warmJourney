<template>
  <div class="tabBar">
    <div
      class="tabItem"
      v-for="(item, index) in tabs"
      :key="item"
      :class="{ active: itemActiveArr[index] }"
      @click="bar(item, index)"
    >
      <img
        class="img"
        :src="
          itemActiveArr[index] ? getTabbarImgPath(item.imageActive) : getTabbarImgPath(item.image)
        "
        alt=""
      />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import tabs from '@/assets/data/tabbar.js'
const itemActiveArr = ref([1])
import router from '@/router'

// 动态引入tabbar图片
const tabbarImageModules = import.meta.glob('../../assets/img/tabbar/*.png', {
  eager: true,
  import: 'default',
})
const getTabbarImgPath = (imgPath) => {
  const fullPath = `../../assets/img/${imgPath}`
  return tabbarImageModules[fullPath]
}

// 路径的改变和颜色的切换
const bar = (item, index) => {
  router.push(item.path)
  itemActiveArr.value = []
  itemActiveArr.value[index] = 1
}
</script>
<style scoped lang="scss">
.tabBar {
  height: 50px;
  flex-shrink: 0;
  border-top: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tabItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.active {
  color: var(--primary-color);
}
.img {
  height: 24px;
}
</style>
