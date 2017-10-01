<template>
  <div id="app">
    <SearchBar></SearchBar>
    <Banner></Banner>
    <Nav></Nav>
    <Falls></Falls>
    <!--<router-link to="/banner">banner</router-link>-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import Banner from '@/components/banner/Banner'
  import Nav from '@/components/navbar/Navbar'
  import Falls from '@/components/falls/Falls'
  import SearchBar from '@/components/searchbar/SearchBar'
  export default {
    components: {
      Banner,
      Nav,
      Falls,
      SearchBar
    }
  }
</script>

<style>
</style>
