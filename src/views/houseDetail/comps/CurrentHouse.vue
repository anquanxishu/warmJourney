<template>
  <div class="currentHouse">
    <h3>当前房源</h3>
    <div class="container">
      <div class="pic">
        <img :src="currentHouse.defaultPictureURL" alt="" />
        <div class="text">当前房源</div>
      </div>
      <div class="info">
        <div>
          <div>{{ currentHouse.houseName }}</div>
          <div class="font12">{{ currentHouse.houseSummary }}</div>
        </div>
        <div class="item-end">
          <div>
            <span class="span1">{{ currentHouse.productPrice }}</span>
            <span class="span2">￥</span>
            <span class="span3">{{ currentHouse.finalPrice }}</span>
            <span class="span4">{{ currentHouse.priceMark }}</span>
          </div>
          <div>
            <div class="discount">
              已省￥{{ currentHouse.productPrice.replace(/[^\d.]/g, '') - currentHouse.finalPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from 'vue'
const props = defineProps({
  currentHouse: {
    type: Object,
    default: () => ({}),
  },
})
const currentHouse = computed(() => props.currentHouse)
</script>
<style scoped lang="scss">
.currentHouse {
  padding: 20px;
  margin: 10px 0;
  background-color: #fff;
  .container {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    .pic {
      position: relative;
      width: 75px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
      .text {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: #fff;
        padding: 0 auto;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      .font12 {
        font-size: 12px;
        color: #3e3d3d;
      }
      .item-end {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .span1 {
          font-size: 10px;
          color: #3e3d3d;
          text-decoration: line-through;
        }
        .span2 {
          font-size: 10px;
          color: var(--primary-color);
        }
        .span3 {
          font-size: 16px;
          color: var(--primary-color);
        }
        .span4 {
          font-size: 10px;
          color: #3e3d3d;
        }
        .discount {
          display: flex;
          margin-left: auto;
          width: 50px;
          font-size: 10px;
          background-color: rgba(11, 211, 242, 0.996);
          border-radius: 5px;
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>
