<template>
  <div class="sNavBarContainer">
    <div
      v-for="(item, index) of hotTagData"
      :key="index"
      :class="currentTabName === index ? 'active' : ''"
      class="sNavBarItem"
      @click="clicksNavBarItem(item.area, index)"
    >
      <span :class="currentTabName === index ? 'activeFont' : ''">{{
        item.name
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
  hotTagData: {
    type: Object,
    required: true,
  },
  currentTagData: {
    type: Object,
    default: {},
  },
});
const currentTabName = ref(0);
watch(props.hotTagData, (value, oldValue, onCleanup) => {
  console.log(props.hotTagData);
  console.log(value);
});
const activeIndex = ref(-1);

const emits = defineEmits(["clicksNavBarItem"]);

const clicksNavBarItem = (index: number, a: number) => {
  currentTabName.value = a;
  if (activeIndex.value == index) {
    return;
  }
  activeIndex.value = index;
  emits("clicksNavBarItem", index);
};
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