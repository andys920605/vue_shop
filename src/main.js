import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router'
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";



const app = createApp(App);
app.use(Router);
app.use(PrimeVue);
app.mount('#app');


import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/js/bootstrap.min.js';


