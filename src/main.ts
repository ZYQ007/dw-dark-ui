import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

import './assets/main.css'

// import '@/assets/antd_custom.less'
import '@/assets/dark.less'
// import 'ant-design-vue/dist/antd.dark.less'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)


app.mount('#app')
