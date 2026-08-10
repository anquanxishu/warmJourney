<!-- 父子通信 props 校验 写法  kebab-case camelCase -->

<template>
  <div class="message">
    <div class="message-title">
      message

      <div>父传子：<input type="text" v-model="age" placeholder="请输入年龄" /></div>
    </div>

    <Child v-model.capitalize="name" class="child" id="child1" @click="click" />
    <button @click="click">点击播放</button>
  </div>
</template>
<script setup>
import { ref, provide } from 'vue'
import Child from './coms/Child.vue'
const name = ref('')
const age = ref(18)
provide('name', name)
provide('age', age)
const click = () => {
  console.log('click----------')
  play()
}
function play() {
  console.log('play----------')
}

const str = ref('hello vue')
console.log(str.value.split(' '))
</script>
<style scoped lang="scss">
.message-title {
  margin-bottom: 20px;
  border: 1px solid #cb2a2a;
}
.child {
  margin-top: 20px;
  background-color: #f5f5f5;
}
</style>
