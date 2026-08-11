<template>
  <div class="searchHome">
    <!-- 顶部搜索 -->
    <SearchBox :query="query" />
    <!-- 房屋展示 -->
    <HouseShow />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchBox from '@/views/home/components/SearchBox.vue'
import HouseShow from '@/components/HouseShow.vue'
const router = useRouter()
// 搜索
const search = ref('')
// 拿到当前路由的参数
const query = router.currentRoute.value.query
// 测试参数
// query = {
//   endDate: "08-02",
//   endTime: "2026-08-02",
//   night: "1",
//   person: "不限",
//   price: "不限",
//   search: "",
//   startDate: "08-01",
//   startTime: "2026-08-01"
// }

const currentCity = ref('广州')
</script>
<style scoped lang="scss">
.searchHome {
  height: 100%;
  //
}
</style>
