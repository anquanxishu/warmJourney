import dayjs from 'dayjs'
const now = new Date()
console.log(now.getTime())
const startTime = dayjs(1785234481131).format('YYYY-MM-DD')
console.log(startTime)
const endTime = dayjs(now.getTime()).add(10, 'day').format('YYYY-MM-DD')
console.log(endTime - startTime)
console.log(dayjs(endTime).diff(dayjs(startTime), 'day'))
