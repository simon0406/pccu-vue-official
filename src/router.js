import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // eslint-disable-next-line
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            redirect: { name: "resume" },
            component: () => import('@/frames/basic.vue'),
            children: [
                {
                    path: 'resume',
                    name: 'resume',
                    component: () => import('@/lessons/1.resume.vue'),
                },
                {
                    path: 'overview',
                    name: 'overview',
                    component: () => import('@/lessons/2.overview.vue'),
                },
                {
                    path: 'html',
                    name: 'html',
                    component: () => import('@/lessons/3.html.vue'),
                },
                {
                    path: 'css',
                    name: 'css',
                    component: () => import('@/lessons/4.css.vue'),
                },
                {
                    path: 'practice',
                    name: 'practice',
                    component: () => import('@/lessons/5.practice.vue'),
                },
                {
                    path: 'practice2',
                    name: 'practice2',
                    component: () => import('@/lessons/6.practice2.vue'),
                },
                {
                    path: 'practice3',
                    name: 'practice3',
                    component: () => import('@/lessons/7.practice3.vue'),
                },
                {
                    path: 'RWDpractice',
                    name: 'RWDpractice',
                    component: () => import('@/lessons/8.RWDpractice.vue'),
                },
                {
                    path: 'RWDpractice2',
                    name: 'RWDpractice2',
                    component: () => import('@/lessons/9.RWDpractice2.vue'),
                },
                {
                    path: 'RWDpractice3',
                    name: 'RWDpractice3',
                    component: () => import('@/lessons/10.RWDpractice3.vue'),
                },
                {
                    path: 'AUM',
                    name: 'AUM',
                    component: () => import('@/lessons/11.AUM.vue'),
                },
                {
                    path: 'Valuation',
                    name: 'Valuation',
                    component: () => import('@/lessons/12.Valuation.vue'),
                },
                {
                    path: 'myAction',
                    name: 'myAction',
                    component: () => import('@/lessons/myAction.vue'),
                },
                {
                    path: 'MyCommission',
                    name: 'MyCommission',
                    component: () => import('@/lessons/13.MyCommission.vue'),
                },
                {
                    path: 'MyActionLog',
                    name: 'MyActionLog',
                    component: () => import('@/lessons/14.MyActionLog.vue'),
                },
                {
                    path: 'Top',
                    name: 'Top',
                    component: () => import('@/lessons/15.Top.vue'),
                },
                {
                    path: 'WatchList',
                    name: 'WatchList',
                    component: () => import('@/lessons/16.WatchList.vue'),
                },
                {
                    path: 'History',
                    name: 'History',
                    component: () => import('@/lessons/17.History.vue'),
                }
            ]
        },
    ]
})
