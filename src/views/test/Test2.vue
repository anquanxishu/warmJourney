<template>
  <div class="test2">
    <div class="header">header</div>
    <div class="main">
      <div class="main-header">main</div>
      <div class="main-main">
        <div class="main1">
          <div class="main1-1">main1-1</div>
          <div class="main1-2">main1-2</div>
        </div>
        <div class="main2">
          <div class="main2-1">main2-1</div>
          <div class="main2-2">main2-2</div>
          <div class="main2-3">main2-3</div>
        </div>
        <div class="main3">
          <div class="main3-1">main3-1</div>
          <div class="main3-2">main3-2</div>
          <div class="main3-3">main3-3</div>
          <div class="main3-4">main3-4</div>
        </div>
      </div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script setup>
// 无需引入任何东西，逻辑保持干净
</script>

<style scoped lang="scss">
.test2 {
  height: 100vh;
  display: grid; // 顶层 Grid
  grid-template-rows: 10vh 80vh 10vh; // 上中下三等份（按你的需求）
  background-color: #f5f5f5;
  font-size: 2rem;
}

.header {
  background-color: #f72727;
}

.main {
  display: grid; // 主体 Grid
  grid-template-rows: 20% 80%; // main-header 占 20%，main-main 占 80%
  background-color: #21cb62;

  .main-header {
    background-color: #ffffff;
  }

  .main-main {
    display: grid; // 核心三列 Grid
    grid-template-columns: 1fr 1fr 1fr; // 自动三等分，彻底解决 33%/34% 的 1px 裂痕
    background-color: #b31111;

    // 三列公共样式（无需再写 width 和 float）
    .main1,
    .main2,
    .main3 {
      // 这里不用任何宽度定义，Grid 自动拉伸撑满
      display: grid; // 每列内部也是 Grid（纵向排列）
    }

    .main1 {
      grid-template-rows: 1fr 1fr; // 上下 1:1，自动平分
      background-color: yellow;

      .main1-1 {
        background-color: #513c3c;
      }
      .main1-2 {
        background-color: #72509f;
      }
    }

    .main2 {
      grid-template-rows: 1fr 1fr 1fr; // 上中下 1:1:1
      background-color: #ffffff;

      .main2-1 {
        background-color: #513c3c;
      }
      .main2-2 {
        background-color: #72509f;
      }
      .main2-3 {
        background-color: #ffffff;
      }
    }

    .main3 {
      grid-template-rows: 1fr 1fr 1fr 1fr; // 四等分 1:1:1:1
      background-color: pink;

      .main3-1 {
        background-color: #513c3c;
      }
      .main3-2 {
        background-color: #72509f;
      }
      .main3-3 {
        background-color: #ffffff;
      }
      .main3-4 {
        background-color: #72509f;
      }
    }
  }
}

.footer {
  background-color: #2a2e95;
}
</style>
