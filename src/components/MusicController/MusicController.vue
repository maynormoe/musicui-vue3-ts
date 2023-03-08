<template>
  <div v-if="musicUrlData" class="musicController">
    <audio
      v-if="musicUrlData.length !== 0"
      ref="audio"
      :src="musicUrlData.url"
      autoplay
      @ended="changeMusic"
      @pause="changeState(false)"
      @play="changeState(true)"
      @timeupdate="timeUpdate"
    ></audio>
    <div class="left">
      <div class="playingMusicCover">
        <img v-if="musicDetail" :src="musicDetail.al.picUrl" alt="" />
        <img v-else alt="" src="/src/assets/img/avatar.png" />
      </div>
      <div v-if="musicDetail" class="playingMusicName">
        <span>{{ musicDetail.name }}</span>
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
        <div
          class="playingSetting"
          @click="musicList.value !== 0 ? changePlayState() : ''"
        >
          <play-one
            v-if="!isPlay"
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
          <pause
            v-else
            fill="#949494"
            size="40"
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
            <div class="currentTime">
              <span>{{ currentTime }}</span>
            </div>
            <el-slider
              v-model="currentProgress"
              :show-tooltip="false"
              size="small"
            />
            <div class="totalTime">
              <span>{{ totalTime }}</span>
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
        <el-slider v-model="currentVolume" :show-tooltip="false" />
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
  Pause,
  PlayCycle,
  PlayOne,
  VolumeNotice,
} from "@icon-park/vue-next";
import { ref, watch } from "vue";
import request from "@/network/request";

import { useMusicId } from "@/stores/MusicId/musicid";
import { storeToRefs } from "pinia";
import { useMusicList } from "@/stores/MusicList/musiclist";

import { usePlayState } from "@/stores/PlayState/Playstate";

const { isPlay } = storeToRefs(usePlayState());
const { currentMusicIndex } = storeToRefs(usePlayState());
const { currentTime }: any = storeToRefs(usePlayState());

const { musicId }: any = storeToRefs(useMusicId());

let audio = ref<any>(null);

const store: any = useMusicList();

// 顺序播放 order
// 随机播放 random
const playType = ref<string>("order");

const currentVolume = ref<number>(30);

const currentProgress = ref<number>(0);

const totalTime = ref<string>("00:00");

const musicUrlData = ref<any[]>([]);

const musicDetail = ref<any>();
const getMusicUrl = async () => {
  let res: any = await request.get("/song/url", {
    params: {
      id: musicId.value,
      br: 320000,
    },
  });
  console.log(res);
  res.data.forEach((item: Array<any>) => {
    musicUrlData.value = item;
  });
};

const musicList = ref<any[]>([]);

// 改变音乐状态
const changeState = (PlayState: boolean) => {
  isPlay.value = PlayState;
};

const changePlayState = () => {
  !isPlay.value ? playMusic() : pauseMusic();
};

const playMusic = () => {
  audio.value.play();
};
const pauseMusic = () => {
  audio.value.pause();
};
const getMusicDetailFromMusicList = () => {
  let index = store.musicList.findIndex(
    (item: any) => item.id == musicId.value
  );
  if (index !== -1) {
    currentMusicIndex.value = index;
    musicDetail.value = store.musicList[index];
    totalTime.value = store.musicList[index].dt;
    console.log(musicDetail.value);
  }
};

const timeUpdate = () => {
  let time = audio.value.currentTime;
  let minutes = Math.floor(time / 60); // 获取分钟数
  let seconds = Math.floor(time % 60); // 获取秒数
  // 将分钟数和秒数转换为 mm:ss 格式
  currentTime.value =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
};

watch(
  () => store.musicList,
  () => {
    console.log(store.musicList);
    store.musicList.forEach((item: Array<any>, index: number) => {
      musicList.value = item;
    });
  }
);

watch(musicId, () => {
  getMusicDetailFromMusicList();
  getMusicUrl();
});
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

.currentTime {
  margin-right: 2vmin;
}

.totalTime {
  margin-left: 2vmin;
}
</style>