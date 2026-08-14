<template>
  <div class="favorImg" @click="isFavor = !isFavor">
    <img v-if="isFavor" src="@/assets/img/favor/ic_public_favor_filled.svg" alt="" />
    <img v-if="!isFavor" src="@/assets/img/favor/ic_public_favor.svg" alt="" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isFavor = ref(false)
</script>

<style scoped lang="scss">
.favorImg {
  position: absolute;
  top: 10px;
  right: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
