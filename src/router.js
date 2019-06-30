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
                    path: 'html',
                    name: 'html',
                    component: () => import('@/lessons/2.html.vue'),
                },
                {
                    path: 'css',
                    name: 'css',
                    component: () => import('@/lessons/3.css.vue'),
                }
            ]
        },
    ]
})
