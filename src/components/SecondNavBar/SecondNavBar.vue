<template>
  <div class="sNavBarContainer">
    <div v-for="(item, index) in props.hotTagData" :key="index" class="sNavBarItem">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  hotTagData: {
    type: Object,
    required: true
  },
  currentTagData: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
.sNavBarContainer {
  width: 100vmin;
  height: 3.95vmin;
  background: #ec4141;
  display: flex;
  flex-wrap: wrap;

  .sNavBarItem {
    span {

    }
  }
}
</style>