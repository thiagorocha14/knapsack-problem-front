import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from 'vue-router';


const app = createApp(App);

const routes = [
    { path: '/', component: () => import('./pages/HomePage.vue') },
    { path: '/distributed', component: () => import('./pages/DistributedPage.vue') },
    { path: '/intelligence', component: () => import('./pages/IntelligencePage.vue') },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

app.use(router);

app.mount('#app');
