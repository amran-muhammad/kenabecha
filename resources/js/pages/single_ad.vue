<template>
<div class="_content">
            <div class="container">
                <div class="_1details_menu">
                    <div class="_1pro_menu _mar_b15">
                        <ul class="_1pro_menu_list _color">
                            <!-- <li>
                                <a href="/category/category.html">All Ads <i class="fas fa-chevron-right"></i></a>
                            </li>
                            <li>
                                <a href="">Sylhet <i class="fas fa-chevron-right"></i></a>
                            </li>
                            <li>
                                <a class="_1pro_menu_active" href="">{Mitsubishi Outlander 2010}</a>
                            </li> -->
                        </ul>
                    </div>
                </div>

                <div class="_1details _box_shadow _border_radious _mar_t20">
                    <div class="row">
                        <div class="col-12 col-md-8 col-lg-8 _1details_left">
                            <p class="_1details_title">{{ad.name}}</p>
                            <p class="_1details_subtitle">For sale by <span v-if="ad.user!=null">{{ad.user.first_name}} {{ad.user.last_name}} </span>   at {{ad.created_at}} <span v-if="ad.area!=null">{{ad.area.name}}, </span><span v-if="ad.city!=null">{{ad.city.name}} </span><span v-if="ad.division!=null">{{ad.division.name}}</span></p>


              
                            <div class="_1slider">
                                <div class="_1slider_top">
                                     <div  v-if="ad.image!=null" class="_1slider_items">
                                        <img class="_1slider_img" :src="ad.image.image_link1" alt="" title="">
                                    </div>

                                    <!-- Next -->
                                    <!-- <div class="_1slider_next _1slider_next_pervious">
                                        <i class="fas fa-chevron-right"></i>
                                    </div> -->
                                    <!-- Next -->

                                    <!-- Previous -->
                                    <!-- <div class="_1slider_pervious _1slider_next_pervious">
                                        <i class="fas fa-chevron-left"></i>
                                    </div> -->
                                    <!-- Previous -->
                                </div>

                                <div class="_1slider_img_list_all">
                                    <ul class="_1slider_img_list">
                                        
                                        <li v-if="ad.image!=null" class="_1slider_img_list_active">
                                            <img  :src="ad.image.image_link1" alt="" title="">
                                        </li>
                                        <li v-if="ad.image!=null">
                                            <img  :src="ad.image.image_link2" alt="" title="">
                                        </li>
                                        <li v-if="ad.image!=null">
                                            <img  :src="ad.image.image_link3" alt="" title="">
                                        </li>
                                        <li v-if="ad.image!=null">
                                            <img  :src="ad.image.image_link4" alt="" title="">
                                        </li>
                                        <li v-if="ad.image!=null">
                                            <img  :src="ad.image.image_link5" alt="" title="">
                                        </li>
                                       
                                       

                                        
                                    </ul>
                                </div>
                            </div>

                            <div class="_1details_content">
                                <div class="_1details_content_main">
                                    <p class="_1details_content_title">Price</p>
                                    <p class="_1details_content_num">${{ad.price}}</p>
                                </div>

                                 <div class="_1details_content_main">
                                    <p class="_1details_content_title">Description</p>
                                    <p class="_1details_content_status">
                                        {{ad.description}}
                                    </p>
                                </div>
                            </div>

                            <div class="_1details_contact">
                                <p class="_1details_contact_main_title _border_color">Contact</p>

                                <a href="" class="_1details_contact_main _border_color _dis_flex">
                                    <p class="_1details_contact_icons _color"><i class="fas fa-phone"></i></p>

                                    <div class="_1details_contact_details">
                                        <p class="_1details_contact_title">{{ad.phone}}</p>
                                        <!-- <p class="_1details_contact_text">Click to show phone number</p> -->
                                    </div>
                                </a>

                                <a href="" class="_1details_contact_main _border_color _dis_flex">
                                    <!-- <p class="_1details_contact_icons _color"><i class="fas fa-comments"></i></p>

                                    <div class="_1details_contact_details">
                                        <p class="_1details_contact_title">Chat</p>
                                    </div> -->
                                </a>
<!-- 
                                <button class="_2btn" type="button">Promote this ad</button> -->
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_1details_contact">
                                <p class="_1details_contact_main_title _border_color">Contact</p>

                                <a href="" class="_1details_contact_main _border_color _dis_flex">
                                    <p class="_1details_contact_icons _color"><i class="fas fa-phone"></i></p>

                                    <div class="_1details_contact_details">
                                        <p class="_1details_contact_title">{{ad.phone}}</p>
                                        <!-- <p class="_1details_contact_text">Click to show phone number</p> -->
                                    </div>
                                </a>

                                <a href="" class="_1details_contact_main _border_color _dis_flex">
                                    <!-- <p class="_1details_contact_icons _color"><i class="fas fa-comments"></i></p>

                                    <div class="_1details_contact_details">
                                        <p class="_1details_contact_title">Chat</p>
                                    </div> -->
                                </a>
<!-- 
                                <button class="_2btn" type="button">Promote this ad</button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    
</template>

<script>
    export default {
        data () {
            return {
               ad:{}
            }
        },
        methods:{
            async single_ad(){
            const res = await this.callApi('get',`all_ad/${this.$route.params.id}`)
            if(res.status == 200){   
             this.ad = res.data
            }
            
                
       },
        create_ad_or_login(){
                if(this.isLoggedIn){
                     this.$router.push('/create_ad')

                }else{
                     this.$router.push('/login')
                     this.sir('Please login first')

                }

            }
            
        },
        created(){
            
           this.single_ad(); 
        }
    }
</script>