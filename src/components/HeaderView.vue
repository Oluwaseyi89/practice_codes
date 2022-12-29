<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonView text="Add Task" color="green"/>
    </header>
    <div v-for="task in tasks" :key="task.id">
        <h3>{{ task.day + " - " + task.text }}</h3>
    </div>
</template>

<script>
    import ButtonView from './ButtonView';
    export default {
        name: 'HeaderView',
        props: {
            title: String,
            tasks: Array,
        },
        components: {
            ButtonView,
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