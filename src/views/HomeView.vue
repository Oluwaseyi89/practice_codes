<template>
    <div class="home-div">
        <div class="error-msg" v-show="showErrorMessage">
            Error fetching news, try refreshing your browser...
        </div>
        <div v-show="showNetworkError">
            <LoaderView/>
        </div>
        <div class="highlight-div"  v-for="article in news" :key="article.newsTitle">
            <div class="time-div">
                <p class="news-time"><span style="font-size: 1.3em;">&raquo; </span>{{ getUITimeString(article.datePosted) }}</p>
            </div>
            <div class="poster-title">
                <div class="news-poster">
                    <img :alt="article.newsPoster" height="150" width="150" :src="article.newsPoster"/>    
                </div>       
                <a :href="getDetailUrl(article.newsTitle)" class="news-title"><h3>{{ article.newsTitle }}</h3></a> 
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    import LoaderView from './LoaderView.vue'
    // import axios from 'axios'
    export default {
        name: 'HomeView',
        components: {
            LoaderView
        },
        props:{
            news: Array,
            getUITimeString: Function,
            showNetworkError: Boolean,
            showErrorMessage: Boolean
        },
        data() {
            return {
                uss: [], 
            }
        },

       
        methods: {
            useReducer (reducer, iState) {
                const state = reactive(iState);
                const dispatch = (action) => {
                    reducer(state, action)
                }
                return [state, dispatch];
            },

            reducer (state, action) {
                switch (action.type) {
                    case 'INCREASE':
                        state.counter++;
                }
            },

            iState () {
                return {
                    counter: 0,
                }
            }, 
            getDetailUrl (news_title) {
                let detailUrl = `/detail/${news_title}`;
                return detailUrl;
            },   
        },
        
    }
</script>

<style>
   @media screen and (min-width: 414px) {
    .news-poster {
        height: 150px;
        width: 150px
    }

    .poster-title {
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .highlight-div {
        width: 60%;
        align-self: center;
        border: solid purple 2px;
        border-radius: 5px;
        margin-bottom: 15px;
        margin-top: 10px;
        box-shadow: 3px 3px 5px 3px silver;
        padding-bottom: 15px;
    }

    .home-div {
        display: flex;
        flex-direction: column;
        align-content: center;
        font-family: Arial, Helvetica, sans-serif;
    }

    .news-time {
        font-weight: bold;
        font-size: 1.3em;
        color: white;
        margin-top: 0px;
    }

    .news-title {
        font-size: 1.3em;
        cursor: pointer;
        text-decoration: none;
        text-transform: none;
        color: purple;
        overflow: hidden;
    }

    .time-div {
        background-color: purple;
    }
   }
</style>