<template>
    <div class="home-div">
        <div class="error-msg" v-show="showErrorMessage">
            Error fetching news, try refreshing your browser...
        </div>
        <div v-show="showNetworkError">
            <LoaderView/>
        </div>
        <div class="highlight-div" v-for="article in this.fashionNews" :key="article.newsTitle">
            <div class="time-div">
                <p class="news-time"><span style="font-size: 1.3em;">&raquo; </span>{{ getUITimeString(article.datePosted) }}</p>
            </div>
            <div class="poster-title">
                <div class="news-poster">
                    <img :alt="article.newsPoster" height="150" width="150" :src="article.newsPoster"/>    
                </div>       
                <a :href="getDetailUrl(article.newsTitle)" class="news-title"><h3 @click="saveClickedNews(article)"  >{{ article.newsTitle }}</h3></a> 
            </div>
        </div>
    </div>
</template>

<script>
        import LoaderView from './LoaderView.vue'
    export default {
        name: 'FashionView',
        components: {
            LoaderView
        },
        props: {
            getUITimeString: Function,
            saveClickedNews: Function,
        },
        data () {
            return {
                fashionNews: [],
                showNetworkError: false,
                showErrorMessage: false
            }
        },
        methods: {
            async getFashionNews () {
                
                let data; 
                
                try{
                    data = await fetch("http://localhost:8080/api/news_category/fashion");
                } catch (err) {
                    console.log(err.message);
                    this.showNetworkError = true;
                    setTimeout(() => {
                        this.showNetworkError = false;
                        this.showErrorMessage = true;
                    }, 10000);
                }
                let myNews = await data.json();
                console.log(myNews);
                let modNews = await myNews.map((news) => {
                    if(news.newsPoster !== null && news.newsVideo !== null) {
                        let photoObj = news.newsPoster.split('.');
                        let vidObj = news.newsVideo.split('.');
                        let newVideo;
                        let newPhoto;
                    
                        vidObj.length > 2 ? newVideo = vidObj.slice(0, -1).join(".") : newVideo = vidObj[0];
                        photoObj.length > 2 ? newPhoto = photoObj.slice(0, -1).join(".") : newPhoto = photoObj[0];
                        
                        news.newsPoster = "http://localhost:8080/uploads/" + newPhoto;
                        news.newsVideo = "http://localhost:8080/videos/" + newVideo;
                        return news;
                    }
                    return news;
                });
                console.log(modNews);
                this.fashionNews = modNews.reverse();
            },

            getDetailUrl (news_title) {
                let detailUrl = `/detail/${news_title}`;
                return detailUrl;
            },   
        },
        created () {
            this.getFashionNews();
        }
    }
</script>

<style>
</style>
