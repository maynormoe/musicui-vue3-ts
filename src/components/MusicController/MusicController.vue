<template>
  <div class="musicController">
    <div class="left">
      <div class="playingMusicCover">
        <img alt="" src="/src/assets/img/avatar.png" />
      </div>
      <div class="playingMusicName">
        <span>Gold Steps</span>
      </div>
    </div>
    <div class="center">
      <div class="buttons">
        <div class="playCycle">
          <play-cycle
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
        <div class="previousSong">
          <go-start
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
        <div class="playingSetting">
          <play-one
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
        <div class="nextSong">
          <go-end
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
        <div class="loveSong">
          <like
            fill="#949494"
            size="32"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
        </div>
        <div class="progressBar">
          <div class="progress">
            <div class="startTime">
              <span>00:00</span>
            </div>
            <el-slider
              v-model="progressValue"
              :show-tooltip="false"
              size="small"
            />
            <div class="endTime">
              <span>00:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="volumeNotice">
        <volume-notice
          fill="#949494"
          size="40"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
      </div>
      <div class="sliderBlock">
        <el-slider v-model="volumeValue" :show-tooltip="false" />
      </div>
      <div class="playingSongList">
        <list-two
          fill="#000000"
          size="32"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  GoEnd,
  GoStart,
  Like,
  ListTwo,
  PlayCycle,
  PlayOne,
  VolumeNotice,
} from "@icon-park/vue-next";
import { ref } from "vue";

const volumeValue = ref<number>(0);

const progressValue = ref<any>();
</script>

<style lang="less" scoped>
.musicController {
  background: white;
  z-index: 100;
  width: 100%;
  height: 12.85vmin;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .left {
    z-index: 200;
    display: flex;
    align-items: center;
    flex: 1;

    .playingMusicCover {
      margin-left: 5vmin;
      border-radius: 2vmin;
      width: 8vmin;
      height: 8vmin;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2vmin;
      }
    }

    .playingMusicName {
      cursor: pointer;
      margin: 2vmin;

      span {
        cursor: pointer;
        font-size: 2.55vmin;
      }
    }
  }

  .center {
    flex: 1;
    width: 10vmin;
    height: 10vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .buttons {
      display: flex;
      align-items: center;
      cursor: pointer;

      .playCycle {
        margin: 0 2vmin 2vmin 1vmin;
        cursor: pointer;
      }

      .previousSong {
        margin: 0 2vmin 2vmin 1vmin;
        cursor: pointer;
      }

      .playingSetting {
        margin: 0 2vmin 2vmin 1vmin;
        cursor: pointer;
      }

      .nextSong {
        margin: 0 2vmin 2vmin 1vmin;
        cursor: pointer;
      }

      .loveSong {
        margin: 0 2vmin 2vmin 1vmin;
        cursor: pointer;
      }

      .progressBar {
        width: 65.5vmin;
        position: absolute;
        bottom: 0;
        left: 65.55vmin;
        display: inline-block;
        margin-bottom: 1.5vmin;

        .progress {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .right {
    flex: 1;
    width: 3vmin;
    height: 10vmin;
    display: flex;
    justify-content: right;
    align-items: center;

    .sliderBlock {
      margin-left: 1.5vmin;
      margin-right: 1.5vmin;
      width: 12vmin;
      cursor: pointer;

      :deep(.el-slider) {
        .el-slider__bar {
          background: #ec4141;
        }

        .el-slider__button {
          border: 2px solid #ec4141;
        }
      }
    }

    .playingSongList {
      margin-right: 5vmin;
      cursor: pointer;
    }
  }
}
</style>