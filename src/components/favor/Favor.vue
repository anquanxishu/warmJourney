<template>
  <div class="favorImg" @click.stop="handleClick">
    <img
      v-if="favorStore.isFavor(houseItem.data.houseId)"
      src="@/assets/img/favor/ic_public_favor_filled.svg"
      alt=""
    />
    <img
      v-if="!favorStore.isFavor(houseItem.data.houseId)"
      src="@/assets/img/favor/ic_public_favor_white.svg"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFavorListStore } from '@/stores/favorList.js'
const favorStore = useFavorListStore()
const props = defineProps({
  houseItem: {
    type: Object,
    default: () => ({}),
  },
})
const handleClick = () => {
  favorStore.toggleFavorite(props.houseItem)
}
</script>

<style scoped lang="scss">
.favorImg {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
