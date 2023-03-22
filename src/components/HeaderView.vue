<template>
    <div class='header-div'>
      <a href="/">
        <div class='logo-div'>
          <img alt='logo' src='../assets/seyi_blog_logo.png' height='50px' />
        </div>
      </a>
      <div class='menus'>
          <div class='large-menu'>
            <ul class='nav nav-tab'>
              <li><a href='/politics'>Politics</a></li>
              <li><a href='/sport'>Sport</a></li>
              <li><a href='/celebrities'>Celebrities</a></li>
              <li><a href='/fashion'>Fashion</a></li>
            </ul>
          </div>
          <div class='small-menu'>
            <div id='navBtn' class='nav-btn' @click="toggleMenu()">
              <img alt='nav-pill' src='nav.png' height='25px' />
            </div>
            <div v-show="this.showMenu" class='vertical-menu' id='verticalMenu'>
              <ul>
              <li><a href='/politics'>Politics</a></li>
              <li><a href='/sport'>Sport</a></li>
              <li><a href='/celebrities'>Celebrities</a></li>
              <li><a href='/fashion'>Fashion</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>   
</template>

<script>
    export default {
        name: 'HeaderView',
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggleMenu () {
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>

<style scoped>

@media screen and (min-width: 414px) {
    .header-div {
        background: purple;
        margin-top: -20px;
        margin-left: -10px;
        margin-right: -10px;
        height: 70px;
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: visible;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .logo-div {
        margin-top: 10px;
        padding-left: 10px;
        max-width: 30px;
    }

    .large-menu {
        display: none;
    }

    .nav-btn {
        width: 100%;
        height: 100%;
        margin-left: 340px;
        margin-right: 10px;
        margin-top: 25px;
    }

    .vertical-menu {
        background-color: purple;
        width: 150px;
        height: 150px;
        padding-top: 15px;
        margin-left: 225px;
        margin-top: -35px;
        z-index: 2;
    }

    .vertical-menu ul {
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.1em;
        line-height: 1.5em;
        color: yellow;
    }

    .vertical-menu a {
        color: yellow;
        text-decoration: none;
    }

    .vertical-menu a:active {
        color: red;
    }

    /* .nav-tab {
        font-family: Arial, Helvetica, sans-serif;
        width: 200px;
        font-size: 1.3em;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: yellow;
        
    } */
}

@media screen and (min-width: 768px) {
    .large-menu {
        display: none;
    }

    .logo-div {
        margin-top: 10px;
        padding-left: 10px;
        max-width: 30px;
    }

    .vertical-menu {
        margin-left: 585px;
    }

    .nav-btn {
        margin-left: 700px;
    }
}

@media screen and (min-width: 1024px) {

    .header-div {
        background: purple;
        margin-top: -20px;
        margin-left: -10px;
        margin-right: -10px;
        height: 70px;
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: visible;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


    .nav-tab {
        font-family: Arial, Helvetica, sans-serif;
        min-width: 1150px;
        /* margin-left: -250px; */
        font-size: 1.3em;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: yellow;
        
    }

    .nav-tab a {
        color: yellow;
        text-decoration: none;
        text-transform: none;
    }

    .nav-tab a:active {
        color: red;
        text-decoration: none;
        text-transform: none;
    }

    .large-menu {
        display:contents;
        min-width: 800px;
    }

    .logo-div {
        margin-top: 10px;
        padding-left: 10px;
        max-width: 30px;
    }

    .nav-btn {
        display: none;
    }

    .vertical-menu {
        display: none;
    }
}
</style>