<template>
  <div class="songList">
    <div v-for="(item, index) in PrecommendData" :key="index" class="songListItem">
      <div class="songCover">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="songTitle">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {inject} from "vue";

const PrecommendData = inject<string>('PrecommendData');

</script>

<style lang="less" scoped>
.songList {
  .songListItem {
    width: 30.855vmin;
    height: 30.855vmin;
    padding: 3vmin;
    cursor: pointer;
    overflow: hidden;

    .songCover {
      img {
        width: 100%;
        height: 100%;
        border-radius: 3vmin;
      }
    }

    .songTitle {
      width: 100%;
      height: 5vmin;
      font-size: 2.535vmin;
      line-height: 5vmin;
    }
  }
}
</style>