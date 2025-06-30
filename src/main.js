import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// jQuery
import jQuery from 'jquery'
window.$ = jQuery

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Clean Blog
import '@/assets/css/styles.css'
import '@/assets/js/scripts.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
