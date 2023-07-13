<template>
  <HeaderView/>
  <router-view :showErrorMessage="showErrorMessage" :showNetworkError="showNetworkError" :news="news" :getUITimeString="getUITimeString"></router-view>
  <!-- <HomeView :users="users"/> -->
</template>

<script>
// import HomeView from './views/HomeView.vue'
import HeaderView from './components/HeaderView.vue'
// import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    // HomeView
  }, 
  data() {
    return {
      news: [],
      politicsNews: [],
      showNetworkError: false,
      showErrorMessage: false
    }
  },
  methods: {

   async getNews() {

          let data;
          
          try {
            data = await fetch("http://localhost:8080/api/all_news");
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
          // this.checkNewsData();
          // setTimeout(() => {
          // }, 5000);
          this.news = modNews.reverse();
        }, 

    getUITimeString (unixTime) {
      // let sampTime = "2023-06-29T16:21:41.319Z";
      if(unixTime !== undefined) {
          let postDate = unixTime.split("T")[0];
          let postLngTime = unixTime.split("T")[1];
          let postHour = (parseInt(postLngTime.split(":")[0]) + 1).toString();
          let postMin = postLngTime.split(":")[1];
          let usablePostHour = parseInt(postHour) < 12 ? postHour : parseInt(postHour) - 12;
    
          let postYear = postDate.split("-")[0];
          let postMonth = postDate.split("-")[1];
          let postDay = postDate.split("-")[2];
    
          let usablePostMonth = "";
          let usablePostDay = ""
    
          switch(postMonth) {
            case "01": usablePostMonth = "Jan.";
            break;
            case "02": usablePostMonth = "Feb.";
            break;
            case "03": usablePostMonth = "Mar.";
            break;
            case "04": usablePostMonth = "Apr.";
            break;
            case "05": usablePostMonth = "May.";
            break;
            case "06": usablePostMonth = "Jun.";
            break;
            case "07": usablePostMonth = "Jul.";
            break;
            case "08": usablePostMonth = "Aug.";
            break;
            case "09": usablePostMonth = "Sep.";
            break;
            case "10": usablePostMonth = "Oct.";
            break;
            case "11": usablePostMonth = "Nov.";
            break;
            case "12": usablePostMonth = "Dec.";
            break;
          }
    
          if(postDay == "11" || postDay == "12" || postDay == "13") {
            usablePostDay = postDay + "th";
          } else if (postDay.split("")[1] == "1") {
            usablePostDay = postDay + "st";
          } else if (postDay.split("")[1] == "2") {
            usablePostDay = postDay + "nd";
          } else if (postDay.split("")[1] == "3") {
            usablePostDay = postDay + "rd";
          } else {
            usablePostDay = postDay + "th";
          }
    
          let dayHalf = "";
    
          let today = new Date().toISOString().split("T")[0];
          let yesterday = "";
          let todayDay = today.split("-")[2];
          if(todayDay.split("")[0] == "0" || todayDay == "10") {
            let newYestDay = parseInt(todayDay) - 1;
            let yesterdayDay = "0" + newYestDay;
            let todayArr = today.split("-").slice(0, -1);
            let yesterdayArr = [...todayArr, yesterdayDay]
            yesterday = yesterdayArr.join("-");
          } else {
            let newYestDay = parseInt(todayDay) - 1;
            let yesterdayDay = newYestDay.toString();
            let todayArr = today.split("-").slice(0, -1);
            let yesterdayArr = [...todayArr, yesterdayDay]
            yesterday = yesterdayArr.join("-");
    
          }
    
          console.log(yesterday);
    
          parseInt(postHour) < 12 ? dayHalf = "am" : dayHalf = "pm";
    
          let usabaleTime = usablePostHour + ":" + postMin + " " + dayHalf + "   " + usablePostDay + " " + usablePostMonth + " " + postYear;
          if ( today == postDate) { 
            usabaleTime = usablePostHour + ":" + postMin + " " + dayHalf + "   " + "Today";
          } else if ( yesterday == postDate) {
            usabaleTime = usablePostHour + ":" + postMin + " " + dayHalf + "   " + "Yesterday";
          }
          return usabaleTime;
      } else {
        return "";
      }
    }, 
  },

  created() {
   this.getNews()
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
