<template>
    <v-list dense>
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            exact
        >
            <v-list-tile-action>
                <v-icon v-text="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title v-text="item.title"/>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    name: 'AppNavigation',

    data: () => ({
        items: [
            { title: 'Dashboard', icon: 'dashboard', route: { name: 'dashboard' } },
            { title: 'Settings', icon: 'settings', route: { name: 'settings' } },
            { title: 'Account', icon: 'account_box', route: { name: 'account' } },
        ],
    }),
}
</script>
