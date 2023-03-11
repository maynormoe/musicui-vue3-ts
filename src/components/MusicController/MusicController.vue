<template>
  <div v-if="musicUrlData" class="musicController">
    <audio
      v-if="musicUrlData.length !== 0"
      ref="audio"
      :src="musicUrlData.url"
      autoplay
      @ended="changeMusic('next')"
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
        <div class="playMode" @click="changePlayMode">
          <play-cycle
            v-if="playType === 'loop'"
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
          <shuffle-one
            v-if="playType === 'order'"
            fill="#949494"
            size="38"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
            theme="filled"
          />
          <sort-two
            v-if="playType === 'random'"
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
            @click="musicList.value !== 0 ? changeMusic('pre') : ''"
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
            @click="musicList.value !== 0 ? changeMusic('next') : ''"
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
              @change="changeProgress"
            />
            <div class="totalTime">
              <span>{{ totalTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="volumeNotice" @click="changeVolumeMute">
        <volume-notice
          v-if="currentVolume >= 50 && !isMute"
          fill="#949494"
          size="40"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
        <volume-small
          v-else-if="currentVolume < 50 && !isMute"
          fill="#949494"
          size="40"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
        <volume-mute
          v-if="isMute"
          fill="#949494"
          size="40"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
      </div>
      <div class="sliderBlock">
        <el-slider
          v-model="currentVolume"
          :show-tooltip="false"
          @input="changeVolume"
        />
      </div>
      <div class="playingSongList" @click="isDrawer = true">
        <list-two
          fill="#000000"
          size="32"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          theme="filled"
        />
        <div class="drawer">
          <el-drawer
            v-model="isDrawer"
            :with-header="false"
            z-index="1000000000000000000000000000000000000"
          >
            <span>共{{ store.musicList.length }}首</span>
            <el-table
              :data="store.musicList"
              highlight-current-row
              lazy
              stripe
              style="width: 100%"
              @row-dblclick="clickRow"
            >
              <el-table-column label="歌名" prop="name" width="180" />
              <el-table-column label="作者" prop="ar[0].name" width="180" />
              <el-table-column label="时长" prop="dt" />
            </el-table>
          </el-drawer>
        </div>
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
  ShuffleOne,
  SortTwo,
  VolumeMute,
  VolumeNotice,
  VolumeSmall,
} from "@icon-park/vue-next";
import { ref, watch } from "vue";
import request from "@/network/request";

import { useMusicId } from "@/stores/MusicId/musicid";
import { storeToRefs } from "pinia";
import { useMusicList } from "@/stores/MusicList/musiclist";

import { usePlayState } from "@/stores/PlayState/Playstate";
import order from "@icon-park/vue-next/lib/icons/Order";

const { isPlay } = storeToRefs(usePlayState());
const { currentMusicIndex } = storeToRefs(usePlayState());
const { currentTime }: any = storeToRefs(usePlayState());

const isDrawer = ref<boolean>(false);

const { musicId }: any = storeToRefs(useMusicId());

let audio = ref<any>(null);

const store: any = useMusicList();

// 顺序播放 order
// 随机播放 random
// 单曲循环 loop
const playType = ref<string>("order");

const isMute = ref<boolean>(false);

const currentVolume = ref<number>(30);

const volumeSave = ref<number>(0);

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

const changePlayMode = () => {
  switch (playType.value) {
    case "loop":
      playType.value = "order";
      break;
    case "order":
      playType.value = "random";
      break;
    case "random":
      playType.value = "loop";
      break;
  }
  console.log(playType.value);
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
const changeMusic = (type: string, id?: number) => {
  if (type === "click") {
    musicId.value = id;
  } else if (type === "pre") {
    let currentMusicIndexPre = currentMusicIndex.value;
    let preIndex: number;
    if (playType.value === "order") {
      preIndex =
        Number(currentMusicIndexPre) - 1 < 0
          ? store.musicList.length - 1
          : Number(currentMusicIndexPre) - 1;
      musicId.value = store.musicList[preIndex].id;
    } else if (playType.value === "random") {
      if (store.musicList.length === 1) {
        preIndex = currentMusicIndexPre;
        musicId.value = store.musicList[preIndex].id;
      } else {
        preIndex = currentMusicIndexPre;
        while (preIndex === currentMusicIndexPre) {
          preIndex = Math.floor(Math.random() * store.musicList.length);
          console.log(preIndex);
          musicId.value = store.musicList[preIndex].id;
        }
      }
    }
  } else if (type === "next") {
    let currentMusicIndexNext = currentMusicIndex.value;
    let nextIndex: number;
    if (playType.value === "order") {
      nextIndex =
        currentMusicIndexNext === store.musicList.length
          ? 0
          : currentMusicIndexNext + 1;
      musicId.value = store.musicList[nextIndex].id;
    } else if (playType.value === "random") {
      if (store.musicList.length === 1) {
        nextIndex = currentMusicIndexNext;
      } else {
        nextIndex = currentMusicIndexNext;
        while (nextIndex === currentMusicIndexNext) {
          nextIndex = Math.floor(Math.random() * store.musicList.length);
        }
        musicId.value = store.musicList[nextIndex].id;
      }
    }
  }
};

const clickRow = (row: any) => {
  console.log(row.id);
  changeMusic("click", row.id);
};

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

const timeUpdate = () => {
  let time = audio.value.currentTime;
  let durationTime = audio.value.duration;
  let minutes = Math.floor(time / 60); // 获取分钟数
  let seconds = Math.floor(time % 60); // 获取秒数
  // 将分钟数和秒数转换为 mm:ss 格式
  currentTime.value =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  currentProgress.value = Math.floor((time / durationTime) * 100);
};

const changeProgress = (e: number) => {
  console.log(e);
  currentTime.value = Math.floor((e / 100) * audio.value.duration);
  audio.value.currentTime = currentTime.value;
};

const changeVolume = (e: number) => {
  console.log(e);
  currentVolume.value = e;
  audio.value.volume = currentVolume.value / 100;
  if (e > 0 && isMute.value) {
    isMute.value = false;
  } else if (e === 0 && !isMute.value) {
    isMute.value = true;
  }
};

const changeVolumeMute = () => {
  if (isMute.value) {
    currentVolume.value = volumeSave.value;
    isMute.value = false;
  } else {
    volumeSave.value = currentVolume.value;
    isMute.value = true;
  }
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

      .playMode {
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

:deep(.el-drawer) {
  background: white;
  z-index: 9999999;
}
</style>