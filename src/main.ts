import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
 import store from './store'


const app = createApp(App)
app.provide("$store", store);
app.use(router).use(store).mount('#app')
