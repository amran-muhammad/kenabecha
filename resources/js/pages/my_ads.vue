<template>

    <div class="_content">
            <div class="container">
                <div class="_1category _box_shadow _border_radious">
                    <!-- Search Section -->
                    <div class="_1category_search _flex_row _border_color">
                        <div class="_1category_search_button _flex_row _flex_space">
                            <!-- <div class="_1category_search_btn_all _flex_space">
                               <button class="_1category_search_btn _1btn cat_click" type="button"><i class="fas fa-map-marker-alt"></i> Sylhet</button> 
                            </div>

                            <div class="_1category_search_btn_all _flex_space">
                               <button class="_1category_search_btn _1btn cat_click" type="button"><i class="fas fa-map-marker-alt"></i> Select Category</button> 
                            </div> -->
                        </div>

                        <div class="_1category_search_input_all _1category_search_button _flex_row _flex_space">
                            <!-- <input class="_1category_search_int" v-model="search" type="text" placeholder="What are you searching for?" name="">

                            <button class="_1category_search_input_btn _1btn" type="button"><i class="fas fa-search"></i> Search</button> -->
                        </div>
                    </div>
                    <!-- Search Section -->

                    <!-- Filter and Product -->
                    <div class="_1category_filter_product">
                        <div class="row">
                            <!-- Filter -->
                            <div class="col-12 col-md-4 col-lg-3 _1category_flter_all ">
                                <div class="_1category_flter _border_color">
                                    <div class="_1category_flter_items">
                                        <!-- <p class="_1category_flter_title _border_color">
                                            Sort results by:
                                        </p>

                                        <select class="_1category_flter_select">
                                            <option value="volvo">Date:Newest on top</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select> -->
                                    </div>

                                    <div class="_1category_flter_items">
                                        <!-- <p class="_1category_flter_title _border_color">
                                            Type of poster
                                        </p> -->

                                        <div class="_1category_flter_radio">
                                            <!-- <label class="_1radio _color">
                                                All posters
                                                <input type="radio" checked="checked" name="radio">
                                                <span class="checkmark"></span>
                                            </label>

                                            <label class="_1radio _color">
                                                Only members
                                                <input type="radio" name="radio">
                                                <span class="checkmark"></span>
                                            </label> -->
                                        </div>
                                    </div>

                                    <div class="_1category_flter_items">
                                        <!-- <p class="_1category_flter_title _border_color">
                                            Category:
                                        </p> -->

                                        <!-- <p class="_1category_flter_subtitle">All categories</p>

                                        <div class="_1category_flter_list_all">
                                            <ul class="_1category_flter_list _color">
                                                <li v-for="(item,index) in categories" :key="index">
                                                    <a href="" title="">
                                                        <i class="fas fa-bolt"></i>
                                                       <router-link :to="`/all_category/${item.id}`"  >{{item.name}}</router-link> 
                                                        <span class="_1category_flter_list_span"></span>
                                                    </a>
                                                </li>
                                               
                                            </ul>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- Filter -->

                            <!-- Product -->
                            <div class="col-12 col-md-8 col-lg-9 _1category_product_all">
                                <div class="_1category_product">
                                    <div class="_1category_product_menu">
                                        <ul class="_1category_product_menu_list">
                                            <!-- <li>
                                                Home
                                            </li>
                                            <li>
                                                <span class="_1category_product_next"> > </span>
                                                <span>All Ads</span>
                                            </li>
                                            <li>
                                                <span  class="_1category_product_next"> > </span>
                                                <span  class="_1category_product_menu_ative">Sylhet</span>
                                            </li> -->
                                        </ul>
                                    </div>

                                    <!-- <p class="_1category_results_num">Showing 1-24 of 16,9856 ads</p> -->

                                    <div class="_1category_product_main_all">
                                        <div class="row">
                                            <div class="col-12 col-md-12 col-lg-9">
                                                <!-- Items -->
                                                <ul>
                                                   <li v-for="(item,index) in ads" :key="index">
                                                        <div class="_1category_product_card  _border_color _border_radious _flex_row">
                                                           
                                                            <div class="_1category_product_card_img">
                                                                <img class="_1category_product_card_pic" :src="item.image_link" alt="" title="">
                                                            </div>

                                                            <div class="_1category_product_card_details _flex_space">
                                                                
                                                                        <p class="_1category_product_card_title _color">{{item.name}}</p>

                                                                        <p class="_1category_product_card_subnum">{{item.description}}</p>

                                                                        <p class="_1category_product_card_address text_overflow2"> <span v-if="item.area!=null">{{item.area.name}}, </span><span v-if="item.city!=null">{{item.city.name}} </span><span v-if="item.division!=null">{{item.division.name}}</span></p>

                                                                        <p class="_1category_product_card_price">${{item.price}}</p>
                                                                  
                                                            </div>
                                                           <button @click="removeItem(item,index)" class="btn btn-secondary">Remove this ad</button>
                                                            

                                                            <!-- <p class="_1category_card_time">15 days</p> -->

                                                            <!-- <p class="_1category_top_add">Top Ad</p> -->
                                                           
                                                        </div>
                                                    </li>
                                                </ul>
                                                <!-- Items -->


                                                

                                                <!-- Pagination -->
                                                 <Page 
                                                :current="1"
                                                :total="pagination.total" 
                                                @on-change="pagination_result" 
                                                :page-size="10" 
                                                />
                                                <!-- <div class="pagination">
                                                    <a href="#">&laquo;</a>
                                                    <a href="#">1</a>
                                                    <a href="#" class="active _bg_default">2</a>
                                                    <a href="#">3</a>
                                                    <a href="#">4</a>
                                                    <a href="#">5</a>
                                                    <a href="#">6</a>
                                                    <a href="#">&raquo;</a>
                                                </div> -->
                                                <!-- Pagination -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Product -->
                        </div>
                    </div>
                    <!-- Filter and Product -->
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
        
      
</template>

<script>
export default {
    data(){
        return{
            ads:[],
            pagination:{},
            page:1

        }
    },
    methods:{
      async removeItem(item,index){
             if(!confirm("Are you sure to delete this Ad")){
                return;
            }
            let ob = {
                id:item.id
            }
            const res = await this.callApi('post','delete_an_ad',ob)
            if(res.status == 200){
                this.i('Ad is Deleted!')
                this.ads.splice(index,1)
               
            }
            
        },
        async all_ads(){
            const res = await this.callApi('get',`all_ads_of_my_id/${authUser.id}`)
            if(res.status == 200){
                this.ads = res.data.data
                this.pagination = res.data
               
            }
        },
        
        async pagination_result(e){
            this.top_ads=[]
            this.general_ads=[]
            this.page = e
            const res = await this.callApi('get',`all_ads?page=${this.page}`)
            if(res.status == 200){
                this.ads = res.data.data
                this.pagination = res.data
                for(let i of this.ads){
                    if(i.ad_type=='top') this.top_ads.push(i)
                    else this.general_ads.push(i)
                }
                 
                
                
            }
        },
         async all_category(){
            const res = await this.callApi('get','all_category')
        
        if(res.status == 200 ){
            
            this.categories = res.data
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
        this.all_ads();
         
    }
}
</script>