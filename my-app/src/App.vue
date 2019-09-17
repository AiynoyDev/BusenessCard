<template>
  <v-app>
    <Navbar/>
    <v-content>
 <router-view></router-view>
 <!-- <Dashboard/>
    <CareerMajors/>
    <AddbusenessCard/>
    <AllbusenessCard/> -->
    </v-content>
  </v-app>
</template>

<script>
// import Dashboard from './views/Dashboard'
// import CareerMajors from './views/CareerMajors'
// import AddbusenessCard from './views/AddbusenessCard'
// import AllbusenessCard from './views/AllbusenessCard'
import Navbar from './views/Navbar'
export default {
  name: 'App',
  components: {
// Dashboard,CareerMajors,AddbusenessCard,AllbusenessCard,
Navbar
  },
 
  data () {
    return {
      //
    }
  }
}
</script>


