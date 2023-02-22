<template>
  <div class="title">
    <span>{{ props.title }}</span>
  </div>
  <div class="recommendSongList">
    <ListCard class="listCard"></ListCard>
  </div>
</template>

<script lang="ts" setup>
import ListCard from "@/components/ListCard/ListCard.vue";

const props = defineProps({
  title: {
    type: String
  }
});
</script>

<style lang="less" scoped>
.title {
  margin: 0 3vmin;

  span {
    font-size: 3.355vmin;
    font-weight: bold;
  }
}

.recommendSongList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .listCard {
    flex: 1;
  }
}
</style>