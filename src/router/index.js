import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner/Banner'
import SearchPage from '../components/searchpage/SearchPage'

Vue.use(Router)
var routes = [
  {path: '/Banner', name: 'Banner', component: Banner},
  {path: '/searchpage', name: 'SearchPage', component: SearchPage}
]

export default new Router({
  routes
})
