<!--  <div class="headerBar">-->
<!--    <HeaderBar></HeaderBar>-->
<!--  </div>-->
<template>
  <div class="layout">
    <el-container>
      <el-header>
        <HeaderBar></HeaderBar>
      </el-header>
      <el-container>
        <el-aside>
          <Menu></Menu>
        </el-aside>
        <el-main>
          <RouterView :key="$route.fullPath" class="routerView"></RouterView>
        </el-main>
      </el-container>
    </el-container>
    <div class="footer">
      <MusicController></MusicController>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";
import Menu from "@/components/Menu/Menu.vue";
import MusicController from "@/components/MusicController/MusicController.vue";
</script>

<style lang="less" scoped>
.el-header {
  background-color: #ec4141;
  height: 9vmin !important;
  padding: 0;
  margin: 0;
  z-index: 100;
}

.el-aside {
  border-right: 1px solid #ccc;
  height: 76.55vmin;
  width: 40vmin;
}

.el-main {
  margin: 0;
  padding: 0;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>