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
      left:3%;
      top:40%;
      .action-back{
        width:35px;
        left:10px;
      }
      .input-bar {
        position: relative;
        display: inline-block;
        bottom:43px;
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
        }
        .search-delete{
          position: absolute;
          width:15px;
          left:240px;
          top:7px;
        }
      }

      .action-back{
      }
      span{
        position: absolute;
        display: inline-block;
        right:30px;
      }
    }
  }
</style>
