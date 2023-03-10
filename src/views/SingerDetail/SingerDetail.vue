<template>
  <div class="singerDetailContainer">
    <div class="singerDetail">
      <div class="singerInfo">
        <div class="singerCover">
          <img alt="" src="/src/assets/img/defaultcover.png" />
        </div>
        <div class="singerInfoRight">
          <div class="singerName">
            <span>Maynormoe</span>
          </div>
          <div class="buttons">
            <div class="buttonsItem">
              <el-button :icon="Like" round>收藏</el-button>
            </div>
            <div class="buttonsItem">
              <el-button :icon="Link" round>关于歌手</el-button>
            </div>
          </div>
          <div class="singerInfoCount">
            <span>单曲数：20</span>
            <span>专辑数：20</span>
            <span>MV数量：200</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Like, Link } from "@icon-park/vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    Link() {
      return Link;
    },
    Like() {
      return Like;
    },
  },
});
</script>

<style lang="less" scoped>
.singerDetailContainer {
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: calc(100vh - 22vmin);
  background: white;
  overflow: scroll;

  .singerDetail {
    .singerInfo {
      width: 100%;
      height: 38.355vmin;
      display: flex;
      align-items: center;

      .singerCover {
        margin: 0 3vmin 0 6.5vmin;
        width: 28.995vmin;
        height: 28.995vmin;
        border-radius: 2.5vmin;

        img {
          width: 100%;
          height: 100%;
          border-radius: 2.5vmin;
        }
      }

      .singerInfoRight {
        width: 108.95vmin;
        height: 28.995vmin;

        .singerName {
          display: flex;
          align-items: center;
          margin: 1.35vmin 1.35vmin 0.65vmin;
          border-radius: 1vmin;

          span {
            font-size: 4vmin;
          }
        }

        .buttons {
          margin: 0 1vmin 1vmin 1vmin;
          display: flex;

          .buttonsItem {
            margin-top: 3vmin;
            margin-left: 1vmin;

            :deep(.el-button) {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 13vmin;
              height: 5.5vmin;
              --el-button-hover-text-color: #ec4141 !important;
              --el-button-hover-border-color: #ec4141 !important;
              --el-button-hover-bg-color: #fdd6d6 !important;

              &:hover {
                border-color: #e13e3e;
                background: #fdd0d0;
                color: #ec4141;
              }

              &:active {
                border-color: #e13e3e;
                background: #fdd0d0;
                color: #ec4141;
              }

              span {
                font-weight: bold;
                font-size: 2vmin;
              }
            }
          }
        }

        .singerInfoCount {
          display: flex;
          align-items: center;
          font-size: 2vmin;
          color: #6b6b6b;

          span {
            margin-top: 6.55vmin;
          }
        }
      }
    }
  }
}
</style>