<template>
  <div class="houseFacility">
    <h3>房屋设施</h3>
    <template v-for="groupId in houseFacility.facilitySort" :key="groupId">
      <div
        class="container"
        v-for="item2 in houseFacility.houseFacilitys.filter((item) => item.groupId === groupId)"
        :key="item2.groupId"
      >
        <div class="left">
          <img :src="item2.icon" alt="" />
          <div>{{ item2.groupName }}</div>
        </div>
        <div class="right">
          <div class="item" v-for="facility in item2.facilitys.slice(0, 4)" :key="facility.name">
            <img src="@/assets/img/detail/icon_check.png" alt="" />
            {{ facility.name }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref, defineProps, computed } from 'vue'
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => {},
  },
})
</script>
<style scoped lang="scss">
.houseFacility {
  padding: 20px 20px 10px 20px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
  .left {
    flex: 1;
    font-size: 14px;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .right {
    flex: 4;
    margin-left: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
