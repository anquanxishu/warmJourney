const students = {
  person: [
    { name: '张三', age: 18 },
    { name: '李四', age: 19 },
    { name: '王五', age: 20 },
  ],
  class: [
    { name: '1班', age: 18 },
    { name: '2班', age: 19 },
    { name: '3班', age: 20 },
  ],
}
console.log(Object.keys(students))

const keys = Object.keys(students)
for (const key of keys) {
  console.log(students[key])
}
