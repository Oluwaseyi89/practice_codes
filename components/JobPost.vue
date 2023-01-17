<template>
    <v-container>
        <v-card>
            <v-img :src="job.thumbnailUrl"/>
            <v-divider/>
            <v-card-title>
                <p>
                    {{ job.title }} - Views: {{ views }}
                </p>                
            </v-card-title>
            <v-divider/>
            <v-card-text v-html="job.description"/>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'JobPost',
        props: {
            job: {
                type: Object,
                required: true,
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