<template>
  <div class="commentArea">
    <el-input
      v-model="textarea"
      :rows="2"
      placeholder="客官，来说几句？？"
      type="textarea"
    />
  </div>
  <div class="submitCommentBtn">
    <el-button size="large" type="danger">
      <span>
        <comment-one
          fill="#ffffff"
          size="18"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
      /></span>
      <span> 评论 </span>
    </el-button>
  </div>
  <div class="commentList">
    <div class="wonderful"></div>
    <div class="hotComment"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CommentOne } from "@icon-park/vue-next";

const textarea = ref<string>("");
</script>

<style lang="less" scoped>
.commentArea {
  :deep(.el-textarea) {
    border: 1px solid #d2d2d2;
    --el-input-focus-border-color: #ec4141;
  }
}

.submitCommentBtn {
  display: flex;
  align-items: center;
  margin: 1vmin 0.5vmin 1vmin 139vmin;

  .el-button {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 0.5vmin;
    }
  }
}
</style>