<template>
  <div class="searchpage">
    <div class="top-bar">
      <div class="content-wrapper">
        <img class="action-back" src="../../assets/ic_action_back.png" width="10%" height="10%*20/36" onclick="window.history.go(-1)"
             @click="DISPLAY_CHANGE">
        <div class="input-bar">
          <img class="editor-search" src="../../assets/bg_editor_search.9.png" >
          <input type="text" placeholder="搜遍天下萌物">
          <img class="search-delete" src="../../assets/btn_search_delete.png">
        </div>
        <span>
          搜索
        </span>
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
    height: 7%;
    background-color: red;
    overflow: hidden;
    .content-wrapper{
      position: relative;
      width:100%;
      height:100%;
      .action-back{
        position: absolute;
        display: inline-block;
        width:35px;
        height:35px;
        left:10px;
        top:8px;
      }
      .input-bar {
        position: relative;
        display: inline-block;
        width:100%;
        height:100%;
        top:10px;
        left:50px;
        & .editor-search{
          position: absolute;
          width:60px;
        }
        input{
          position: absolute;
          left:35px;
          border-radius: 15px;
          border: 0;
          height: 26px;
          width: 230px;
          outline:none ;
        }
        .search-delete{
          position: absolute;
          width:15px;
          left:240px;
          top:7px;
        }
      }


      span{
        position: absolute;
        display: inline-block;
        font-size: 17px;
        color: white;
        right:15px;
        bottom:13px;
      }
    }
  }
</style>
