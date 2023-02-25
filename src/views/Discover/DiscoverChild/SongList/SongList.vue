<template>
  <div class="songListContainer">
    <div class="highQuality">
      <HighQuality :highQualityData="highQualityData"></HighQuality>
    </div>
    <div class="musicListIndex">
      <div class="musicListNavBar">
        <div class="left">
          <SoftBox :currentTagData="currentTagData" :sortListData="sortListData"
                   @clickSortItem="clickSortItem"></SoftBox>
        </div>
        <div class="right">
          <SecondNavBar :currentTagData="currentTagData" :hotTagData="hotTagData"
                        @clicksNavBarItem="clicksNavBarItem"></SecondNavBar>
        </div>
      </div>
      <div class="musicList"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import HighQuality from "@/components/highQualityCard/HighQuality.vue";

import api from "@/api/api";
import {ref} from "vue";
import SecondNavBar from "@/components/SecondNavBar/SecondNavBar.vue";
import SoftBox from "@/components/SortBox/SortBox.vue";

const highQualityData = ref('')

const currentTagData = ref('')

const hotTagData = ref('')

const sortListData = ref('')

api.getHighQuality().then(res => {
  console.log(res.playlists)
  highQualityData.value = res.playlists
}).catch(error => {
  console.log(error)
})

api.getHotTag().then(res => {
  console.log(res.tags)
  currentTagData.value = res.tags[0]
  hotTagData.value = res.tags
}).catch(error => {
  console.log(error)
})

api.getSortList().then(res => {
  console.log(res.sub)
  sortListData.value = res.sub
}).catch(error => {
  console.log(error)
})

const clickSortItem = (item: any) => {
  currentTagData.value = item
}

const clicksNavBarItem = (index: number) => {
  const selectedTag = hotTagData.value[index];
  currentTagData.value = selectedTag;
}
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
  }
}
</style>