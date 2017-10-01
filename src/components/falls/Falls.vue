<template>
  <div class="falls" v-if="showFalls">
    <div>
      <ul>
        <li v-for="item in fallsData" class="img-box">
          <div class="main-img">
            <a :href="item.content_url"><img :src="item.cover_image_url"></a>
            <div class="bottom-triangle"></div>
          </div>
          <div class="hide">
            <ul class="sub-imgbox">
              <li v-for="subitem in item.post_items" class="sub-img">
                <a href=""><img :src="subitem.cover_image_url" alt=""></a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fallsData: []
      }
    },
    computed: {
      showFalls () {
        return this.$store.state.showFalls
      }
    },
    methods: {
    },
    created () {
      let self = this
      this.$axios.get('/api/fallsData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.fallsData = response.data.data.posts
            this.$nextTick(() => {
//              this.banner()
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less" scoped>
  .img-box {
    width: 100%;
    height: 300px;
    overflow: hidden;
    .main-img {
      position: relative;
      width: 100%;
      height: 200px;
      a {
        width: 100%;
        height: 100%;
        display: block;
      }
      a img {
        width: 100%;
        height: 100%;
      }
      .bottom-triangle{
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left:-10px ;
        width:0;
        height:0;
        border-width: 0 10px 10px 10px;
        border-color: white transparent;
        border-style: solid;
        z-index: 50;
      }
    }
    .hide{
      width: 100%;
      height:100px;
      overflow: auto;
    }
    .sub-imgbox {
      width: 700px;
      height: 100%;
      padding-top:10px;
      .sub-img {
        width: 100px;
        height: 100%;
        float: left;
      }
      a{
        display: inline-block;
        width:100px;
        height: 100%;
      }
      a img {
        width: 100px;
        height: 100%;
      }
    }
  }

</style>
