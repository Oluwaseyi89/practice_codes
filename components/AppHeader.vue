<template>
    <v-container>
        <div className="text-center">
            <v-menu top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-on="on"
                        color="primary"
                        dark
                    >
                        Menu
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item  
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <nuxt-link :to="item.to">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </nuxt-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "AppHeader",
        data: () => ({
            items: [
                { title: 'Home', to: { name: 'index' }},
                { title: 'About', to: { name: 'about' }}
            ]
        })
    }
</script>

<style scoped>
    .text-center {
        text-align: center;
    }
</style>