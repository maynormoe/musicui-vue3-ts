<template>
  <el-carousel :interval="4000" height="35.9555vmin" type="card">
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
  padding: 2.745vmin;

  .el-carousel__item {
    border-radius: 4.445vmin;
  }
}
</style>