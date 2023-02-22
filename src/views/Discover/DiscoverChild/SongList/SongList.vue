<template>
  <div class="songListContainer">
    <div class="highQuality">
      <HighQuality :highQualityData="highQualityData"></HighQuality>
    </div>
    <div class="musicListIndex">
      <div class="musicListNavBar">
        <div class="left">
          <SoftBox></SoftBox>
        </div>
        <div class="right">
          <SecondNavBar></SecondNavBar>
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

api.getHighQuality().then(res => {
  console.log(res.playlists)
  highQualityData.value = res.playlists
}).catch(error => {
  console.log(error)
})
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
}
</style>