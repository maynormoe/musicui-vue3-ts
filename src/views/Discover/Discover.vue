<template>
  <div class="discover">
    <div class="navBar">
      <NavBar :navBarData="navBarData" @clickBarItem="clickBarItem"></NavBar>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar/NavBar.vue";
import {onMounted, ref} from "vue";
import router from "@/router/router";
const navBarData = ref([{
  name: '个性推荐',path: '/discover/personrecommend'
},
  {
    name:'歌单',path: '/discover/songlist'
  },
  {
    name: "排行榜",path: '/discover/ranking'
  },
  {
    name: "歌手",path: '/discover/songer'
  }])
onMounted(() => {
  console.log("Mounted")
})
const clickBarItem = (path: any) => {
  router.push(path)
}
</script>

<style lang="less" scoped>

</style>