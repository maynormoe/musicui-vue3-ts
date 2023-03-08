import { defineStore } from "pinia";

export const usePlayState = defineStore("playState", {
  state: () => {
    return {
      isPlay: false,
    };
  },
  getters: {},
  actions: {},
});
