export * from '@space-play/parta'
export * from '@space-play/partb'

import type { App } from 'vue'
export default {
    install(app: App) {
        console.log('已使用 space-play 包，但该包里什么都没有')
    },
    version: '0.0.1' // 这里只是作为示例，实际应该获取 package.json 里的版本
}