<template>
  <v-layout
    column
    justify-center
    align-center
  >
  <v-container>
    <v-row>
      <v-col
        cols="15"
        class="pl-10 ma-10"
        justify-center
        align-center
      >
        <div v-for="job in allJobs" :key="job.id"> 
          <nuxt-link :to="'/jobs/' + job.id">
            <JobPostTitle :job="job" :views="views('/jobs/' + job.id)"
              v-if="job.thumbnailUrl !== null && job.title !== null"
            />
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>

  </v-layout>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import JobPostTitle from '../components/JobPostTitle.vue';
  export default {
    name: 'IndexPage',
    components: {  
      JobPostTitle
    },

    middleware: 'test',

    data () {
      return {
        allJobs: [

        ]
      }
    },
    head () {
            return {
                title: "Job Postings",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "All Job Postings from GitHub.",
                    },
                ]
            }
        },

    computed: mapGetters({
      views: 'getViews'
    }),
        
    async asyncData ({ params, error }) {
      try {
        const { data } = await axios.get('http://localhost:3000/api/photos');
        return { allJobs: data }
      } catch (error) {
        // error({ message: "No jobs found", statusCode: 404 });
        console.log(error.message);
      }
    },
    methods: {
      buildUrl (job) {
        return '/jobs' + this.$slugify(job.id, job.title);
      }
    }
  }
</script>
