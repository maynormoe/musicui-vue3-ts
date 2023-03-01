<template>
  <div class="rankContainer">
    <div class="ranking">
      <div class="officialList">
        <div class="title">
          <span>官方榜</span>
        </div>
        <div class="rankOList">
          <ListTable
            :musicListDetail="musicListDetail"
            :officialListData="officialListData"
            :rankDetailData="rankDetailData"
          ></ListTable>
        </div>
      </div>
      <div class="globalList">
        <div class="title">
          <span>全球榜</span>
        </div>
        <div class="rankGList">
          <ListCard></ListCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import ListTable from "@/components/ListTable/ListTable.vue";
import api from "@/api/api";
import ListCard from "@/components/ListCard/ListCard.vue";
import request from "@/network/request";

const rankDetailData = ref("");
const officialListData = ref("");
const globalListData = ref("");
const musicListDetail: any = ref("");

provide("PrecommendData", globalListData);

api
  .getRankDetail()
  .then((res) => {
    console.log(res.list);
    rankDetailData.value = res.list;
    globalListData.value = res.list;
  })
  .catch((error) => {
    console.log(error);
  });

api
  .getRank()
  .then((res) => {
    console.log(res.list.slice(0, 4));
    officialListData.value = res.list.slice(0, 4);
  })
  .catch((error) => {
    console.log(error);
  });

const getSongListDetail = async (id: any) => {
  let res = await request.get("/playlist/detail", { params: { id } });
  res = res.playlist;
  musicListDetail.value.push(res);
};
</script>

<style lang="less" scoped>
.rankContainer {
  width: 100%;
  height: 100%;
  background: white;
}

.officialList {
}

.title {
  font-weight: 530;
  font-size: 2.755vmin;
  color: #9b9b9b;
  line-height: 5vmin;
  margin-left: 3vmin;
  margin-top: 2.5vmin;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #ec4141;
  }
}
</style>