<template>
  <div class="musicListBar">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <div class="songList">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="排名" width="100" />
            <el-table-column label="音乐标题" prop="date" width="180" />
            <el-table-column label="歌手" prop="name" width="180" />
            <el-table-column label="专辑" prop="address" />
            <el-table-column label="时长" prop="address" />
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <div class="commentContainer">
          <CommentArea></CommentArea>
          <div class="wonderful">
            <p>精彩评论</p>
            <div class="commentList">
              <Comment></Comment>
            </div>
          </div>
          <div class="hotComment">
            <p>热门评论</p>
            <div class="commentList">
              <Comment></Comment>
            </div>
          </div>
          <div class="page">
            <el-pagination
              :total="50"
              background
              class="mt-4"
              layout="prev, pager, next"
              small
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="third">
        <div class="starTitle">
          <span>收藏者</span>
        </div>
        <div class="listStar">
          <User></User>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import CommentArea from "@/components/Comment/CommentArea.vue";
import Comment from "@/components/Comment/Comment.vue";
import User from "@/components/User/User.vue";

const activeName = ref("first");

const tableData = [];

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="less" scoped>
.musicListBar {
  :deep(.el-tabs) {
    margin: 0 4.5vmin;

    .el-tabs__nav-wrap::after {
      background: white;
    }

    .el-tabs__item {
      margin-right: 3vmin;
      font-size: 2.15vmin;

      &:hover {
        color: #ec4141;
      }
    }

    .el-tabs__item.is-active {
      color: #ec4141;
      font-size: 2.45vmin;
    }

    .el-tabs__active-bar {
      background: #ec4141;
    }

    .el-tab-pane {
    }
  }

  .songList {
    :deep(.el-table) {
      .cell {
        font-size: 2vmin;
      }
    }
  }
}

.commentContainer {
  .wonderful {
    p {
      font-size: 2.65vmin;
      font-weight: bold;
    }
  }

  .hotComment {
    p {
      font-size: 2.65vmin;
      font-weight: bold;
    }
  }
}

.starTitle {
  span {
    font-size: 3vmin;
    font-weight: bold;
    color: #8c8c8c;
  }
}

.listStar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.page {
  margin: 1vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vmin;

  :deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
    background: #ec4141;
  }
}
</style>