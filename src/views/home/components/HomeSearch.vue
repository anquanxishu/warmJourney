<template>
  <div class="homeSearch">
    <!-- 入住退房时间 -->
    <div class="home-date">
      <div>
        <div class="text-fade">入住</div>
        <input type="date" v-model="startTime" ref="startTimeRef" v-show="false" />
        <div class="date-content" @click="startTimeRef.showPicker()">
          {{ startDate }}
        </div>
      </div>
      <div>共{{ night }}晚</div>
      <div>
        <div class="text-fade">离店</div>
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
    <!-- 价格人数 -->
    <div class="home-date text-fade" id="price">
      <div>价格不限</div>
      <div></div>
      <div>人数不限</div>
    </div>

    <input type="text" placeholder="关键字/位置/民宿名" v-model="props.search" id="search" />
    <!-- 搜索建议 -->
    <div class="hot-suggest">
      <div
        v-for="item in props.hotSuggests"
        :key="item"
        :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }"
      >
        {{ item.tagText.text }}
      </div>
    </div>
    <!-- 搜索按钮 -->
    <button>搜索</button>
    <!-- 房间信息 -->
  </div>
</template>
<script setup>
import { ref, watch, computed, defineProps } from 'vue'

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

// 定义props
const props = defineProps({
  hotSuggests: {
    type: Array,
    default: () => [],
  },
  search: {
    type: String,
    default: '',
  },
})
// 点击日期选择器
const startTimeRef = ref(null)
const endTimeRef = ref(null)
// 搜索
const search = ref('')

watch(startTime, (newVal, oldVal) => {
  endTime.value = dayjs(newVal).add(1, 'day')
})
</script>
<style scoped lang="scss">
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
  margin-left: 30px;

  div {
    text-align: left;
    // border: 1px solid #999;
    flex: 1;
  }
  // 入住时间内容
  .date-content {
    font-size: 18px;
    font-weight: 500;
  }
}

#price {
  height: auto;
}

#search {
  margin: 10px 30px;
  border: none;
}
// 搜索建议
.hot-suggest {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin: 10px 30px;
  flex-wrap: wrap;
  gap: 10px;
  div {
    text-align: left;
    // border: 1px solid #999;
    padding: 3px 5px;
    border-radius: 50px;
  }
}
// 搜索按钮
button {
  margin: 10px 30px;
  padding: 5px 10px;
  border: none;
  height: 35px;
  border-radius: 50px;
  background-color: var(--primary-color);
  color: #fff;
  width: 80%;
}
</style>
