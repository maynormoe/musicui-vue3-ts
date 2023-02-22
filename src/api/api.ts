import instance from "@/network/request";

export const getHotSearch = async () => {
    return await instance.get('/search/hot/detail')
}

export const getCarousel = async () => {
    return await instance.get('/banner?type=0')
}

export const getPrecommend = async () => {
    return await instance.get('/personalized?limit=12')
}
export default {
    getHotSearch,
    getCarousel,
    getPrecommend
}