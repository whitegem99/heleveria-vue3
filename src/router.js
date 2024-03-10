// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Frame1 from './views/Frame1.vue';
import Frame2 from './views/Frame2.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/frame1', component: Frame1 },
    { path: '/frame2', component: Frame2 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
