<template>
  <div class="pRecommend">
    <div class="carousel">
      <Carousel></Carousel>
    </div>
    <div class="recommendList">
      <RecommendSongList :title="title"></RecommendSongList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from "@/components/Carousel/Carousel.vue";
import RecommendSongList from "@/components/RecommendSongList/RecommendSongList.vue";

import { provide, ref } from "vue";

import api from "@/api/api";

const title = ref("推荐歌单");

const PrecommendData = ref("");

api
  .getPrecommend()
  .then((res) => {
    console.log(res.result);
    PrecommendData.value = res.result;
  })
  .catch((error) => {
    console.log(error);
  });

provide("PrecommendData", PrecommendData);
</script>

<style lang="less" scoped>
.pRecommend {
  width: 100%;
  height: 100%;
  background: white;
}
</style>