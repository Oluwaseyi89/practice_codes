<template>
    <v-container>
        <h1>About Job Postings App</h1>
        <p>This app will allow us to show all the jobs</p>
    </v-container>
</template>

<script>
    export default {
        head () {
            return {
                title: "About Job Posting App",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "Find the best programming jobs here.",
                    },
                ]
            }
        }
    }
</script>