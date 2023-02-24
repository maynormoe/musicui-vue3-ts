<template>
  <el-card class="box-card">
      <div class="card-header">
        <span>热搜榜</span>
      </div>
    <div class="hotSearchItem" v-for="(item,index) in hotSearchList" :key="index">
      <div class="rankNo">{{ index + 1 }}</div>
      <div class="songName">{{ item.searchWord }}</div>
    </div>
  </el-card>
</template>


<script setup lang="ts">

import api from "@/api/api";
import {ref} from "vue";

const hotSearchList = ref('')

api.getHotSearch().then(res => {
  console.log(res.data)
  hotSearchList.value = res.data
}).catch((error) => {
  console.log(error)
})

</script>


<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding-bottom: 1vmin;
    font-size: 2.355vmin;
    color: #D7DBDD;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  height: 55.855vmin;
  overflow-y: scroll
}
.hotSearchItem {
  display: flex;
  align-items: center;
  padding: 1vmin;
  cursor: pointer;
  background: white;
  border-radius: 3vmin ;
  &:hover {
    background: #ebebeb ;
  }
  .rankNo {
    font-size: 2.3555vmin;
    font-weight: bold;
    padding-right: 3vmin;
  }
  .songName {
    font-size: 2.355vmin;
    font-weight: bold;
  }

}
::-webkit-scrollbar {
  display: none;
}
</style>


