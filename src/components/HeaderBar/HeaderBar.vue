<template>
  <div class="headBar">
    <div class="leftLogo">
      <img src="src/assets/logo/logo.png">
    </div>
    <div class="center">
      <div class="buttons">
        <svg-icon iconName="icon-fanhui" class="icon-fanhui" @click="router.go(1)"></svg-icon>
        <svg-icon iconName="icon-jinru" class="icon-jinru" @click="router.go(-1)"></svg-icon>
      </div>
      <div class="search">
          <el-input v-model="input" placeholder="请输入关键词" class="searchInput"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import router from "@/router/router";

import { ref } from 'vue'

const input = ref('')
</script>

<style lang="less" scoped>
.headBar {
  width: 100%;
  height: 9vmin;
  background: #ec4141;
  display: flex;
  align-items: center;
  .leftLogo {
    margin-left: 2.55vmin;
    margin-right: 2.25vmin;
    img {
      height: 5vmin;
    }
  }
  .center {
    flex: 1;
    display: flex;
    margin-left: 4vmin;
    .search {
      .searchInput {
        width: 30vmin;
      }
    }

    .buttons {
      font-size: 3.335vmin;
      .icon-fanhui {
        margin-right: 1vmin;
        background: #EAECEF;
        border-radius: 50%;
      }
      .icon-jinru {
        margin-right: 2vmin;
        background: #EAECEF;
        border-radius: 50%;
      }
    }
  }
}

</style>