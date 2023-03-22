import { createRouter, createWebHistory } from "vue-router";
import PoliticsView from '../views/PoliticsView';
import SportView from '../views/SportView';
import CelebritiesView from '../views/CelebritiesView';
import FashionView from '../views/FashionView';
import HomeView from '../views/HomeView';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/politics',
        name: 'Politics',
        component: PoliticsView
    },
    {
        path: '/sport',
        name: 'Sport',
        component: SportView
    },
    {
        path: '/celebrities',
        name: 'Celebrities',
        component: CelebritiesView
    },
    {
        path: '/fashion',
        name: 'Fashion',
        component: FashionView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;