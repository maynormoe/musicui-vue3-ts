<template>
  <div class="songerContainer">
    <div class="songer">
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">
            <span>语种：</span>
          </div>
          <div class="sort">
            <SecondNavBar
              :hot-tag-data="langSortData"
              @clicks-nav-bar-item="areaHandler"
            ></SecondNavBar>
          </div>
        </div>
        <div class="selectorItem">
          <div class="title">
            <span>分类：</span>
          </div>
          <div class="sort">
            <SecondNavBar
              :hot-tag-data="typeSortData"
              @clicks-nav-bar-item="typeHandler"
            ></SecondNavBar>
          </div>
        </div>
        <div class="selectorItem">
          <div class="title">
            <span>筛选：</span>
          </div>
          <div class="sort">
            <SecondNavBar
              :hot-tag-data="filterData"
              @clicks-nav-bar-item="initialHandler"
            ></SecondNavBar>
          </div>
        </div>
      </div>
      <div class="listCardContainer">
        <ListCard @bottom-load="bottomLoad"></ListCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondNavBar from "@/components/SecondNavBar/SecondNavBar.vue";
import { onMounted, provide, ref } from "vue";
import ListCard from "@/components/ListCard/ListCard.vue";
import request from "@/network/request";

const isMore = ref<boolean>(false);

const currentPage = ref<number>(1);

const singerList = ref<any[]>([]);

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
const area = ref<number | undefined>(-1);

const areaHandler = (index: number) => {
  area.value = langSortData.value[index].area;
  singerList.value = [];
  currentPage.value = 1;
  getSingerList();
};

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

const type = ref<number | undefined>(-1);

const typeHandler = (index: number) => {
  type.value = typeSortData.value[index].type;
  singerList.value = [];
  currentPage.value = 1;
  getSingerList();
};

interface IFilterData {
  initial?: number | string;
  name?: string;
}

const filterData = ref<IFilterData[]>([
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
const initial = ref<number | string | undefined>(-1);
const initialHandler = (index: number) => {
  initial.value = filterData.value[index].initial;
  singerList.value = [];
  currentPage.value = 1;
  getSingerList();
};

const getSingerList = async () => {
  const res = await request.get("/artist/list", {
    params: {
      area: area.value,
      initial: initial.value,
      type: type.value,
      offset: (currentPage.value - 1) * 30,
    },
  });
  console.log(res.artists);
  res.artists.forEach((item: any[]) => {
    singerList.value.push(item);
  });
  console.log(res.more);
  isMore.value = res.more;
};
// request
//   .get("/artist/list", {
//     params: {
//       area: area.value,
//       initial: initial.value,
//       type: type.value,
//       offset: (currentPage.value - 1) * 30,
//     },
//   })
//   .then((res) => {
//     console.log(res.artists);
//     singerList.value = res.artists;
//     isMore.value = res.more;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
onMounted(() => {
  getSingerList();
});
provide("PrecommendData", singerList);

const bottomLoad = () => {
  if (isMore.value) {
    currentPage.value += 1;
    getSingerList();
  }
};
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
        margin-top: 1.899vmin;
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