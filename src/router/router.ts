import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "discover",
      component: () => import("@/views/index.vue"),
      children: [
        {
          path: "discover",
          redirect: "/discover/personrecommend",
          component: () => import("@/views/Discover/Discover.vue"),
          children: [
            {
              path: "personrecommend",
              component: () =>
                import(
                  "@/views/Discover/DiscoverChild/Precommend/Precommend.vue"
                ),
            },
            {
              path: "songlist",
              component: () =>
                import("@/views/Discover/DiscoverChild/SongList/SongList.vue"),
            },
            {
              path: "ranking",
              component: () =>
                import("@/views/Discover/DiscoverChild/Ranking/Ranking.vue"),
            },
            {
              path: "singer",
              component: () =>
                import("@/views/Discover/DiscoverChild/Singer/Singer.vue"),
            },
          ],
        },
        {
          path: "dj",
          component: () => import("@/views/DJ/Dj.vue"),
        },
        {
          path: "video",
          component: () => import("@/views/Video/Video.vue"),
        },
        {
          path: "recommend",
          component: () => import("@/views/Recommend/Recommend.vue"),
        },
        {
          path: "musiclistdetail/:id",
          name: "musicListDetail",
          component: () =>
            import("@/views/MusicListDetail/MusicListDetail.vue"),
        },
        {
          path: "singerdetail/:id",
          name: "singerDetail",
          component: () => import("@/views/SingerDetail/SingerDetail.vue"),
        },
      ],
    },
  ],
});

export default router;
