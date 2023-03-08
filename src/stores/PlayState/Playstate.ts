import { defineStore } from "pinia";

export const usePlayState = defineStore("playState", {
  state: () => {
    return {
      isPlay: false,
      currentMusicIndex: -1,
      currentTime: "",
    };
  },
  getters: {},
  actions: {},
});
