<template>
  <div
    v-for="(item, index) in musicListStarData"
    v-if="musicListStarData"
    :key="index"
    class="user"
  >
    <div class="userAvatar">
      <img :src="item.avatarUrl" alt="" />
    </div>
    <div class="userName">
      <span>{{ item.nickname }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  musicListStarData: {
    type: Array,
    required: true,
  },
  isLoad: {
    type: Array,
  },
});
</script>

<style lang="less" scoped>
.user {
  margin: 2vmin;
  width: 40vmin;
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
