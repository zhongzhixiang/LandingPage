import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';
import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zhCN from './lang/zh-CN'


const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
  locale: 'en', // 默认语言
  fallbackLocale: 'zh-CN', // 备用语言
  messages: {
    'en': en,
    'zh-CN': zhCN
  }
})
const app = createApp(App)
 app.use(i18n)
app.use(router)
app.use(VueAwesomeSwiper)
app.mount('#app')
