<template>
    <div>
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link"   >
                        Home <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                
                
                
                <li class="nav-item">
                     <router-link to="/about" class="nav-link">
                        About 
                    </router-link>
                </li>
                <template v-if="isLoggedIn">
                     <li class="nav-item">
                        <a href="/logout"  class="nav-link" >Logout</a>
                    </li>
                    <li class="nav-item nav-link" style="color: green">
                        <router-link :to="`/user/${authUser.id}`" class="nav-link">
                        {{authUser.first_name}} 
                    </router-link>
                    </li>
                </template>
                <template v-else>
                     <li class="nav-item">
                        <router-link to="/login" class="nav-link">
                            Login 
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="nav-link"   >
                            Registration 
                        </router-link>
                    </li>
                </template>
                     
               
               
                </ul>
            </div>
        </nav> -->
      <!-- Desktop Menu -->
        <div class="_1menu _bg_default">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 _1menu_right">
                        <ul class="_1menu_list">
                            <li>
                                <router-link to="/" >
                                 <img class="_1menu_logo" src="/assets/img/logo.png" alt="" title=""> Home
                              </router-link>
                               
                                    
                            
                            </li>

                            <li>
                                <template v-if="authUser.email=='admin@admin.com'">
                                    <router-link to="/about" class="nav-link">
                                       Dashboard
                                </router-link>
                                </template>
                            </li>
                            <li>
                                 <router-link to="/all_ads" class="nav-link">
                                       All Ads 
                                </router-link>
                            </li>
<!-- 
                            <li>
                                <button class="_1menu_lagn_button" type="button">English</button>
                            </li> -->
                        </ul>
                    </div>

                    <div class="col-12 col-md-6 _1menu_left _text_right">
                        <ul class="_1menu_list">
                            <template v-if="isLoggedIn">
                                <li>
                                    <router-link   to="/create_ad" class="nav-link">
                                        <button class="_1menu_button">POST YOUR AD</button>
                                    </router-link>
                                </li>
                                
                                
                                <li class="nav-item">
                                    <a href="/logout"  class="nav-link" >Logout</a>
                                </li>
                                <li class="nav-item nav-link" style="color: green">
                                    <router-link :to="`/user/${authUser.id}`" class="nav-link">
                                    {{authUser.first_name}} 
                                </router-link>
                                </li>
                            </template>
                            <template v-else>
                                <li class="nav-item">
                                    <router-link to="/login" class="nav-link">
                                        Login 
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/registration" class="nav-link"   >
                                        Registration 
                                    </router-link>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Desktop Menu -->
        

        
        

    </div>
</template>

<script>


export default {
    data(){
        return {
           
        }
    },
    methods:{
       
    },
  

  created(){
      
     
  }

}
</script>