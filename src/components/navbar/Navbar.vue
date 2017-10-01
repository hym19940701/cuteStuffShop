<template>
  <div class="navbar">
    <div>
      <ul class="img-box">
        <li v-for="item in navData"><a href=""><img :src="item.image_url" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navData: []
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/navData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.navData = response.data.data.secondary_banners
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
  ::-webkit-scrollbar{width:0px}
  .navbar {
    width: 100%;
    height: 90px;
    overflow: auto;
    .img-box{
      width:600px;
      /*overflow: hidden;*/
      li{
        width:75px;
        height:75px;
        padding: 5px;
        float: left;
         img{
          width:100%;
          height:100%;
        }
      }
      li:first-child{
        padding-left: 0;
      }
    }
  }
</style>
