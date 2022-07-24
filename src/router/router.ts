import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import PostPage from '../pages/PostPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegistrationPage from '../pages/RegistrationPage.vue'

const routes = [
    {
        path: '/',
        component : HomePage
    },
    {
        path: '/:id', 
        component : PostPage
    },
    {
        path: '/login',
        component : LoginPage
    }, 
    {
        path: '/registration',
        component : RegistrationPage
    }

]
const router = createRouter(
    {
        routes,
        history : createWebHistory(process.env.BASE_URL)
    }
)
export default router;