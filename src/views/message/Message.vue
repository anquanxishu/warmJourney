<template>
  <div class="message">
    <h1>正在开发中，敬请期待！</h1>
    <p ref="countRef">当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
import { ref, version, nextTick, onUpdated } from 'vue'
const count = ref(0)
const countRef = ref(null)
const increment = () => {
  count.value++
  console.log('+++')
  console.log(countRef.value.textContent)
  console.log(countRef.value)
  console.log(countRef.value.innerHTML)
}
const decrement = async () => {
  count.value--
  console.log('---')
  await nextTick(() => {
    console.log(countRef.value.textContent)
    console.log(countRef.value.innerHTML)
  })
  console.log('decrement', countRef.value.innerHTML)
}

const reset = () => {
  count.value = 0
  console.log('reset')
  console.log(countRef.value.textContent)
  console.log(countRef.value)
  console.log(countRef.value.innerHTML)
}
onUpdated(() => {
  if (count.value < 10) {
    setTimeout(() => {
      count.value++
    }, 1000)
  } else {
    console.log('over heheieie')
  }
})
</script>

<style scoped lang="scss"></style>
