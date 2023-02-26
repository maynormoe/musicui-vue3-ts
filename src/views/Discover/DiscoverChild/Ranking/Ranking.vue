<template>
  <div class="rankContainer">
    <div class="ranking">
      <div class="officialList">
        <div class="title">
          <span>官方榜</span>
        </div>
        <div class="rankOList"></div>
      </div>
      <div class="globalList">
        <div class="title">
          <span>全球榜</span>
        </div>
        <div class="rankGList"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.rankContainer {
  width: 100%;
  height: 100%;
  background: white;
}

.title {
  font-weight: 530;
  font-size: 2.755vmin;
  color: #9b9b9b;
  cursor: pointer;

  &:hover {
    color: #ec4141;
  }
}
</style>
