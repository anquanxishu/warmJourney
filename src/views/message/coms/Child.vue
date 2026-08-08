<template>
  <div class="child">
    <h1>child</h1>
    <div>同步互传：<input type="text" v-model.number="age" /></div>
    <div>{{ $attrs }}</div>
    <div>{{ name1 }}</div>
    <div>{{ age }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, computed, defineEmits, watch, defineModel, inject } from 'vue'
const name1 = inject('name')
const age = inject('age')
const [name, modifiers] = defineModel({
  set(val) {
    if (modifiers.capitalize) {
      console.log('test')
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
    return val
  },
})
console.log(modifiers)
</script>
<style scoped lang="scss">
.child {
  //   height: 500px;
  border: 1px solid #000;
}
</style>
