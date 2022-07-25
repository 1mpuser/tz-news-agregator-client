import dotenv from 'dotenv'
import axios from 'axios';

const $simpleHost = axios.create({
    baseURL: 'http://localhost:8000/'
});
const $authHost = axios.create({
    baseURL : 'http://localhost:8000/'
})
const authInterceptor = (config : any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $authHost, 
    $simpleHost
}