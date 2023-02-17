import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/index.vue'),
            children: [
                {
                    path: 'discover',
                    component: () => import('@/views/Discover/Discover.vue')
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