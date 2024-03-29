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
    chainWebpack: config =>{
        config.plugin('html').tap(args => {
            args[0].title = "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili";
        return args;
        })
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
            '/video': {
                target: 'https://cn-sxxa-cu-02-02.bilivideo.com/',
                headers: {
                    Referer: 'https://www.bilibili.com/'
                },
                pathRewrite: {
                    '^/video':''
                }
            },
            '/apivc': {
                target: 'https://api.vc.bilibili.com/',
                headers: {
                    Referer: 'https://t.bilibili.com/'
                },
                pathRewrite: {
                    '^/apivc':''
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
            },
        }
    }
}