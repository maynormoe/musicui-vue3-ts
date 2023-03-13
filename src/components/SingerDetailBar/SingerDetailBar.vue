<template>
  <div class="singerDetailBar">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">
        <div class="album">
          <div class="title">
            <span>热歌Top50</span>
          </div>
          <div class="singerSingTopRank">
            <SingerSingTop :singerTopData="singerTopData"></SingerSingTop>
          </div>
          <div class="title">
            <span>热门专辑</span>
          </div>
          <div class="albumList">
            <div class="hotAlbum">
              <ListCard
                @clickSongListItem="goAlbumDetail"
                @bottom-load="bottomLoad"
              ></ListCard>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="second"></el-tab-pane>
      <el-tab-pane label="歌手详情" name="third">
        <div class="singerIntroContainer">
          <SingerIntroduction
            :singerIntroduction="singerDetailData"
          ></SingerIntroduction>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import ListCard from "@/components/ListCard/ListCard.vue";
import SingerIntroduction from "@/components/SingerIntroduction/SingerIntroduction.vue";
import router from "@/router/router";
import SingerSingTop from "@/components/SingerSingTop/SingerSingTop.vue";

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const props = defineProps({
  singerDetailData: {
    type: Array,
    required: true,
  },
  singerTopData: {
    type: Array,
    required: true,
  },
  singerAlbumData: {
    type: Array,
  },
});

const goAlbumDetail = (id: number) => {
  router.push({ name: "albumdetail", params: { id } });
};

const emits = defineEmits(["bottomLoad"]);

const bottomLoad = () => {
  emits("bottomLoad");
};
</script>

<style lang="less" scoped>
.singerDetailBar {
  :deep(.el-tabs) {
    margin: 0 4.5vmin;

    .el-tabs__nav-wrap::after {
      background: white;
    }

    .el-tabs__item {
      margin-right: 3vmin;
      font-size: 2.15vmin;

      &:hover {
        color: #ec4141;
      }
    }

    .el-tabs__item.is-active {
      color: #ec4141;
      font-size: 2.45vmin;
    }

    .el-tabs__active-bar {
      background: #ec4141;
    }

    .el-tab-pane {
    }
  }
}

.album {
  .title {
    font-size: 2.65vmin;
    margin: 1vmin;

    span {
      color: #8c8c8c;
      border-left: 5px solid #e13e3e;
      border-radius: 0.3vmin;

      &:hover {
        color: #ec4141;
        cursor: pointer;
      }
    }
  }

  .albumList {
    width: 100%;
  }
}
</style>