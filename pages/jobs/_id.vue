<template>
    <v-layout>
        <JobPost :job="currentJobPost" :views="views('/jobs/' + currentJobPost.id)" />
    </v-layout>

</template>

<script>
    import JobPost from '../../components/JobPost'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    // import UrlUtils from '../../utils/urlUtils'
    export default {
        components: {
            JobPost
        },

        data () {
            return {
                currentJobPost: {}
            }
        },

        async asyncData ({ params, error }) {
      try {
        // const uri = params.id;
        // const id = UrlUtils.extractID(uri);
        // console.log(id);
        // console.log('logged')
        const { data } = await axios.get(`http://localhost:3000/api/photos/${params.id}`);
        return { currentJobPost: data }
      } catch (error) {
        // error({ message: "No jobs found", statusCode: 404 });
        console.log(error.message);
      }
    },

        head () {
            return {
                title: this.getMetaTitle(),
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: this.getMetaDescription()
                    },
                ]
            }
        },


        computed: mapGetters({
            views: 'getViews'
        }),

        methods: {
            getMetaTitle () {
                return this.currentJobPost.title + " at " + this.currentJobPost.compnay;
            },

            getMetaDescription () {
                return "Apply for the position" + this.currentJobPost.title + " at " + this.currentJobPost.compnay;
            }
        },

        middleware: 'views'

    }
</script>