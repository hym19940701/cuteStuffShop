<template>
  <div class="searchpage">
    <div class="top-bar">
      <div class="content-wrapper">
        <img class="action-back" src="../../assets/ic_action_back.png" width="10%" height="10%*20/36" onclick="window.history.go(-1)"
             @click="DISPLAY_CHANGE">
        <div class="input-bar">
          <img class="editor-search" src="../../assets/bg_editor_search.9.png" >
          <input type="text" placeholder="搜遍天下萌物">
          <img class="search-delete" src="../../assets/btn_search_delete.png" alt="">
        </div>
        搜索
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations(['DISPLAY_CHANGE'])
    }
  }
</script>

<style lang="less" scoped>
  .searchpage {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 61;
  }

  .top-bar {
    width: 100%;
    height: 8%;
    background-color: red;
    overflow: hidden;
    .content-wrapper{
      position: relative;
      justify-content:space-between;
      top:40%;
      .action-back{
        width:30px;
        left:10px;
      }
      .input-bar {
        position: relative;
        display: inline-block;
        & .editor-search{
          width:30px;
        }
        & .search-delete{
          width:10px;
        }
        /*bottom: -60%;*/
      }
      .action-back{
      }
      span{
      }
    }
  }
</style>
