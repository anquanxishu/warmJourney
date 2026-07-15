<template>
  <div class="home-position">
    <span class="position" @click="router.push('/position')">当前位置</span>

    <span class="position-select">位置选择</span>
    <img src="@/assets/img/home/icon_location.png" alt="" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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
