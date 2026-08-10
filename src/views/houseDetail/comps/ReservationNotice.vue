<template>
  <div class="reservationNotice">
    <h3>预订须知</h3>
    <div class="orderules">
      <template v-for="item in orderRules" :key="item.title">
        <div v-if="item.introduction" class="rule-item">
          <div class="left">{{ item.title }}</div>
          <div class="right">{{ item.introduction }}</div>
        </div>
      </template>

      <div class="rule-item">
        <div class="left">{{ checkInRules[0].title }}</div>
        <div class="right checkin-items">
          <div class="item" v-for="item in checkInRules[0].items" :key="item.introduction">
            <img src="@/assets/img/detail/icon_check.png" alt="" />
            {{ item.introduction }}
          </div>
        </div>
      </div>
      <!-- 入住须知 -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, computed } from 'vue'
const props = defineProps({
  rulesModule: {
    type: Object,
    default: () => ({}),
  },
})
const cancelRules = computed(() => props.rulesModule.cancelRules)
const orderRules = computed(() => props.rulesModule.orderRules)
const checkInRules = computed(() => props.rulesModule.checkInRules)
const checkinOtherInfo = computed(() => props.rulesModule.checkinOtherInfo)
</script>
<style scoped lang="scss">
.reservationNotice {
  padding: 20px;
  margin: 10px 0;
  background-color: #fff;
  //   预订须知
  .orderules {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .rule-item {
      display: flex;
      flex-direction: row;
      gap: 10px;
      font-size: 12px;
      .right {
        flex: 1;
      }
      .left {
        flex: 0 0 100px;
      }
    }
  }
  //   入住须知
  .checkin-items {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .item {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      margin: auto 0;
      img {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
  }
}
</style>
