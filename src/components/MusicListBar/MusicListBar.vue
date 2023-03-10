<template>
  <div class="musicListBar">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <div v-if="musicListDetailData" class="songList">
          <el-table
            :data="musicListDetailData.tracks"
            :row-key="
              (row) => {
                return row.id;
              }
            "
            highlight-current-row
            lazy
            style="width: 100%"
            @cell-click="clickCell"
            @row-dblclick="clickRow"
          >
            <el-table-column label=" " type="index" width="100" />
            <el-table-column label="音乐标题" prop="name" width="180" />
            <el-table-column label="歌手" prop="ar[0].name" width="180" />
            <el-table-column label="专辑" prop="al.name" />
            <el-table-column label="时长" prop="dt" />
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <div class="commentContainer">
          <CommentArea></CommentArea>
          <div v-show="musicListHotCommentData" class="wonderful">
            <p>精彩评论</p>
            <div class="commentList">
              <Comment :comment-data="musicListHotCommentData"></Comment>
            </div>
          </div>
          <div class="hotComment">
            <p>全部评论</p>
            <div
              v-if="musicListAllCommentData && musicListDetailData.length !== 0"
              class="commentList"
            >
              <Comment
                :comment-data="musicListAllCommentData.comments"
              ></Comment>
            </div>
          </div>
          <div
            v-if="musicListAllCommentData && musicListDetailData.length !== 0"
            class="page"
          >
            <el-pagination
              v-model:current-page="currentPage"
              :total="musicListAllCommentData.total"
              background
              class="mt-4"
              layout="prev, pager, next"
              small
              @current-change="pageChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="third">
        <div class="starTitle">
          <span>收藏者</span>
        </div>
        <div
          v-infinite-scroll="load"
          :infinite-scroll-disabled="isDisable"
          :infinite-scroll-distance="300"
          :infinite-scroll-immediate="false"
          class="listStar"
        >
          <User :is-load="isMore" :musicListStarData="musicListStarData"></User>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import CommentArea from "@/components/Comment/CommentArea.vue";
import Comment from "@/components/Comment/Comment.vue";
import User from "@/components/User/User.vue";
import { useMusicId } from "@/stores/MusicId/musicid";
import request from "@/network/request";

const store = useMusicId();

const activeName = ref<string>("first");

let currentPage = inject<any>("currentPage");

const emits = defineEmits(["pageChange", "bottomLoad", "clickRow"]);

const pageChange = (page: number) => {
  emits("pageChange", page);
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const load = () => {
  console.log("滑动到底部了");
  emits("bottomLoad");
};

const musicUrlData = ref<any[]>([]);
const getMusicUrl = async () => {
  let res: any = await request.get("/song/url", {
    params: {
      id: store.musicId,
      br: 320000,
    },
  });
  console.log(res);
  res.data.forEach((item: Array<any>) => {
    musicUrlData.value.push(item);
  });
};

const clickCell = () => {};

const clickRow = (row: any) => {
  console.log("clickRow", row);
  console.log(row.id);
  store.musicId = row.id;
  console.log(store.musicId);
  getMusicUrl();
  console.log(musicUrlData.value);
  emits("clickRow", row);
};

const props = defineProps({
  musicListDetailData: {
    type: Array,
    required: true,
  },
  musicListHotCommentData: {
    type: Array,
  },
  musicListAllCommentData: {
    type: Array,
  },
  musicListStarData: {
    type: Array,
  },
  isMore: {
    type: Array,
  },
  isDisable: {
    type: Boolean,
  },
  musicUrlData: {
    type: Array,
  },
});
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
  align-items: center;
  flex-wrap: wrap;
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