import instance from "@/network/request";

export  const getHotSearch = async () => {
    return await instance.get('/search/hot/detail')
}








export default {
    getHotSearch
}