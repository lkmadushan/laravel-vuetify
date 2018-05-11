import Vue from 'vue'
import router from './router'
import { axios } from '@plugins'
import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
} from 'vuetify'
import App from '@components/App'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions,
    },
})

Vue.config.productionTip = false

Vue.prototype.$http = axios.create()

new Vue({
    el: '#app',
    router,
    ...App,
})
