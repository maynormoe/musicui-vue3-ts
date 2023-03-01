<template>
  <div class="songerContainer">
    <div class="songer">
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">
            <span>语种：</span>
          </div>
          <div class="langSort">
            <SecondNavBar :hotTagData="langSortData"></SecondNavBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondNavBar from "@/components/SecondNavBar/SecondNavBar.vue";
import { ref } from "vue";

const langSortData = ref([
  { area: -1, name: "全部" },
  { area: 7, name: "华语" },
  { area: 96, name: "欧美" },
  { area: 8, name: "日本" },
  { area: 16, name: "韩国" },
  { area: 0, name: "其它" },
]);
</script>

<style lang="less" scoped>
.songerContainer {
  width: 100%;
  height: 100%;
  background: white;

  .songer {
    .selectors {
      margin: 3vmin 2vmin 1vmin;
      width: 100%;
      height: 26.755vmin;

      .title {
        span {
          font-size: 2.55vmin;
          color: #8c8c8c;
        }
      }
    }
  }
}
</style>