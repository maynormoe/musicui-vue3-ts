<template>
  <div class="navBar">
    <div v-for="(item, index) in navBarData" :key="index" class="navBarList">
      <div
        :class="{ active: index === indexData.activeIndex }"
        class="navBarItem"
        @click="clickBarItem(item.path, index)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted, reactive } from "vue";

const props = defineProps({
  navBarData: {
    type: Object as PropType<any>,
  },
});

const indexData = reactive({
  activeIndex: -1,
});

const emit = defineEmits(["clickBarItem"]);

onMounted(() => {
  indexData.activeIndex = props.navBarData.findIndex(
    (item: { path: string }) => item.path === window.location.pathname
  );
});

const clickBarItem = (path: string, index: number) => {
  emit("clickBarItem", path, index);
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