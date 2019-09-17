<template>
   <Nav>
     <v-toolbar app dark >
         <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
       <v-toolbar-title class="headline ">
        <span>Venture Network</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#Home"
        target="_blank"
      >
      <v-icon>home</v-icon>
        <span class="mr-2">HOME</span>
       
       </v-btn>

        <v-btn
        flat
        href="#Home"
        target="_blank"
      >
       <v-icon >credit_card</v-icon>
        <span class="mr-2">Busenss Card</span>
       </v-btn>
        <v-btn
        flat
        href="#Home"
        target="_blank"
      >
       <v-icon >work</v-icon>
        <span class="mr-2">Career Major</span>
       </v-btn>
      </v-toolbar>

<v-navigation-drawer app v-model="drawer"
      class="">
    
    <v-toolbar flat>
     <v-list>
         <v-list-tile>
             <v-list-tile-action>
               
                 </v-list-tile-action>
                 <v-list-tile-title class="title">
            MENU
          </v-list-tile-title>
         </v-list-tile>
     </v-list>
     </v-toolbar>
 <v-divider></v-divider>

 <v-list>
         <v-list-tile v-for="list in lists" :key="list.text" router :to="list.route">
             <v-list-tile-action>
                <v-icon>{{ list.icon }}</v-icon> 
                 </v-list-tile-action>
                 <v-list-content>{{ list.text }}</v-list-content>
         </v-list-tile>
     </v-list>

  </v-navigation-drawer>

   </Nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer:true,
        lists:[
            {icon:"dashboard",text:"Dashboard",route:"/"},
            {icon:"note_add",text:"Add Buseness Card",route:"/Buseness Card"},
             {icon:"work",text:"Career Majors",route:"/Career Majors"},
              {icon:"list_alt",text:"All",route:"/All Buseness Card"}
        ]
      }
    }
  }
</script>