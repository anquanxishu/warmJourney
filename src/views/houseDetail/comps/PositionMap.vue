<template>
  <div class="positionMap">
    <h3>位置信息</h3>
    <img :src="src" alt="" />
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, computed } from 'vue'
// 定义props
const props = defineProps({
  positionModule: {
    type: Object,
    default: () => ({}),
  },
})
const longitude = computed(() => props.positionModule?.longitude)
const latitude = computed(() => props.positionModule?.latitude)
const src = computed(
  () => `https://restapi.amap.com/v3/staticmap?
location=${longitude.value},${latitude.value}&zoom=10&size=750*300&markers=mid,,A:${longitude.value},${latitude.value}&
key=36710683e02c8bdd226450911abbaec3`,
)
</script>
<style scoped lang="scss">
.positionMap {
  width: 100%;
  padding: 20px 20px 10px 20px;
}
img {
  width: 90%;
  margin: 10px 0;
}
</style>
