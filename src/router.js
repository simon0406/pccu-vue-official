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
            redirect: { name: "lesson1" },
            component: () => import('@/frames/basic.vue'),
            children: [
                {
                    path: 'lesson1',
                    name: 'lesson1',
                    component: () => import('@/lessons/lesson1.vue'),
                },
                {
                    path: 'lesson2',
                    name: 'lesson2',
                    component: () => import('@/lessons/lesson2.vue'),
                }
            ]
        },
    ]
})
