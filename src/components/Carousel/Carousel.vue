<template>
  <div class="precomcommend"></div>
  <el-carousel :interval="4000" height="32.755vmin" type="card">
    <el-carousel-item v-for="(item, index) in carouselList" :key="index">
      <img :src="item.imageUrl" class="carouselImg">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>

import api from "@/api/api";
import {ref} from "vue";

const carouselList = ref('');

api.getCarousel().then((res) => {
  console.log(res.banners)
  carouselList.value = res.banners
})
</script>

<style lang="less" scoped>
.el-carousel {
  padding: 2.755vmin;

  .el-carousel__item {
    width: 71.655vmin;
    border-radius: 3.595vmin;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>