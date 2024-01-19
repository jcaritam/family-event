import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import router from './router'

import { faPhone, faTicket, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)

app.use(createPinia())
app.use(router)

library.add(
  faPhone,
  faTicket,
  faLocationDot
);

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
