import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap";
import VueTheMask from 'vue-the-mask'
import ModalCustomer from "./components/ModalCustomer.vue"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "@/style.css"



const app = createApp(App);
app.use(router);
app.use(bootstrap);
app.use(VueTheMask);
app.component('ModalCustomer', ModalCustomer);



app.mount('#app');