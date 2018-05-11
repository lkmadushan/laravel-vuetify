import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = make(routes)

export default router

/**
 * Create a new router instance.
 *
 * @param  {Array} routes
 * @return {Router}
 */
function make(routes) {
    const router = new Router({
        routes,
        scrollBehavior,
        mode: 'history',
    })

    router.beforeEach((to, from, next) => {
        setLayout(router, to)
        next()
    })

    return router
}

/**
 * Set the application layout from the matched page component.
 *
 * @param {Router} router
 * @param {Route} to
 */
function setLayout(router, to) {
    const [component] = router.getMatchedComponents({ ...to })

    if (component) {
        router.app.$nextTick(() => {
            router.app.setLayout(component.layout || '')
        })
    }
}

/**
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }

    const position = {}

    if (to.hash) {
        position.selector = to.hash
    }

    if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
    }

    return position
}
