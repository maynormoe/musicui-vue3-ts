<template>
  <div class="navBar">
    <div class="navBarList" v-for="(item, index) in navBarData" :key="index">
      <div
          class="navBarItem"
          :class="{ active: index === indexData.activeIndex }"
          @click="clickBarItem(item.path, index)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { reactive } from "vue";

defineProps({
  navBarData: {
    type: Object as PropType<any>
  }
});

const indexData = reactive({
  activeIndex: -1
});

const emit = defineEmits(["clickBarItem"]);

const clickBarItem = (path: string, index: number) => {
  indexData.activeIndex = index;
  emit("clickBarItem", path, index)
};

</script>

<style lang="less" scoped>
.navBar {
  background: white;
  width: 100%;
  height: 7vmin;
  display: flex;
  .navBarList {
    .navBarItem {
      line-height: 7vmin;
      padding: 0 2.559vmin;
      font-size: 2.5vmin;
      cursor: pointer;
      &.active {
        span {
          font-size: 2.7655vmin;
          font-weight: bold;
          border-bottom: 1vmin solid #ec4141;
          border-radius: 0.7555vmin;
        }
      }
    }
  }
}
</style>