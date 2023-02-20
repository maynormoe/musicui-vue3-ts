import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'discover',
            component: () => import('@/views/index.vue'),
            children: [
                {
                    path: 'discover',
                    redirect: '/discover/personrecommend',
                    component: () => import('@/views/Discover/Discover.vue'),
                    children: [
                        {
                            path: 'personrecommend',
                            component: () => import('@/views/Discover/DiscoverChild/Precommend.vue')
                        },
                        {
                            path: 'songlist',
                            component: () => import('@/views/Discover/DiscoverChild/SongList.vue')
                        },
                        {
                            path: 'ranking',
                            component: () => import('@/views/Discover/DiscoverChild/Ranking.vue')
                        },
                        {
                            path: 'songer',
                            component: () => import('@/views/Discover/DiscoverChild/Songer.vue')
                        },
                    ]
                },
                {
                    path: 'dj',
                    component: () => import('@/views/DJ/Dj.vue')
                },
                {
                    path: 'video',
                    component: () => import('@/views/Video/Video.vue')
                },
                {
                    path: 'recommend',
                    component: () => import('@/views/Recommend/Recommend.vue')
                },
            ]
        }
    ]
});

export default router