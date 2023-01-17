<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonView v-show="homePage" @toggle-add-task="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>
    import ButtonView from './ButtonView';
    export default {
        name: 'HeaderView',
        props: {
            title: String,
            showAddTask: Boolean
        },
        components: {
            ButtonView,
        },
        computed: {
            homePage () {
                if(this.$route.path === '/') return true;
                else return false;
            }
        }

    }
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    h1 {
        text-align: center;
    }
</style>