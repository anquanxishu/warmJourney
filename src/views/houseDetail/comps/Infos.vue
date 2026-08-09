<template>
  <div class="infos">
    <!-- 房屋名称 -->
    <div class="houseName">{{ topModule.houseName }}</div>
    <!-- 房屋标签 -->
    <div class="houseTags">
      <template v-for="item in topModule.houseTags">
        <span
          class="tag"
          v-if="item.tagText?.text"
          :style="{
            color: item.tagText.color,
            backgroundColor: item.tagText.background.color,
          }"
          >{{ item.tagText?.text }}</span
        >
      </template>
    </div>
    <!-- 房屋评价 -->
    <!--          "commentBrief": {
          "overall": 4.9,
          "scoreTitle": "超赞",
          "commentBrief": "整体环境很好",
          "commentBriefV2": null,
          "userAvatars": [
            {
              "userAvatars": "https://pic.tujia.com/upload/festatic/app/tujia_useravatar.png"
            },
            {
              "userAvatars": "https://pic.tujia.com/upload/festatic/app/tujia_useravatar.png"
            },
            {
              "userAvatars": "https://pic.tujia.com/upload/customeravatar/day_220716/202207160016055108.jpg"
            },
            {
              "userAvatars": "https://pic.tujia.com/upload/customeravatar/day_220716/202207160454456761.jpg"
            }
          ],
          "userAvatar": "",
          "totalCount": 117,
          "commentTabType": 0,
          "veryGoodNewHouse": "",
          "veryGoodNewHouseIcon": "",
          "totalCountStr": "117",
          "healthText": "",
          "healthFlag": 0,
          "sort": ""
        },-->
    <div class="commentBrief flex2">
      <!-- 左边 -->
      <div>
        <span>{{ commentBrief.overall }}</span>
        <span>{{ commentBrief.scoreTitle }}</span>
        <span>{{ commentBrief.commentBrief }}</span>
      </div>
      <!-- 右边 -->
      <!-- 评论人数 -->
      <div class="right">
        <span>{{ commentBrief.totalCount }}人评论</span>
      </div>
    </div>

    <!-- 位置 -->
    <!--        "nearByPosition": {
          "address": "番禺区, 广州番禺区万科世博汇石四商务中心",
          "nearByPosition": null,
          "areaName": "番禺区",
          "tradeArea": "番禺长隆/广州南站附近"
        },  -->
    <div class="nearByPosition flex2">
      <!-- 左右布局 -->
      <!-- 左边  地址 -->
      <div>
        <span>{{ nearByPosition.address }}</span>
      </div>
      <!-- 右边 固定 地图周边 -->
      <div class="right">
        <span>地图周边</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from 'vue'
const props = defineProps({
  topModule: {
    type: Object,
    default: () => ({}),
  },
})
const commentBrief = computed(() => props.topModule.commentBrief)
const nearByPosition = computed(() => props.topModule.nearByPosition)
</script>
<style scoped lang="scss">
.infos {
  width: 96%;
  margin: 0 auto;
  .houseName {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .houseTags {
    margin-bottom: 12px;
    .tag {
      margin: 2px;
    }
  }
  .flex2 {
    margin: 6px 4px;
    display: flex;
    flex-direction: row;
    .right {
      margin-left: auto;
      color: var(--primary-color);
      font-size: 14px;
    }
  }
}
</style>
