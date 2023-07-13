<template>
    <div class="home-div">
        <div class="error-msg" v-show="showErrorMessage">
            Error fetching news, try refreshing your browser...
        </div>
        <div v-show="showNetworkError">
            <LoaderView/>
        </div>
        <div :class="showDetails ? 'detail-div': 'detail-alt'" v-show="showDetails">
            <p>News by: <strong>{{ this.currentNews.authorName }}</strong></p>
            <p class="detail-time">{{ getUITimeString(currentNews.datePosted) }}</p>
            <p class="bold-title">{{ this.currentNews.newsTitle }}</p>
            <video class="news-video" height="300" width="500" :src="this.currentNews.newsVideo" :poster="this.currentNews.newsPoster" controls>
                No Video Available
            </video>
            <p>{{ this.currentNews.newsContent }}</p>
            <div class="comment-like">
                <div class="like-div" >
                    <div @click="toggleLiked()" class="like-img-grp">
                        <img v-show="isLikedToggled" class="icon-color" alt="like-icon" height="35" width="35" src="../assets/Likee_purple.svg"/>
                        <img v-show="!isLikedToggled"  class="icon-color" alt="like-icon" height="35" width="35" src="../assets/Likee.svg"/>
                    </div>
                    <p>11567</p>
                </div>
                <div class="comment-div">
                    <img alt="comment-icon" height="35" width="35" src="../assets/Comment.svg"/>
                    <p>350</p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    import LoaderView from './LoaderView.vue';
    export default {
        name: 'NewsDetailView',
        components: {
            LoaderView
        },
        props: {
            getUITimeString: Function
        }, 
        data () {
            return {
                currentNews: {},
                showNetworkError: false,
                showErrorMessage: false,
                showDetails: false,
                isLikedToggled: false
            }
        }, 
        methods: {

            getWindowLocation () {
                let  location  = window.location;
                return location.href;
            },

            toggleLiked () {
                this.isLikedToggled = !this.isLikedToggled;
            },

            getNewsTitle (window_location) {
                let raw_title = window_location.split("/").pop();
                let title = raw_title.split("%20").join(" ");
                return title;
            }, 

            async fetchCurrentNews () {
                let win_loc = this.getWindowLocation();
                let news_title = await this.getNewsTitle(win_loc);
                let data;
                
                try {
                    data = await fetch(`http://localhost:8080/api/news_title/${news_title}`);
                    this.showDetails = true;
                } catch (err) {
                    this.showNetworkError = true;
                    this.showDetails = false;
                    console.log(err.message);
                    setTimeout(() => {
                        this.showNetworkError = false;
                        this.showErrorMessage = true;
                    }, 10000);
                }
  
                let myNews;
                
                try {
                    myNews = await data.json();
                } catch (err) {
                    console.log(err.message);
                }
                //   console.log(myNews);
                    if(myNews.newsPoster !== null && myNews.newsPoster !== undefined && myNews.newsVideo !== null  && myNews.newsVideo !== undefined) {
                        let photoObj = myNews.newsPoster.split('.');
                        let vidObj = myNews.newsVideo.split('.');
                        let newVideo;
                        let newPhoto;
                    
                        vidObj.length > 2 ? newVideo = vidObj.slice(0, -1).join(".") : newVideo = vidObj[0];
                        photoObj.length > 2 ? newPhoto = photoObj.slice(0, -1).join(".") : newPhoto = photoObj[0];
                        
                        myNews.newsPoster = "http://localhost:8080/uploads/" + newPhoto;
                        myNews.newsVideo = "http://localhost:8080/videos/" + newVideo;
                        return myNews;
                    }
                    
                console.log(myNews);
                return myNews;
            }
        },
        async created () {
           this.currentNews = await this.fetchCurrentNews();
        }
    }
</script>

<style>
.detail-div {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-self: center;
    margin-top: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

.like-div {
    display: flex;
    flex-direction: row;
    width: 100px;
    justify-content: space-between;
}

.comment-div {
    display: flex;
    flex-direction: row;
    width: 100px;
    justify-content: space-between;

}

.like-img-grp {
    cursor: pointer;
    height: 35px;
    width: 35px;
}


.comment-like {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 2px solid purple;
    border-bottom: 2px solid purple;
    padding-top: 10px;
}

.comment-like p {
    color: purple;
    font-weight: bold;
}
.icon-color {
    filter: invert(48%) purple(100%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

.detail-alt {
    display: none;
}

.news-video {
    align-self: center;
}

.bold-title {
    font-weight: bold;
}

.detail-time {
    color: purple;
    font-weight: bold;
}

hr {
    background-color: gray;
}
</style>