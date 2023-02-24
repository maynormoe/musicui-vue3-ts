<template>
  <div class="sNavBarContainer">
    <div v-for="(item, index) in props.hotTagData" :key="index" :class="index == activeNum ? 'active' : ''"
         class="sNavBarItem">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

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

const activeIndex = ref(-1)
</script>

<style lang="less" scoped>
.sNavBarContainer {
  width: 100vmin;
  height: 3.95vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;

  .sNavBarItem {
    border: 1px solid #ccc;
    border-radius: 2vmin;
    box-shadow: 0 0 2px 2px rgb(255, 255, 255);
    margin: 0 0.55vmin;
    padding: 0 1vmin;
    color: #555;
    cursor: pointer;

    span {
      font-size: 2.233vmin;
    }
  }
}
</style>