<template>
    <button v-on:click="onClick()" :style="{background: color}">{{ text }}</button>
</template>

<script>
    export default {
        name: 'ButtonView',
        props: {
            text: String,
            color: String,
        },
        methods: {
            onClick() {
                this.$emit("toggle-add-task")
            }
        }
    }
</script>

<style scoped>
    button {
        background-color: aqua;
        border-radius: 4px;
        height: 40px;
        color: white;
        font-size: 1.1em;
        border-color: white;
    }
</style>