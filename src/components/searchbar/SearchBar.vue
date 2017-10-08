<template>
  <div>
    <div class="searchBar">
    </div>
    <div class="logo">
      <img src="../../assets/icon_logo.png">
    </div>
    <router-link to="./searchpage">
      <div class="searchbtn" @click="DISPLAY_CHANGE">
        <img src="../../assets/btn_search_white.png">
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        imgsrc: require('../../assets/btn_search_black.png')
      }
    },
    methods: {
      ...mapMutations(['DISPLAY_CHANGE']),
      search () {
        let self = this
        let search = document.querySelector('.searchBar')
        let searchbtn = document.querySelector('.searchbtn img')
        let logo = document.querySelector('.logo img')
        let height = 200
        let opacity = 0
        window.onscroll = function () {
          let top = document.body.scrollTop
          if (top < height * 0.6) {
            self.imgsrc = require('../../assets/btn_search_white.png')
            searchbtn.src = self.imgsrc
            opacity = (0.99 * (top / height)).toFixed(2)
          } else {
            opacity = 1
            self.imgsrc = require('../../assets/btn_search_black.png')
            searchbtn.src = self.imgsrc
          }
          search.style.opacity = opacity
          logo.style.opacity = opacity
          searchbtn.style.backgroundColor = `rgba(0, 0, 0, $(opacity))`
        }
      }
    },
    mounted () {
      this.search()
    }
  }

</script>

<style lang="less" scoped>
  .searchBar {
    position: fixed;
    width: 100%;
    height: 34px;
    background-color: red;
    opacity: 0;
    z-index: 60;
  }

  .searchbtn {
    position: fixed;
    right: 0;
    top: 2px;
    z-index: 60;
    width: 40px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .logo {
    position: fixed;
    z-index: 60;
    height: 30px;
    left: 38%;
    img {
      height: 100%;
      opacity: 0;
    }
  }

</style>
