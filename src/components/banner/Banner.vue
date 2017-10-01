<template>
    <div class="banner">
      <ul class="clearfix">
        <li v-for="(item,index) in banners" v-if="index==5"><a href=""><img :src="item.image_url"></a></li>
        <li v-for="item in banners"><a href=""><img :src="item.image_url"></a></li>
        <li v-for="(item,index) in banners" :index="index" v-if="index==0"><a href=""><img :src="item.image_url"></a>
        </li>
      </ul>
      <ul class="bottom-btn">
        <li class="now"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [],
        transVar: window.transVar,
        index: Number
      }
    },
    methods: {
      banner () {
        window.transVar = {}
        window.transVar.transitionEnd = function (obj, callback) {
          if (typeof obj === 'object') {
            obj.addEventListener('webkitTransitionEnd', function () {
              callback && callback()
            })
            obj.addEventListener('transitionEnd', function () {
              callback && callback()
            })
          }
        }
        var banner = document.querySelector('.banner')

        var offsetWidth = banner.offsetWidth

        var imageBox = banner.querySelector('ul:first-child')

        var pageBox = banner.querySelector('ul:last-child')

        var pages = pageBox.querySelectorAll('li')

        function addTransition () {
          imageBox.style.transition = 'all 0.5s'
          imageBox.style.webkitTransition = 'all 0.5s'
        }

        function removeTransition () {
          imageBox.style.transition = 'none'
          imageBox.style.webkitTransition = 'none'
        }

        function setTranslateX (offsetX) {
          imageBox.style.transform = 'translateX(' + offsetX + 'px)'
          imageBox.style.webkitTransform = 'translateX(' + offsetX + 'px)'
        }

        var index = 1

        var timer = setInterval(function () {
          index++
          addTransition()
          setTranslateX(-index * offsetWidth)
          setPage()
        }, 3000)

        window.transVar.transitionEnd(imageBox, function () {
          if (index >= 7) {
            index = 1

            removeTransition()
            setTranslateX(-index * offsetWidth)
          } else if (index <= 0) {
            index = 6
            removeTransition()
            setTranslateX(-index * offsetWidth)
          }
        })
        // 小圆点的跟随
        function setPage () {
          for (var i = 0; i < pages.length; i++) {
            pages[i].className = ''
          }
          var num = index
          if (index >= 7) {
            num = 1
          } else if (index <= 0) {
            num = 6
          }
          pages[num - 1].className = 'now'
        }

        var startX = 0
        var moveX = 0
        var distanceX = 0
        var isMove = false

        imageBox.addEventListener('touchstart', function (e) {
          // 手机是没有鼠标的 不存在类似mouseenter事件,我们清除计时器,停止广告的自动轮播需要在手指按下时触发
          clearInterval(timer)
          startX = e.touches[0].clientX
        })

        imageBox.addEventListener('touchmove', function (e) {
          moveX = e.touches[0].clientX
          distanceX = moveX - startX
          var translateX = -index * offsetWidth + distanceX
          isMove = true
//          console.log(distanceX)
          removeTransition()
          setTranslateX(translateX)
        })
        imageBox.addEventListener('touchend', function (e) {
          if (Math.abs(distanceX) > offsetWidth / 3 && isMove) {
            // 滑动超过一定距离
            // 判断往左还是往右
            if (distanceX > 0) { // 左
              index--
            } else {
              index++
            }
          }
          addTransition()
          setTranslateX(-index * offsetWidth)
          setPage()
          startX = 0
          moveX = 0
          distanceX = 0
          isMove = false
          timer = setInterval(function () {
            index++
            addTransition()
            setTranslateX(-index * offsetWidth)
            setPage()
          }, 2000)
        })
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/bannerData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.banners = response.data.data.banners
            this.$nextTick(() => {
//              this.banner()
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    mounted () {
      this.banner()
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    .clearfix {
      width: 800%;
      transform: translateX(-12.5%);
      li {
        width: 12.5%;
        float: left;
        margin: 0;
        padding: 0;
      }
      li a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }

  .banner ul:last-child {
    position: absolute;
    bottom: 6px;
    left: 50%;
    margin-left: -60px;
    width: 90px;
    height: 6px;
    font-size: 0;
  }

  .banner ul:last-child li {
    float: left;
    margin-left: 10px;
    box-sizing: border-box;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .banner ul:last-child li:first-child {
    margin-left: 0;
  }

  .banner ul:last-child li.now {
    background: #fff;
  }

</style>
