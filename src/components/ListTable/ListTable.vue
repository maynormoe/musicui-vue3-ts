<template>
  <div v-for="(item, index) in officialListData" :key="index" class="listTable">
    <div class="left">
      <div class="rankCover">
        <img :src="item.coverImgUrl" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="OrankList">
        <div
          v-for="(item, index) in rankDetailData.slice(0, 4)[index].tracks"
          :key="index"
          class="OrankListItem"
        >
          <span class="rankNum">{{ index + 1 }}</span>
          <span>{{ item.first }}</span>
          <span class="author">作者：{{ item.second }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  rankDetailData: {
    type: Object as PropType<any>,
    required: true,
  },
  officialListData: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.listTable {
  display: flex;
  align-items: center;

  .left {
    .rankCover {
      width: 27.678vmin;
      height: 27.678vmin;
      padding: 4.655vmin;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2.655vmin;
      }
    }
  }

  .right {
    .OrankList {
      width: 109.655vmin;
      height: 27vmin;

      .OrankListItem {
        box-sizing: content-box;
        height: 5vmin;
        width: 100%;
        margin: 1.85vmin 0;
        display: flex;
        align-items: center;
        border-radius: 1vmin;
        background: #f5f5f5;
        position: relative;

        &:hover {
          background: #f3cccc;
        }

        span {
          font-size: 2.355vmin;
          color: #696969;
          cursor: pointer;
          .hover();
        }

        .author {
          position: absolute;
          right: 10vmin;
          color: #696969;
          .hover();
        }

        .rankNum {
          padding: 2vmin;
        }
      }
    }
  }
}

.hover() {
  &:hover {
    color: #ec4141;
  }
}
</style>