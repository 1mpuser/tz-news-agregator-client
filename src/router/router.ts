import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import PostPage from '../pages/PostPage.vue'

const routes = [
    {
        path: '/',
        component : HomePage
    },
    {
        path: '/:id', 
        component : PostPage
    },


]
const router = createRouter(
    {
        routes,
        history : createWebHistory(process.env.BASE_URL)
    }
)
export default router;