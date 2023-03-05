<template>
  <div class="musicListDetailContainer">
    <div class="musicListDetail">
      <div class="listInfo">
        <div class="listCover">
          <img alt="" src="/src/assets/img/defaultcover.png" />
        </div>
        <div class="listInfoRight">
          <div class="InfoTitle">
            <div class="titleTag">
              <span>歌单</span>
            </div>
            <div class="titleContent">
              <span>时间治愈的是 愿意自渡之人</span>
            </div>
          </div>
          <div class="creatorInfo">
            <div class="creatorAvatar">
              <img alt="" src="/src/assets/img/avatar.png" />
            </div>
            <div class="creatorName">
              <span>网易云音乐</span>
            </div>
            <div class="creatorDate">
              <span>2023年1月4日创建</span>
            </div>
          </div>
          <div class="buttons">
            <div class="buttonsItem">
              <el-button round size="large" type="danger">
                <span>
                  <play-one
                    fill="#ffffff"
                    size="24"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                    theme="filled"
                  />
                </span>
                <span>播放全部</span>
              </el-button>
            </div>
            <div class="buttonsItem">
              <el-button :icon="Star" round type="warning">收藏</el-button>
            </div>
            <div class="buttonsItem">
              <el-button :icon="Share" round type="primary">分享</el-button>
            </div>
          </div>
          <div class="listTags">
            <div class="listTagsTitle">
              <span>标签：</span>
            </div>
            <div class="listTagsIcon">
              <el-button class="tagsIcon" plain size="small" type="primary"
                >标签
              </el-button>
            </div>
          </div>
          <div class="countContainer">
            <div class="singCount">
              <span>歌曲： 20</span>
            </div>
            <div class="playCount">
              <span>播放：20 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="musicListBarContainer">
        <MusicListBar></MusicListBar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlayOne, Share, Star } from "@icon-park/vue-next";
import MusicListBar from "@/components/MusicListBar/MusicListBar.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import request from "@/network/request";

const route = useRoute();

const musicListDetail = ref<string[]>([]);

const getMusicListDetail = async () => {
  const res: any = await request.get("/playlist/detail?id=" + route.params.id);
  console.log(res.playlist);
  musicListDetail.value = res.playlist;
};
onMounted(() => {
  getMusicListDetail();
});
</script>

<style lang="less" scoped>
.musicListDetailContainer {
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: calc(100vh - 22vmin);
  background: white;
  overflow: scroll;

  .musicListDetail {
    .listInfo {
      width: 100%;
      height: 38.355vmin;
      display: flex;
      align-items: center;

      .listCover {
        margin: 0 3vmin 0 6.5vmin;
        width: 28.995vmin;
        height: 28.995vmin;
        background: gold;
        border-radius: 2.5vmin;

        img {
          width: 100%;
          height: 100%;
          border-radius: 2.5vmin;
        }
      }

      .listInfoRight {
        width: 108.95vmin;
        height: 28.995vmin;

        .InfoTitle {
          display: flex;
          align-items: center;
          margin: 1vmin 1vmin 0.65vmin;
          border-radius: 1vmin;

          .titleTag {
            margin: 1vmin 2vmin 1vmin 1vmin;
            height: 3vmin;
            width: 5vmin;
            border: 2px solid #ec4141;
            border-radius: 1vmin;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              font-weight: bold;
              font-size: 2.29vmin;
              color: #ec4141;
            }
          }

          .titleContent {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              font-size: 3.55vmin;
              font-weight: bold;
            }
          }
        }
      }

      .creatorInfo {
        display: flex;
        align-items: center;

        .creatorAvatar {
          margin: 0.5vmin 2vmin 1vmin 2vmin;
          width: 5vmin;
          height: 5vmin;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .creatorName {
          font-size: 2.25vmin;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1vmin;

          span {
            color: #ec4141;
          }
        }

        .creatorDate {
          margin-top: 0;
          margin-left: 2vmin;
          font-size: 2.25vmin;
          margin-bottom: 1vmin;

          span {
            color: #6b6b6b;
          }
        }
      }

      .buttons {
        margin: 0 1vmin 1vmin 1vmin;
        display: flex;

        .buttonsItem {
          margin-top: 0;
          margin-left: 1vmin;

          :deep(.el-button) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 14vmin;
            height: 5.5vmin;

            span {
              font-weight: bold;
              font-size: 2vmin;
            }
          }
        }
      }

      .listTags {
        margin-left: 2vmin;
        margin-bottom: 0.5vmin;
        display: flex;
        align-items: center;

        .listTagsTitle {
          span {
            font-size: 1.85vmin;
            color: #838383;
          }
        }

        .listTagsIcon {
          :deep(.tagsIcon) {
            font-size: 1.85vmin;
          }
        }
      }

      .countContainer {
        margin: 0.5vmin 0 0.5vmin 2vmin;
        display: flex;
        align-items: center;
        color: #838383;

        .singCount {
          margin-right: 1vmin;

          span {
            font-size: 2vmin;
          }
        }

        .playCount {
          span {
            font-size: 2vmin;
          }
        }
      }
    }
  }
}
</style>