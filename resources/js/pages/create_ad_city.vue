<template>
 <div class="_content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-11">
                        <div class="_1post_ads_steps _box_shadow _border_radious _mar_b20">
                            <h3 class="_1post_ads_steps_heading">Where is your item or service located?</h3>
                            
                            <div class="_1post_ads_3steps_main _change_cate">
                                <div class="_1post_ads_3steps_done">
                                    <div class="_1post_ads_3steps_one _border_color">
                                        <div class="_1post_ads_3steps_one_main">
                                            <ul class="_1post_ads_3steps_one_list">
                                                <li><i class="fas fa-check"></i></li>

                                                <li>Caterogy is selected </li>
                                                
                                            </ul>
                                        </div>

                                        
                                    </div>

                                    <p class="_1post_ads_3steps_add_title">2. Select City Or Division</p>
                                </div>

                                <div class="row">
                                    <!-- Main Cateory -->
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="">
                                            <!-- 1st Step -->
                                            <div class="_1post_ads_1stSteps">
                                                <p class="_1label">City</p>
                                               
                                                <Form :model="formItem" :label-width="60"> 
                                                        <ul class="_1post_ads_steps_list _color">
                                                            <li   @click="submitCityInformation(item.id)" v-for="item in cities" :value="item.id" :key="item.id" class="_1post_menu_active">
                                                                
                                                                    <FormItem >
                                                                        {{ item.name }}
                                                                    </FormItem>
                                                                
                                                            
                                                                
                                                                <i class="fas fa-chevron-right"></i>
                                                            </li>
                                                            

                                                    
                                                        </ul>
                                                </Form>

                                                <p class="_1label _padd_t20">Divisions</p>

                                               <Form :model="formItem" :label-width="60"> 
                                                    <ul class="_1post_ads_steps_list _color">
                                                        <li   @click="submitDivisionInformation(item.id)" v-for="item in divisions" :value="item.id" :key="item.id" class="_1post_menu_active">
                                                           
                                                                <FormItem >
                                                                    {{ item.name }}
                                                                </FormItem>
                                                            
                                                        
                                                            
                                                            <i class="fas fa-chevron-right"></i>
                                                        </li>
                                                        

                                                
                                                    </ul>
                                            </Form>
                                            <p class="_1label _padd_t20">Local Area</p>

                                            <Form :model="form" :label-width="60">
                                                <FormItem label="Name">
                                                    <Input v-model="form.name" placeholder="Enter..."></Input>
                                                </FormItem>
                                            
                                                <FormItem>
                                                    <Button type="primary" @click="submitAreaInformation" >Next</Button>
                                                </FormItem>
                                            </Form>
            
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <!-- Main Cateory -->

                                    
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>
		</div>
		<!--==== POST AD MAIN END ====-->


</template>

<script>
    export default {

        data () {
            return {
                form:{
                    name:''
                },
                formItem: {
                city_id:'',
                 division_id:'',
                
                },
               cities:[],
               divisions:[],
               categories:[]
             
            }
        },
        methods:{
            async submitCityInformation(id){
           
            this.formItem.city_id = id
            this.formItem.division_id = 0
             this.formItem.category_id = this.$route.params.id
             this.s("City added Successfully!");
   
            this.$store.commit('ccd',this.formItem )
            
            

        },
        async submitDivisionInformation(id){
            this.formItem.division_id = id
             this.formItem.city_id = 0
              this.formItem.category_id = this.$route.params.id
              this.s("Division added Successfully!");
   
            this.$store.commit('ccd',this.formItem )
            
            

        },
         async submitAreaInformation(){
            if(this.formItem.name=='') return this.i("Book Name is required!");
             const res = await this.callApi('post','create_a_new_area',this.form)
                if(res.status===201 || res.status===200){
                    this.s("Area added Successfully!");  
                  this.$router.push(`/create_ad_name_price_and_all/${res.data.id}`)
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