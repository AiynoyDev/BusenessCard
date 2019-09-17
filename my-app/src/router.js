import Vue from 'vue'
import Router from 'vue-router'
import Navbar  from './views/Navbar.vue'
import Dashboard from './views/Dashboard.vue'
import CareerMajors from './views/CareerMajors'
import AddbusenessCard from './views/AddbusenessCard'
import AllbusenessCard from './views/AllbusenessCard'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
 
    {
      path: '/CareerMajors',
      name: 'CareerMajors',
      component: CareerMajors
    },
    {
      path: '/AddbusenessCard',
      name: 'AddbusenessCard',
      component: AddbusenessCard
    },
    {
      path: '/AllbusenessCard',
      name: 'AllbusenessCard',
      component: AllbusenessCard
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    }
  
  ]
})