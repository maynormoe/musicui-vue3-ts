<template>
  <div class="commentItem">
    <div class="commentUser">
      <div class="commentAvatar">
        <img alt="" src="/src/assets/img/avatar.png" />
      </div>
      <div class="commentName">
        <span>用户名</span>
      </div>
      <div class="commentDate">
        <span>2023-1-3</span>
      </div>
    </div>
    <div class="commentContent">
      <span>这是一条评论，这是一条评论，这是一条评论，这是一条评论</span>
    </div>
    <div class="commentBtn">
      <div class="thumbsup">
        <thumbs-up
          fill="#afafaf"
          size="24"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="outline"
        />
        <div class="thumbsUpCount">
          <span>300</span>
        </div>
      </div>
      <div class="commentShare">
        <share
          fill="#afafaf"
          size="24"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="outline"
        />
      </div>
      <div class="commentBack">
        <comments
          fill="#afafaf"
          size="24"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="outline"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Comments, Share, ThumbsUp } from "@icon-park/vue-next";
</script>

<style lang="less" scoped>
.commentItem {
  width: 150vmin;
  height: 12.75vmin;
  border: 1px solid #cccccc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 2vmin;
  position: relative;

  .commentContent {
    margin-left: 5vmin;

    span {
      font-size: 2vmin;
    }
  }

  .commentBtn {
    position: absolute;
    right: 5vmin;
    top: 2vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9b9b9b;
    cursor: pointer;

    .thumbsup {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 2vmin;
    }

    .commentShare {
      margin-right: 2vmin;
    }
  }

  .commentUser {
    display: flex;
    margin: 1vmin 1vmin 2vmin;

    .commentAvatar {
      img {
        width: 5vmin;
        height: 5vmin;
        border-radius: 50%;
      }
    }

    .commentName {
      margin-right: 2vmin;
      margin-left: 1vmin;
      display: flex;
      align-items: center;

      span {
        font-size: 2vmin;
        color: #ec4141;
      }
    }

    .commentDate {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: #9b9b9b;
      }
    }
  }
}
</style>