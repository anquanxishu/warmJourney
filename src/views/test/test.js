// 定义变量维度
let number = 2

function createArr() {
  for (let i = 0; i < number; i++) {
    const arr = []
    for (let j = 0; j < 3; j++) {
      arr.push(j)
    }
  }

  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(i)
  }
  const arr2 = []
  for (let i = 0; i < 3; i++) {
    arr2.push(arr)
  }
  const arr3 = []
  for (let i = 0; i < 3; i++) {
    arr3.push(arr2)
  }
  return arr3
}
const arr = createArr()
console.log(arr)
