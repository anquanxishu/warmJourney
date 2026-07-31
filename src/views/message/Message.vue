<template>
  <div class="message">
    <h1>message</h1>
    <div v-for="item in arr" :key="item.name">{{ item.name }}: {{ item.age }}</div>
  </div>
  <div>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const person = ref({
  name: '张三',
  age: 18,
})
const student = {
  name: 'lisi',
  age: 25,
}
const arr = ref([])
arr.value.push(person.value)
arr.value.push(student)

setTimeout(() => {
  //   arr.value[0].age = 20
  //   arr.value[1].age = 20
  // person.value.age = 20
  student.age = 20
  student.name = '李四'
}, 1000)

const changeAge = () => {
  person.value.age++
  student.age++
  student.name = '王五'
}
</script>
<style scoped lang="scss">
.message {
  padding: 20px;
  font-size: 24px;
}
</style>
