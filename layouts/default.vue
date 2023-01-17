<template>
    <v-app>
        <AppHeader />
        <nuxt />
    </v-app>
</template>

<script>
    import AppHeader from '../components/AppHeader.vue';
    export default {
        name: 'DefaultApp',
        components: {
            AppHeader
        }
    }
</script>