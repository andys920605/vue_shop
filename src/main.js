import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";



createApp(App).use(router).use(PrimeVue).mount('#app')

import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css'