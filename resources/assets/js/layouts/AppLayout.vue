<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
        >
            <app-navigation/>
        </v-navigation-drawer>
        <v-toolbar
            color="primary"
            dark
            dense
            app
            fixed
            clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <transition name="page" mode="out-in">
                    <router-view/>
                </transition>
            </v-container>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
import AppFooter from '@components/AppFooter'
import AppNavigation from '@components/AppNavigation'

export default {
    name: 'AppLayout',

    components: {
        AppFooter,
        AppNavigation,
    },

    data: () => ({
        drawer: true,
        title: window.config.appName,
    }),
}
</script>
