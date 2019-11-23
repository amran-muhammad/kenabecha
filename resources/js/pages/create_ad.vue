<template>
    <!-- <div class="container">
         <Form :model="formItem" :label-width="60">
                    
                    <FormItem label="Category">
                        <Select v-model="formItem.category_id"  >
                        <Option v-for="item in categories" :value="item.id" :key="item.id">{{ item.name }}</Option>
                    </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="submitAdInformation" >Submit</Button>
                    </FormItem>
                   
                </Form>    
    </div> -->
    <div class="_content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-11">
                        <div class="_1post_ads_steps _box_shadow _border_radious _mar_b20">
                            <h3 class="_1post_ads_steps_heading">Sell an item or service</h3>
                            
                            <div class="row">
                                <!-- Main Cateory -->
                                <div class="col-12 col-md-5 col-lg-4">

                                    <div class="_1post_ads_steps_main">
                                        <!-- 1st Step -->
                                        <div class="_1post_ads_1stSteps">
                                            <p class="_1post_ads_steps_title _1post_ads_1stSteps_active">1. Select a category</p>
                                         <Form :model="formItem" :label-width="60"> 
                                              <ul class="_1post_ads_steps_list _color">
                                                <li   @click="submitAdInformation(item.id)" v-for="item in categories" :value="item.id" :key="item.id" class="_1post_menu_active">
                                                   
                                                        <FormItem >
                                                              {{ item.name }}
                                                        </FormItem>
                                                    
                                                   
                                                    
                                                    <i class="fas fa-chevron-right"></i>
                                                </li>
                                                

                                         
                                            </ul>
                                    </Form> 
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                                        <!-- 1st Step -->

</template>

<script>
    export default {
        data () {
            return {
                formItem: {
                 
                  category_id:''
                },
               categories:[]
            }
        },
        methods:{
            async submitAdInformation(id){
            
            if(id=='') return this.i("Book Category Name is required!");
            this.formItem.category_id = id
            
                  this.$router.push(`/create_ad/${this.formItem.category_id}`)  
                  
                }

        },

        async created(){
            const res = await this.callApi('get','all_category')
          if(res.status == 200  ){
         
            this.categories = res.data
        }
            
        }
    }
</script>