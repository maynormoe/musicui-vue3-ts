<template>
  <div class="title">
    <span>{{ props.title }}</span>
  </div>
  <div class="recommendSongList">
    <ListCard
      class="listCard"
      @clickSongListItem="goMusicListDetail"
    ></ListCard>
  </div>
</template>

<script lang="ts" setup>
import ListCard from "@/components/ListCard/ListCard.vue";
import router from "@/router/router";

const props = defineProps({
  title: {
    type: String,
  },
});

const goMusicListDetail = (id: number) => {
  router.push({ name: "musicListDetail", params: { id } });
  console.log(id);
  // store.$patch({
  //   musicListId: id,
  // });
};
</script>

<style lang="less" scoped>
.title {
  margin: 0 3vmin;

  span {
    font-size: 3.355vmin;
    font-weight: bold;
  }
}
</style>