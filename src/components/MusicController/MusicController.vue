<template>
  <div class="musicController">
    <div class="left">
      <div class="playingMusicCover">
        <img alt="" src="/src/assets/img/avatar.png" />
      </div>
      <div class="playingMusicName">
        <span>Gold Steps</span>
      </div>
    </div>
    <div class="center">
      <div class="playingIcon">
        <div class="playing">
          <play-one
            fill="#000000"
            size="56"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup>
import { PlayOne } from "@icon-park/vue-next";
</script>

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
    display: flex;
    align-items: center;
    flex: 1;

    .playingMusicCover {
      margin-left: 5vmin;
      border-radius: 2vmin;
      width: 8vmin;
      height: 8vmin;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2vmin;
      }
    }

    .playingMusicName {
      margin: 2vmin;

      span {
        font-size: 2.55vmin;
      }
    }
  }

  .center {
    flex: 1;
    width: 10vmin;
    height: 10vmin;

    .playingIcon {
      .playing {
      }
    }
  }

  .right {
    flex: 1;
    width: 3vmin;
    height: 10vmin;
  }
}
</style>