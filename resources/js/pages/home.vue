<template>
    <div>
        <!--==== HOME MAIN ====-->
		<div class="_1home">
            <!-- Header -->
            <div class="_1home_top _border_color_green">
                <div class="container"> 
                    <div class="row">
                        <!-- Left -->
                        <div class="col-12 col-md-6 col-lg-6 _1home_top_left">
                            <div class="_1home_top_left_top">
                                <p class="_1home_top_title">Welcome to Appifylab.com - the largest marketplace in Bangladesh!</p>
                                <p class="_1home_top_text _color2">
                                 Buy, sell your products throughout the country. Just Post an ad <strong>And wait for the call</strong> 
                                </p>
                            </div>

                            <div class="_1home_browse_all">
                                <p class="_1home_browse_title">Browse our top categories</p>

                                <div class="_1home_browse_main _border_color _border_radious">
                                    <div class="_1home_browse_top _border_color">
                                        <ul class="_1home_browse_list _color">
                                            <li>
                                                <i class="fas fa-mobile-alt"></i>
                                               
                                                <p class="_1home_browse_list_title" v-if="categories[0]"><router-link to='/all_category/1'  >{{categories[0].name}}</router-link></p>
                                                    <p v-if="categories[0]" class="_1home_main_num">({{categories[0].amount[0].amountofads}})</p>
                                            
                                            </li>
                                            <li>
                                                <i class="fas fa-home"></i>
                                               
                                                <p class="_1home_browse_list_title" v-if="categories[1]"><router-link to='/all_category/2'  >{{categories[1].name}}</router-link></p>
                                            <p v-if="categories[1]" class="_1home_main_num">({{categories[1].amount[0].amountofads}})</p>
                                            </li>
                                            <li>
                                                <i class="fas fa-car"></i>
                                               
                                                <p class="_1home_browse_list_title" v-if="categories[2]"><router-link to='/all_category/3'  >{{categories[2].name}}</router-link></p>
                                            <p v-if="categories[2]" class="_1home_main_num">({{categories[2].amount[0].amountofads}})</p>
                                            </li>
                                            <li>
                                                <i class="fas fa-briefcase"></i>
                                               
                                                <p class="_1home_browse_list_title" v-if="categories[3]"><router-link to='/all_category/4'  >{{categories[3].name}}</router-link></p>
                                            <p v-if="categories[3]" class="_1home_main_num">({{categories[3].amount[0].amountofads}})</p>
                                            </li>

                                        
                                        </ul>
                                    </div>

                                    <div class="_1home_browse_bottom _border_color">
                                        <p class="_1home_browse_bottom_text _color2">
                                            <a class="_1home_browse_bottom_text_a _color" href="">Appifylab Deals</a>

                                            Great deals delivered straight to your doorstep
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Left -->

                        <!-- Right -->
                        <div class="col-12 col-md-6 col-lg-6 _1home_top_right">
                            <div class="_1home_top_right_main">
                                <p class="_1home_top_right_main_title">Cities</p>
                                <ul class="_1home_top_right_list _color">
                                    <li v-for="(city,index) in cities" :key="index">
                                        <router-link :to="`/all_city/${city.id}`"  >{{city.name}}</router-link>
                                        </li>
                                    
                                </ul>
                            </div>

                            <div class="_1home_top_right_main">
                                <p class="_1home_top_right_main_title">Divisions</p>
                                <ul class="_1home_top_right_list _color">
                                    <li v-for="(division,index) in divisions" :key="index"> 
                                        <router-link :to="`/all_division/${division.id}`"  >{{division.name}}</router-link>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Right -->
                    </div>
                </div>
            </div>
            <!-- Header -->

            <!-- Main Section -->
            <div class="_1home_main">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-8 col-lg-9">
                            <div class="_1home_stay_all _box_shadow _border_radious _dis_flex">
                                <div class="_1home_stay_img">
                                    <img class="_1home_stay_pic" src="/assets/img/shield-1x-d620e149.png" alt="" title="">
                                </div>

                                <div class="_1home_stay">
                                    <p class="_1home_stay_title">Stay safe while trading!</p>
                                    <p class="_1home_stay_text">All ads are manually reviewed by our team for your safety. Read our tips on how to make safe deals.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-3">
                            <div class=" _box_shadow _border_radious _1home_fac">
                                <p class="_color"><i class="fab fa-facebook-square"></i> <strong>Like us on Facebook</strong></p>
                            </div>
                        </div>
                    </div>


                    <div class="_1home_main_content  _box_shadow _border_radious">
                        <div class="row">
                            <!-- Items -->
                            
                                
                                    
                                        <div v-for="(category,index) in categories" :key="index" class="col-6 col-md-3 col-lg-3">
                                        <div class="_1home_main_card">
                                            <a href="../category/category.html" class="_1home_main_img">
                                                <i class="fas fa-desktop"></i>
                                                <p v-if="category"  class="_1home_main_title _color">  <router-link :to="`/all_category/${category.id}`"  >{{category.name}}({{category.amount[0].amountofads}})
                                                 </router-link>  </p>
                                                 

                                               

                                            </a>

                                            <!-- <p class="_1home_main_num">(23642)</p> -->
                                            <!-- <p v-if="category.amount" class="_1home_main_num"> ({{category.amount[0].amountofads}})</p> -->
                                            
                                          

                                            <p class="_1home_main_status _text_overflow_height">
                                                Find great deals for used electronics in Bangladesh including mobile phones, computers, laptops, TVs, cameras and much more.
                                            </p> 
                                        </div>
                                    </div>
                                   
                                
                            
                            <!-- Items -->

                        </div>
                    </div>


                    <!-- Post With Button -->
                    <div class="_1home_button">
                        <p class="_1home_do">Do you have something to sell?</p>
                        <p class="_1home_Post">Post your ad on Appifylab.com</p>
                       
                         
                            <button class="_1menu_button" type="button" @click="create_ad_or_login">Post an ad now!</button>  
                       
                    </div>
                    <!-- Post With Button -->
                </div>
            </div>
            <!-- Main Section -->
		</div>
		<!--==== HOME MAIN END ====-->



    </div>
</template>


<script>
    export default {
        data () {
            return {
               cities:[],
               divisions:[],
               categories:[]
            }
        },
        methods:{
            create_ad_or_login(){
                if(this.isLoggedIn){
                     this.$router.push('/create_ad')

                }else{
                     this.$router.push('/login')
                     this.sir('Please login first')

                }

            }
        
        },
        async created(){
            const [ res1, res2, res3] = await Promise.all([
            this.callApi('get','all_city'),
            this.callApi('get','all_division'),
            this.callApi('get','all_category')
        ])
        if(res1.status == 200 && res2.status == 200 && res3.status == 200 ){
            this.cities = res1.data
            this.divisions = res2.data
            this.categories = res3.data
        }
            
        }
    }
</script>
