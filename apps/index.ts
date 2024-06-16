import { createApp } from 'vue'
import SpacePlay from 'space-play'
import * as a from 'space-play'
import {  CommonUtilsB } from 'space-play'
import App from './app.vue'
import { CommonUtilsA } from '@space-play/parta'

console.log(CommonUtilsA.copy({ a: 1 }))
console.log(CommonUtilsB.copy({ a: 1 }))

createApp(App).use(SpacePlay).mount('#app')