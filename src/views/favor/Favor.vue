<template>
  <div class="favor">
    <h1>favor</h1>
    <span class="test2">test</span>
    <div class="container">
      <div class="left">
        <h2>收藏房源</h2>
        <div class="test"></div>
      </div>

      <div class="right"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped lang="scss">
h1 {
  border: 1px solid black;
}
.test2 {
  margin-right: 0;
  border: 1px solid black;
}
.container {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: #c15454;
  .left {
    width: 200px;
    background-color: #56d80f;
    border-radius: 5px;
    h2 {
      border: 1px solid black;
    }
    .test {
      margin-top: 10px;
      border: 1px solid black;
      height: 100px;
    }
  }
  .right {
    flex: 1;
    background-color: #724ab2;
    border-radius: 5px;
  }
}
</style>
