<template>
  <div class="comment">
    <h3>房客点评</h3>
    <div class="container">
      <div class="overall">{{ commentModule.overall }}</div>
      <div class="score">
        <div>{{ commentModule.scoreTitle }}</div>
        <div>{{ commentModule.totalCount }}条</div>
      </div>
      <div class="comment-items">
        <template v-for="item in commentModule.subScores || []" :key="item">
          <div class="comment-item">
            <span>{{ item.split(' ')[0] }}</span>
            <span class="bold">{{ item.split(' ')[1] }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- 评论标签 -->
    <div class="comment-tags">
      <div
        class="tag"
        v-for="item in commentModule.commentTagVo.slice(0, 3) || []"
        :key="item.text"
        :style="{ color: item.color, background: item.backgroundColor }"
      >
        {{ item.text }}
      </div>
    </div>
    <!-- 评论内容 -->
    <div class="comment-content">
      <!-- 用户信息 -->
      <div class="user">
        <img :src="comment.userAvatars" alt="" />
        <div>
          <div>{{ comment.userName }}</div>
          <div>{{ comment.checkInDate }}</div>
        </div>
      </div>
      <!-- 评论内容 -->
      <div>
        <div>{{ comment.commentDetail }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, computed } from 'vue'
const props = defineProps({
  commentModule: {
    type: Object,
    default: () => ({}),
  },
})
const comment = computed(() => props.commentModule.comment)
</script>
<style scoped lang="scss">
.comment {
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #fff;
  //   评论容器
  .container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .overall {
      font-size: 24px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .score {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .comment-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-left: auto;
      .bold {
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
  //   评论标签
  .comment-tags {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  //   评论内容
  .comment-content {
    margin: 10px 0;
    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
