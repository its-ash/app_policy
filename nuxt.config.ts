import path from "node:path";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs')
        }
    },
    app: {
        baseURL: '/app_policy/'
    }
})
