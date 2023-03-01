<template>
  <div class="songerContainer">
    <div class="songer">
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">
            <span>语种：</span>
          </div>
          <div class="sort">
            <SecondNavBar :hot-tag-data="langSortData"></SecondNavBar>
          </div>
        </div>
        <div class="selectorItem">
          <div class="title">
            <span>分类：</span>
          </div>
          <div class="sort">
            <SecondNavBar :hot-tag-data="typeSortData"></SecondNavBar>
          </div>
        </div>
        <div class="selectorItem">
          <div class="title">
            <span>分类：</span>
          </div>
          <div class="sort">
            <SecondNavBar :hot-tag-data="typeSortData"></SecondNavBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondNavBar from "@/components/SecondNavBar/SecondNavBar.vue";
import { ref } from "vue";

interface ILangsortData {
  area?: number;
  name?: string;
}

const langSortData = ref<ILangsortData[]>([
  { area: -1, name: "全部" },
  { area: 7, name: "华语" },
  { area: 96, name: "欧美" },
  { area: 8, name: "日本" },
  { area: 16, name: "韩国" },
  { area: 0, name: "其它" },
]);

interface ItypeSortData {
  type?: number;
  name?: string;
}

const typeSortData = ref<ItypeSortData[]>([
  { type: -1, name: "全部" },
  { type: 1, name: "男歌手" },
  { type: 2, name: "女歌手" },
  { type: 3, name: "乐队" },
]);

interface IFilterData {
  in;
}

const filterData = ref([
  { initial: -1, name: "热门" },
  { initial: "a", name: "A" },
  { initial: "b", name: "B" },
  { initial: "c", name: "C" },
  { initial: "d", name: "D" },
  { initial: "e", name: "E" },
  { initial: "f", name: "F" },
  { initial: "g", name: "G" },
  { initial: "h", name: "H" },
  { initial: "i", name: "I" },
  { initial: "j", name: "J" },
  { initial: "k", name: "K" },
  { initial: "l", name: "L" },
  { initial: "m", name: "M" },
  { initial: "n", name: "N" },
  { initial: "o", name: "O" },
  { initial: "p", name: "P" },
  { initial: "q", name: "Q" },
  { initial: "r", name: "R" },
  { initial: "s", name: "S" },
  { initial: "t", name: "T" },
  { initial: "u", name: "U" },
  { initial: "v", name: "V" },
  { initial: "w", name: "W" },
  { initial: "x", name: "X" },
  { initial: "y", name: "Y" },
  { initial: "z", name: "Z" },
  { initial: 0, name: "#" },
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

      .selectorItem {
        display: flex;

        .title {
          width: 7.855vmin;

          span {
            font-size: 2.55vmin;
            color: #8c8c8c;
          }
        }

        .sort {
        }
      }
    }
  }
}
</style>