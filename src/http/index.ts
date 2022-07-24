import dotenv from 'dotenv'
import axios from 'axios';

const $simpleHost = axios.create({
    baseURL: 'http://localhost:8000/'
});
const $authHost = axios.create({
    baseURL : process.env.API_URL
})
const authInterceptor = (config : any) => {
    config.headers.authoriztion = `Bearer ${localStorage.getItem('token')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $authHost, 
    $simpleHost
}