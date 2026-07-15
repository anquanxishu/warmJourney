<template>
  <div class="home">
    <HomeHeader />
    <div class="home-img">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>
    <HomePosition />

    <h1 v-for="item in 20" :key="item">home</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomePosition from './components/HomePosition.vue'
</script>
<style scoped lang="scss">
.home-img {
  img {
    width: 100%;
  }
}
</style>
