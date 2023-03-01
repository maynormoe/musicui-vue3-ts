<template>
  <div class="sNavBarContainer">
    <div
      v-for="(item, index) of hotTagData"
      :key="index"
      :class="currentTabIndex === index ? 'active' : ''"
      class="sNavBarItem"
      @click="clicksNavBarItem(Number(index))"
    >
      <span :class="currentTabIndex === index ? 'activeFont' : ''">{{
        item.name
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

type HotTagDataType = { area?: number; name?: string };
const currentTabIndex = ref(0);

const props = withDefaults(
  defineProps<{
    hotTagData: HotTagDataType[];
    currentTagData?: HotTagDataType;
  }>(),
  {
    currentTagData: () => ({}),
  }
);

watch(props.hotTagData, (value, oldValue, onCleanup) => {
  console.log("props.hotTagData", props.hotTagData);
  console.log("value", value);
});

const activeIndex = ref(-1);

const emits = defineEmits(["clicksNavBarItem"]);

const clicksNavBarItem = (index: number) => {
  currentTabIndex.value = index;
  if (activeIndex.value == index) {
    return;
  }
  activeIndex.value = index;
  emits("clicksNavBarItem", index);
};
</script>

<style lang="less" scoped>
.sNavBarContainer {
  height: 3.95vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 20px;

  .sNavBarItem {
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

.active {
  background-color: #f5c6c6;
}

.activeFont {
  color: #ec4141;
}
</style>