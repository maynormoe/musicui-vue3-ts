import { defineStore } from "pinia";

export const useMusicList = defineStore("musicList", {
  state: () => {
    return {
      musicList: Array,
    };
  },
});
