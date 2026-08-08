<template>
  <div class="houseDetailTop">
    <div class="top">
      <!-- 返回图片 -->
      <img
        class="return-icon"
        src="@/assets/img/common/ic_public_arrow_left_active.svg"
        alt=""
        @click="$router.back()"
      />

      <div>房屋详情</div>
      <!-- 菜单 -->
      <img src="@/assets/img/home/icon-right-menu.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped lang="scss">
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  img {
    width: 20px;
    height: 20px;
  }
  .return-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
