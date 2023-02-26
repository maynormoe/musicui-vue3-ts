<template>
  <div class="highQualityContainer">
    <div
      v-for="(item, index) in props.highQualityData"
      :key="index"
      class="highQuality"
    >
      <img :src="item.coverImgUrl" class="backgroundImg" />
      <div class="cover">
        <img :src="item.coverImgUrl" />
      </div>
      <div class="title">
        <span>{{ item.name }}</span>
      </div>
      <div class="boutique">
        <div class="icon">
          <thumbs-up
            fill="#FFD700"
            size="4vmin"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="outline"
          />
          <span>精品歌单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

import { ThumbsUp } from "@icon-park/vue-next";

const props = defineProps({
  highQualityData: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.highQualityContainer {
  display: flex;
  justify-content: center;
  overflow: hidden;

  .highQuality {
    width: 146.98vmin;
    height: 24.55vmin;
    position: relative;

    .backgroundImg {
      width: 100%;
      border-radius: 2.465vmin;
      z-index: -1;
      transform: translateY(-80px);
      filter: blur(30px) brightness(70%);
      opacity: 0.7;
      display: flex;
      justify-content: center;
    }

    .cover {
      width: 20vmin;
      height: 20vmin;
      position: absolute;
      top: 2.35vmin;
      left: 1.89vmin;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2vmin;
      }
    }

    .title {
      position: absolute;
      //top: 100.65px;
      //left: 182.95px;
      top: 11.35vmin;
      left: 22.55vmin;
      cursor: pointer;
      padding: 2vmin;
    }

    .boutique {
      width: 14vmin;
      height: 4.1333vmin;
      border: 2px solid #ffd700;
      position: absolute;
      top: 4vmin;
      left: 22.55vmin;
      display: flex;
      justify-content: center;
      margin: 2vmin;
      border-radius: 3vmin;
      cursor: pointer;

      .icon {
        display: flex;

        span {
          line-height: 4.1333vmin;
          font-weight: bold;
          color: gold;
          font-size: 2vmin;
        }
      }
    }
  }
}
</style>