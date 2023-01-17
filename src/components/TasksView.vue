<template>
    <div class="task-div" v-for="task in tasks" :key="task.id">
        <TaskView @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>

    import TaskView from './TaskView'

    export default {
        name: "TasksView",
        components: {
            TaskView
        },
        props: {
            tasks: Array
        },
        emits: ['delete-task', 'toggle-reminder']
    }
</script>

<style scoped>
    .task-div {
        text-align: left;
        padding-left: 35px;
        padding-right: 35px;
    }
</style>