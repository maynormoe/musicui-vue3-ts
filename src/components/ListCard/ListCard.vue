<template>
  <div
    v-if="PrecommendData"
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disable"
    :infinite-scroll-distance="100"
    :infinite-scroll-immediate="false"
    class="songList"
  >
    <div
      v-for="(item, index) in PrecommendData"
      :key="index"
      class="songListItem"
      @click="clickSongListItem(item.id)"
    >
      <div class="songCover">
        <img :src="item.coverImgUrl || item.picUrl" alt="" />
      </div>
      <div class="songTitle">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
  <p v-show="isLoad" style="text-align: center">正在努力加载中...</p>
  <p v-show="isNoMore" style="text-align: center">真的没有东西了...</p>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from "vue";

const PrecommendData: any | undefined = inject<any[]>("PrecommendData");

const emits = defineEmits(["bottomLoad", "clickSongListItem"]);

const disable = ref<boolean>(false);

const isLoad = ref<boolean>(false);

const isNoMore = ref(false);

const clickSongListItem = (id: number) => {
  emits("clickSongListItem", id);
};

const load = () => {
  console.log("滑动到底部");
  emits("bottomLoad");
};
watch(PrecommendData, () => {
  if (isLoad) {
    if (PrecommendData.length === 0) {
      disable.value = false;
      isLoad.value = false;
      isNoMore.value = true;
    } else {
      disable.value = true;
      isNoMore.value = false;
    }
  }
});
</script>

<style lang="less" scoped>
.songList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;

  .songListItem {
    width: 25%;
    height: 25%;
    box-sizing: border-box;
    padding: 5vmin 4vmin 0 3vmin;
    cursor: pointer;

    .songCover {
      img {
        width: 100%;
        height: 100%;
        border-radius: 3vmin;
      }
    }

    .songTitle {
      width: 100%;
      height: 10vmin;
      font-size: 2vmin;
    }
  }
}
</style>