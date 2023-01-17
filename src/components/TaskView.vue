<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'task-reminder' : '', 'single-task']">     
        <h3>{{ task.text }} <span @click="$emit('delete-task', task.id)" >&times;</span></h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>

    export default {
        name: "TaskView",
        props: {
            task: Object
        },
    }
</script>

<style scoped>

    .single-task {
        border: 1px solid gray;
        background: #f4f4f4;
        margin-top: 10px;
        padding-left: 5px;
        cursor: pointer;
    }

    .task-reminder {
        border-left: 5px solid green;
    }

    h3 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 15px;
    }

    span {
        color: red;
    }
</style>