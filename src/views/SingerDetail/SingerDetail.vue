<template>
  <div class="singerDetailContainer">
    <div class="singerDetail">
      <div v-if="singerDetailData" class="singerInfo">
        <div class="singerCover">
          <img :src="singerDetailData.cover" alt="" />
        </div>
        <div class="singerInfoRight">
          <div class="singerName">
            <span>{{ singerDetailData.name }}</span>
          </div>
          <div class="buttons">
            <div class="buttonsItem">
              <el-button :icon="Like" round>收藏</el-button>
            </div>
            <div class="buttonsItem">
              <el-button :icon="Link" round>关于歌手</el-button>
            </div>
          </div>
          <div class="singerInfoCount">
            <span>单曲数：{{ singerDetailData.musicSize }}</span>
            <span>专辑数：{{ singerDetailData.albumSize }}</span>
            <span>MV数量：{{ singerDetailData.mvSize }}</span>
          </div>
        </div>
      </div>
      <div class="singerDetailBarContainer">
        <SingerDetailBar
          :singerAlbumData="singerAlbumData"
          :singerDetailData="singerDetailData"
          :singerMvData="singerMvData"
          :singerTopData="singerTopData"
          @bottomLoad="bottomLoad"
        ></SingerDetailBar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Like, Link } from "@icon-park/vue-next";
import SingerDetailBar from "@/components/SingerDetailBar/SingerDetailBar.vue";
import { onMounted, provide, ref } from "vue";
import request from "@/network/request";
import { useRoute } from "vue-router";

const route = useRoute();

const currentPage = ref<number>(1);

const singerDetailData = ref<any[] | undefined | null>(null);

const singerAlbumData = ref<any[]>([]);

const isMore = ref<boolean>(false);

const getSingerAlbum = async () => {
  let res: any = await request.get("/artist/album", {
    params: {
      id: route.params.id,
      limit: 24,
      offset: (currentPage.value - 1) * 24,
    },
  });
  console.log(res);
  // singerAlbumData.value = res.hotAlbums;
  res.hotAlbums.forEach((item: Array<any>, index: number) => {
    singerAlbumData.value.push(item);
  });
  isMore.value = res.more;
};

provide("PrecommendData", singerAlbumData);

const getSingerDetail = async () => {
  let res: any = await request.get("/artist/detail", {
    params: {
      id: route.params.id,
    },
  });
  console.log(res.data.artist);
  singerDetailData.value = res.data.artist;
};

const singerTopData = ref<any[] | undefined | null>(null);

const getSingerTop = async () => {
  let res: any = await request.get("/artist/top/song", {
    params: {
      id: route.params.id,
    },
  });
  console.log(res);
  singerTopData.value = res.songs;
  // 转换时长
  res.songs.forEach((item: Array<any>, index: number) => {
    const durationInMilliseconds = res.songs[index].dt;
    const durationInSeconds = Math.floor(durationInMilliseconds / 1000);

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    res.songs[index].dt = [
      ("0" + hours).slice(-2),
      ("0" + minutes).slice(-2),
      ("0" + seconds).slice(-2),
    ].join(":");
  });
};

const singerMvData = ref<any[]>([]);

const getSingerMv = async () => {
  let res: any = await request.get("/artist/mv", {
    params: {
      id: route.params.id,
    },
  });
  console.log(res.mvs);
  singerMvData.value = res.mvs;
  res.mvs.forEach((item: Array<any>, index: number) => {
    const durationInMilliseconds = res.mvs[index].duration;
    const durationInSeconds = Math.floor(durationInMilliseconds / 1000);

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    res.mvs[index].duration = [
      ("0" + hours).slice(-2),
      ("0" + minutes).slice(-2),
      ("0" + seconds).slice(-2),
    ].join(":");
  });
};

const bottomLoad = () => {
  if (isMore.value) {
    if (singerAlbumData.value.length !== 0) {
      currentPage.value += 1;
      getSingerAlbum();
    }
  }
};

onMounted(() => {
  getSingerDetail();
  getSingerAlbum();
  getSingerTop();
  getSingerMv();
});
</script>

<style lang="less" scoped>
.singerDetailContainer {
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: calc(100vh - 22vmin);
  background: white;
  overflow: scroll;

  .singerDetail {
    .singerInfo {
      width: 100%;
      height: 38.355vmin;
      display: flex;
      align-items: center;

      .singerCover {
        margin: 0 3vmin 0 6.5vmin;
        width: 28.995vmin;
        height: 28.995vmin;
        border-radius: 2.5vmin;

        img {
          width: 100%;
          height: 100%;
          border-radius: 2.5vmin;
        }
      }

      .singerInfoRight {
        width: 108.95vmin;
        height: 28.995vmin;

        .singerName {
          display: flex;
          align-items: center;
          margin: 1.35vmin 1.35vmin 0.65vmin;
          border-radius: 1vmin;

          span {
            font-size: 4vmin;
          }
        }

        .buttons {
          margin: 0 1vmin 1vmin 1vmin;
          display: flex;

          .buttonsItem {
            margin-top: 3vmin;
            margin-left: 1vmin;

            :deep(.el-button) {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 13vmin;
              height: 5.5vmin;
              --el-button-hover-text-color: #ec4141 !important;
              --el-button-hover-border-color: #ec4141 !important;
              --el-button-hover-bg-color: #fdd6d6 !important;

              &:hover {
                border-color: #e13e3e;
                background: #fdd0d0;
                color: #ec4141;
              }

              &:active {
                border-color: #e13e3e;
                background: #fdd0d0;
                color: #ec4141;
              }

              span {
                font-weight: bold;
                font-size: 2vmin;
              }
            }
          }
        }

        .singerInfoCount {
          display: flex;
          align-items: center;
          font-size: 2vmin;
          color: #6b6b6b;

          span {
            font-size: 2vmin;
            margin-top: 6.55vmin;
            margin-left: 2vmin;
          }
        }
      }
    }
  }
}
</style>