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
<!--        <div class="searchIconBox">-->
<!--          <svg-icon iconName="icon-sousuo" class="icon-sousuo"></svg-icon>-->
<!--        </div>-->
<!--          <el-input v-model="input" placeholder="请输入关键词" class="searchInput" @click="showHotCard" />-->
        <div class="SearchInput">
          <el-input
              v-model="input"
              class="w-50 m-2"
              placeholder="请输入关键词"
              :prefix-icon="Search"
              @click="showHotCard"
          />
        </div>

      </div>
      <transition>
        <div class="hotCard" v-if="isShow">
          <SearchPop></SearchPop>
        </div>
      </transition>
    </div>
    <div class="right">
      <div class="user" @click="showLoginCard">
        <div class="avatar">
          <img src="src/assets/img/avatar.png" class="avatarImg">
        </div>
        <div class="unlogin">
          <span>点击登录</span>
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-down">
    <div class="login-card" v-if="isLoginShow">
      <Login></Login>
    </div>
  </transition>

</template>

<script setup lang="ts">

import router from "@/router/router";

import { ref } from 'vue'
import SearchPop from "@/components/SearchPop/SearchPop.vue";
import Login from "@/components/Login/Login.vue";
import { Search } from "@element-plus/icons-vue";


const input = ref('')

const isShow = ref(false)
const isLoginShow = ref(false)


const showHotCard = () => {
  if (isShow.value == false) {
    isShow.value = true
  }
  else {
    isShow.value = false
  }
}

const showLoginCard = () => {
  if (isLoginShow.value == false) {
    isLoginShow.value = true
  }
  else {
    isLoginShow.value = false
  }
}

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
    position: relative;
    .hotCard {
      position: absolute;
      top: 4.65vmin;
      left: 10vmin;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
    .search {
      display: flex;
      align-items: center;
      //.searchIconBox {
      //  display: flex;
      //  align-items: center;
      //  padding: 1vmin;
      //  width: 2vmin;
      //  height: 2vmin;
      //  border-radius: 50%;
      //  font-size: 3vmin;
      //  background: #e13e3e;
      //}
      //icon-sousuo {
      //  font-size: 10vmin;
      //}

      .searchInput {
        padding: 1vmin;
      }
    }
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .buttons {
      font-size: 3.335vmin;
      color: #ebebeb;
      .icon-fanhui {
        margin-right: 1vmin;
        background: #e13e3e;
        border-radius: 50%;
        cursor: pointer;
      }
      .icon-jinru {
        margin-right: 2vmin;
        background: #e13e3e;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .right {
    .user {
      display: flex;
      align-items: center;
      .avatar {
        .avatarImg {
          width: 5.55vmin;
          height: 5.55vmin;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
    .unlogin {
      padding: 0 2vmin;
      span {
        padding: 0 0.5vmin;
        color: white;
        cursor: pointer;
      }
    }
  }
}
.el-button + .el-button {
  margin-left: 8px;
}
.headBar {
  position: relative;
}
.login-card {
  position: absolute;
  top: 30vmin;
  left: 80vmin;
  opacity: 1;
}
.slide-down-enter-active,
.slide-down-leave-active {
   transition: opacity 0.5s;
 }

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
}


</style>