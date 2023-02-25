<template>
  <div class="songList">
    <div v-for="(item, index) in PrecommendData" :key="index" class="songListItem" @click="clickSongListItem">
      <div class="songCover">
        <img :src="item.coverImgUrl || item.picUrl" alt="">
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

const clickSongListItem = () => {

}

</script>

<style lang="less" scoped>
.songList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .songListItem {
    width: 30.855vmin;
    height: 30.855vmin;
    padding: 4vmin;
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