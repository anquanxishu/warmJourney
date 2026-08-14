<template>
  <div class="favor">
    <h1>收藏列表</h1>
    <HouseShow :house-list="favorStore.favorList" />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import HouseShow from '@/components/HouseShow.vue'
import { useFavorListStore } from '@/stores/favorList.js'
const favorStore = useFavorListStore()
</script>
<style scoped lang="scss"></style>
