<template>
  <div class="user">
    <div class="userAvatar">
      <img alt="" src="/src/assets/img/avatar.png" />
    </div>
    <div class="userName">
      <span>用户名</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.user {
  margin: 2vmin;
  width: 30vmin;
  height: 15vmin;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e5e5e5;
    border-radius: 3vmin;
  }

  .userAvatar {
    width: 10vmin;
    height: 10vmin;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .userName {
    margin-left: 2vmin;
    font-weight: bold;
    font-size: 3vmin;
  }
}
</style>
