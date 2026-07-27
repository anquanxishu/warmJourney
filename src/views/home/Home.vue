<template>
  <div class="home">
    <HomeHeader />

    <div class="home-img">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>

    <HomePosition />

    <!-- 入住退房时间 -->
    <div class="home-date">
      <div>
        <div class="date-title">入住</div>
        <input type="date" v-model="startTime" ref="startTimeRef" v-show="false" />
        <div class="date-content" @click="startTimeRef.showPicker()">
          {{ startDate }}
        </div>
      </div>
      <div>共{{ night }}晚</div>
      <div>
        <div class="date-title">离店</div>
        <input
          type="date"
          v-model="endTime"
          ref="endTimeRef"
          v-show="false"
          id="endTime"
          :min="startTime"
        />
        <div class="date-content" @click="endTimeRef.showPicker()">
          {{ endDate }}
        </div>
      </div>
    </div>

    <!-- 房间信息 -->
    <div class="home-room">
      <div>
        <div>房间类型</div>
        <div>标准房间</div>
      </div>
      <div>
        <div>房间人数</div>
        <div>2人</div>
      </div>
      <div>
        <div>房间面积</div>
        <div>200平</div>
      </div>
    </div>
    <h1 v-for="item in 20" :key="item">home</h1>
  </div>
</template>
<script setup>
import { ref, watch, computed, reactive } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomePosition from './components/HomePosition.vue'
import dayjs from 'dayjs'
// 入住时间
const startTime = ref(dayjs().format('YYYY-MM-DD'))
// 离店时间
const endTime = ref(dayjs().add(1, 'day').format('YYYY-MM-DD'))
// 入住时间
const startDate = computed(() => dayjs(startTime.value).format('MM-DD'))
// 离店时间
const endDate = computed(() => dayjs(endTime.value).format('MM-DD'))
// 计算入住时间间隔
const night = computed(() => dayjs(endTime.value).diff(dayjs(startTime.value), 'day'))

// 点击日期选择器
const startTimeRef = ref(null)
const endTimeRef = ref(null)

watch(startTime, (newVal, oldVal) => {
  endTime.value = dayjs(newVal).add(1, 'day')
})
</script>
<style scoped lang="scss">
.home-img {
  img {
    width: 100%;
  }
}
// 入住退房时间
.home-date {
  margin-bottom: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  height: 70px;
  // 文字淡化效果
  .date-title {
    font-size: 14px;
    font-weight: 500;
    color: #999;
  }
  // 入住时间内容
  .date-content {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
