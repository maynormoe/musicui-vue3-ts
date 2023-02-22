<template>
  <div class="menuLeft">
    <el-menu
        active-text-color="#ec4141"
        class="el-menu-vertical-demo"
        router
    >
        <el-menu-item index="/discover">
          <music theme="outline" size="25" fill="#ec4141" class="Icon"/>
          <span slot="title">发现音乐</span>
        </el-menu-item>
        <el-menu-item index="/video">
          <carousel-video theme="outline" size="25" fill="#ec4141" class="Icon"/>
          <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="/dj">
          <fm theme="outline" size="25" fill="#ec4141" class="Icon"/>
          <span slot="title">电台</span>
        </el-menu-item>
        <el-menu-item index="/recommend">
          <thumbs-up theme="outline" size="25" fill="#ec4141" class="Icon"/>
          <span slot="title">每日推荐</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">

import {CarouselVideo, Fm, Music, ThumbsUp} from '@icon-park/vue-next'</script>

<style lang="less" scoped>
.menuLeft {
  width: 39.855vmin;
  height: 100%;
  border-bottom: 1px solid #cccccc;
  background: white;
  position: fixed;
  z-index: 200;

  .el-menu-vertical-demo {
    .el-menu-item {
      &:hover {
        background: #ec4141;
        opacity: 0.1;
      }

      .Icon {
        padding-right: 1vmin;
      }

      span {
        font-family: sans-serif;
        font-size: 2.35vmin;
        font-weight: bold;
      }
    }
  }
}

</style>