<template>
  <div
    v-for="(item, index) in videoCardData"
    v-if="videoCardData"
    class="videoCard"
  >
    <div class="videoCover">
      <img :src="item.imgurl" alt="" />
      <div class="playIcon">
        <play-two
          :strokeWidth="2"
          fill="#ffffff"
          size="32"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="outline"
        />
        <span>{{ item.playCount }}</span>
      </div>
      <div class="playTime">
        <span>{{ item.duration }}</span>
      </div>
      <div class="videoPublishTime">
        <span>{{ item.publishTime }}</span>
      </div>
    </div>
    <div class="videoTitle">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlayTwo } from "@icon-park/vue-next";

defineProps({
  videoCardData: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.videoCard {
  cursor: pointer;
  margin: 1.5vmin;
  width: 25%;
  height: 25vmin;

  .videoCover {
    width: 100%;
    height: 20.65vmin;
    position: relative;

    img {
      border-radius: 2vmin;
      width: 100%;
      height: 100%;
    }

    .playIcon {
      margin: 1vmin;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;

      span {
        color: white;
      }
    }

    .videoPublishTime {
      margin: 1vmin;
      position: absolute;
      left: 0;
      bottom: 0;

      span {
        color: white;
      }
    }

    .playTime {
      margin: 1vmin;
      position: absolute;
      right: 0;
      bottom: 0;

      span {
        font-size: 2vmin;
        color: white;
      }
    }
  }

  .videoTitle {
    margin: 1vmin;
    display: flex;
    align-items: center;

    span {
      font-size: 2vmin;
    }
  }
}
</style>