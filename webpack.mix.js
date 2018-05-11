const path = require('path')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
    .js('resources/assets/js/app.js', 'public/js')
    .sourceMaps()
    .disableNotifications()
    .copyDirectory('resources/assets/img', 'public/img')
    .extract([
        'vue',
        'axios',
        'lodash',
        'vuetify'
    ])
    .version()

mix.webpackConfig({
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '@assets': path.join(__dirname, './resources/assets'),
            '@src': path.join(__dirname, './resources/assets/js'),
            '@pages': path.join(__dirname, './resources/assets/js/pages'),
            '@plugins': path.join(__dirname, './resources/assets/js/plugins'),
            '@layouts': path.join(__dirname, './resources/assets/js/layouts'),
            '@components': path.join(__dirname, './resources/assets/js/components'),
        }
    }
})

