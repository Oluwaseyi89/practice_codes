import { createRouter, createWebHistory } from "vue-router";
import PoliticsView from '../views/PoliticsView';
import SportsView from '../views/SportsView';
import CelebritiesView from '../views/CelebritiesView';
import FashionView from '../views/FashionView';
import HomeView from '../views/HomeView';
import NewsDetailView from '../views/NewsDetailView';

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
        path: '/sports',
        name: 'Sports',
        component: SportsView
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
    },
    {
        path: '/detail/:news_title',
        name: 'NewsDetail',
        component: NewsDetailView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;