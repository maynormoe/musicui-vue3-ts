<template>
  <div class="SingerSingTop">
    <div class="leftCover">
      <img alt="" src="/src/assets/img/defaultcover.png" />
    </div>
    <div v-if="singerTopData" class="rightList">
      <el-table :data="singerTopData" stripe style="width: 100%">
        <el-table-column label="排名" prop="index" width="180" />
        <el-table-column label="歌名" prop="name" width="180" />
        <el-table-column label="歌手" prop="ar[0].name" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  singerTopData: {
    type: Array,
    required: true,
  },
});
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
    width: 60vmin;
    height: 70vmin;
  }
}
</style>
