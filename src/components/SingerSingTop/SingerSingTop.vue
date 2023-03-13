<template>
  <div class="SingerSingTop">
    <div class="leftCover">
      <img alt="" src="/src/assets/img/topSongsLogo.png" />
    </div>
    <div v-if="singerTopData" class="rightList">
      <el-table
        :data="isOpen ? singerTopData : singerTopData.slice(0, 10)"
        highlight-current-row
        lazy
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" width="700" />
        <el-table-column prop="ar[0].name" />
      </el-table>
      <div class="showAll" @click="clickShowMore">
        <span v-if="isShowAll">展开</span>
        <span v-else>收起</span>
        <right
          fill="#949494"
          size="32"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Right } from "@icon-park/vue-next";
import { ref } from "vue";

const props = defineProps({
  singerTopData: {
    type: Array,
    required: true,
  },
});

const isShowAll = ref<boolean>(true);

const clickShowMore = () => {
  isShowAll.value = !isShowAll.value;
  isOpen.value = !isOpen.value;
};
const isOpen = ref<boolean>(false);
</script>

<style lang="less" scoped>
.SingerSingTop {
  display: flex;
  margin: 3vmin 2vmin 2vmin 3.5vmin;

  .leftCover {
    margin-right: 4vmin;
    width: 27.5vmin;
    height: 27.5vmin;

    img {
      width: 100%;
      height: 100%;
      border-radius: 2.5vmin;
    }
  }

  .rightList {
    width: 70%;
    height: 25%;

    :deep(.el-table) {
      border: 1px solid #ffffff;
      border-radius: 3vmin;

      .el-table__row {
        border-radius: 3vmin;
      }

      .el-table__row--striped {
        border-radius: 3vmin;
      }
    }

    .showAll {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        text-align: left;
        color: #949494;
      }
    }
  }
}
</style>