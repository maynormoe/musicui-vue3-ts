<template>
  <div class="songListContainer">
    <div class="highQuality">
      <HighQuality :highQualityData="highQualityData"></HighQuality>
    </div>
    <div class="musicListIndex">
      <div class="musicListNavBar">
        <div class="left">
          <SoftBox
            :currentTagData="currentTagData"
            :sortListData="sortListData"
            @clickSortItem="clickSortItem"
          ></SoftBox>
        </div>
        <div class="right">
          <SecondNavBar
            :currentTagData="currentTagData"
            :hotTagData="hotTagData"
            @clicksNavBarItem="clicksNavBarItem"
          ></SecondNavBar>
        </div>
      </div>
      <div class="musicList">
        <ListCard @clickSongListItem="goMusicListDetail"></ListCard>
      </div>
      <div v-if="songListData" class="page">
        <el-pagination
          v-model:current-page="currentPageData"
          :total="100"
          background
          layout="prev, pager, next "
          @current-change="pageChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HighQuality from "@/components/highQualityCard/HighQuality.vue";

import request from "@/network/request";

import api from "@/api/api";
import { onMounted, provide, ref } from "vue";
import SecondNavBar from "@/components/SecondNavBar/SecondNavBar.vue";
import SoftBox from "@/components/SortBox/SortBox.vue";
import ListCard from "@/components/ListCard/ListCard.vue";
import router from "@/router/router";

import { useMusicListId } from "@/stores/MusicListId/musiclistid";

const store = useMusicListId();

const highQualityData = ref("");

const currentTagData = ref("");

const hotTagData = ref("");

const sortListData = ref("");

const songListData: any = ref("");

const currentPageData = ref(1);

provide("PrecommendData", songListData);

api
  .getHighQuality()
  .then((res) => {
    console.log(res.playlists);
    highQualityData.value = res.playlists;
  })
  .catch((error) => {
    console.log(error);
  });

api
  .getHotTag()
  .then((res) => {
    console.log(res.tags);
    currentTagData.value = res.tags[0];
    hotTagData.value = res.tags;
  })
  .catch((error) => {
    console.log(error);
  });

api
  .getSortList()
  .then((res) => {
    console.log(res.sub);
    sortListData.value = res.sub;
  })
  .catch((error) => {
    console.log(error);
  });

const getSongList = () => {
  request
    .get("/top/playlist", {
      params: {
        cat: currentTagData.value,
        offset: (currentPageData.value - 1) * 40,
        limit: 40,
      },
    })
    .then((res) => {
      console.log(res.playlists);
      songListData.value = res.playlists;
    })
    .catch((error) => {
      console.log(error);
    });
};
getSongList();
const clickSortItem = (item: any) => {
  currentTagData.value = item;
  getSongList();
};

const clicksNavBarItem = (index: number) => {
  const selectedTag = hotTagData.value[index];
  currentTagData.value = selectedTag;
  getSongList();
};

const pageChange = (page: number) => {
  console.log(page, "====================");
  currentPageData.value = page;
  getSongList();
};
const goMusicListDetail = (id: number) => {
  router.push({ name: "musicListDetail", params: { id } });
  console.log(id);
  store.$patch({
    musicListId: id,
  });
};
onMounted(() => {
  getSongList();
});
</script>

<style lang="less" scoped>
.songListContainer {
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;

  .highQuality {
    padding: 3vmin;
  }

  .musicListIndex {
    .musicListNavBar {
      display: flex;
      position: relative;

      .left {
        float: left;
      }

      .right {
        float: right;
        position: absolute;
        left: 50vmin;
        bottom: 0;
      }
    }

    .page {
      width: 100%;
      height: 5vmin;
      margin: 5vmin;
      box-sizing: content-box;
      display: flex;
      align-items: center;
      justify-content: center;

      .el-pagination {
        :deep(.number) {
          border-radius: 1vmin;
          background: #ec8282;
        }
      }
    }
  }
}
</style>