<template>
    <v-card>
        <v-img :src="job.thumbnailUrl"/>
        <v-divider/>
        <v-card-title>
            <p>
                {{ job.title }}
            </p>
            <br/>
            <p>
                Views: {{ views }}
            </p>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "JobPostTitle",
        props: {
            job: {
                type: Object,
                required: false,
                default: () => {}
            },
            views: {
                type: Number,
                required: false,
                default: () => 0
            }
        }
    }
</script>