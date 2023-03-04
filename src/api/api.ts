import instance from "@/network/request";

export const getHotSearch = async () => {
  return await instance.get("/search/hot/detail");
};

export const getCarousel = async () => {
  return await instance.get("/banner?type=0");
};

export const getPrecommend = async () => {
  return await instance.get("/personalized?limit=12");
};

export const getHighQuality = async () => {
  return await instance.get("/top/playlist/highquality?limit=1");
};

export const getHotTag = async () => {
  return await instance.get("/playlist/hot");
};
export const getSortList = async () => {
  return await instance.get("/playlist/catlist");
};

export const getRank = async () => {
  return await instance.get("/toplist");
};
export const getRankDetail = async () => {
  return await instance.get("/toplist/detail");
};

export default {
  getHotSearch,
  getCarousel,
  getPrecommend,
  getHighQuality,
  getHotTag,
  getSortList,
  getRank,
  getRankDetail,
};
