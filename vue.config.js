const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    devServer:{
        proxy: {
            '/api': {
                target: 'https://api.bilibili.com/',
                headers: {
                    Referer: 'https://www.bilibili.com/'
                },
                pathRewrite: {
                    '^/api':''
                }
            },
            '/search': {
                target: 'https://s.search.bilibili.com/',
                headers: {
                    Referer: 'https://www.bilibili.com/'
                },
                pathRewrite: {
                    '^/search':''
                }
            },
            '/login': {
                target: 'https://passport.bilibili.com/',
                headers: {
                    Referer: 'https://www.bilibili.com/'
                },
                pathRewrite: {
                    '^/login':''
                }
            },
            '/nodejs': {
                target: 'http://localhost:3030/',
                pathRewrite: {
                    '^/nodejs':''
                }
            }
        }
    }
}