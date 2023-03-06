<template>
  <div class="musicController">
    <div class="left">
      <div class="playingMusicCover">
        <img alt="" src="/src/assets/img/avatar.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.musicController {
  background: white;
  z-index: 100;
  width: 100%;
  height: 12.85vmin;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;

  .left {
    z-index: 200;
    width: 10vmin;

    .playingMusicCover {
      margin-left: 5vmin;
      border-radius: 2vmin;
      width: 10vmin;
      height: 10vmin;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2vmin;
      }
    }
  }
}
</style>
