<template>
  <!-- // 搜索栏 -->
  <div class="container">
    <div class="search-box">
      <!-- 整个搜索栏容器，flex 水平排列 -->
      <div class="search">
        <!-- 搜索图标 -->
        <img src="@/assets/img/position/search.svg" alt="" />
        <!-- 输入框，双向绑定 searchText -->
        <input type="text" placeholder="位置/地区/区域" v-model="searchText" />
        <!-- 清除按钮，当 searchText 有值时显示，点击清空 -->
        <img
          src="@/assets/img/position/cancel_filled.svg"
          alt="清除"
          @click="searchText = ''"
          v-show="searchText"
        />
      </div>
    </div>

    <!-- 取消按钮，点击执行 router.back() -->
    <div class="cancel" @click="router.back()">取消</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 获取路由实例
const router = useRouter() // 路由实例，用于返回
const searchText = defineModel()
// const searchText = ref('') // 搜索关键词，响应式，默认空字符串
</script>
<style scoped lang="scss">
.container {
  display: flex; // 水平弹性布局
  margin: 10px; // 上外边距 10px
  align-items: center; // 垂直居中
  .search-box {
    flex: 1; // 占据剩余空间（与“取消”按钮平分，但取消是 span 无弹性，所以占剩余全部）
    position: relative;
    .search {
      display: flex;
      align-items: center;
      border-radius: 25px; // 圆角
      padding: 4px; // 内边距 2px
      background-color: #f2f2f2; // 背景色

      img {
        height: 18px; // 图标高度固定，宽度自适应

        margin-right: 5px; // 图标与输入框间距 5px
      }
      input {
        flex: 1; // 占据剩余宽度
        border: none;
        outline: none;
        height: 18px; // 固定高度
        background-color: #f5f5f5; // 输入框背景透明
      }
    }
  }

  .cancel {
    margin-left: 7px;
    margin-right: 10px;
    font-size: 18px;
    color: #1f2937;
    font-weight: 500;
  }
}
</style>
