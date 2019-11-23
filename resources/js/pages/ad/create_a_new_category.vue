<template>
    <div class="container">
        <div>
            
                <Form :model="formItem" :label-width="60">
                    <FormItem label="Name">
                        <Input v-model="formItem.name" placeholder="Enter..."></Input>
                    </FormItem>
                   
                    <FormItem>
                        <Button type="primary" @click="submitCategoryInformation" >Submit</Button>
                    </FormItem>
                </Form>
            
            
      
        </div>
        

        
            
    </div>
</template>

<script>
export default {
    data(){
        return{
         
                formItem: {
                  name:''
                  
                }

        }
    },
    methods:{
        async submitCategoryInformation(){
            if(this.formItem.name=='') return this.i("Book Name is required!");
             const res = await this.callApi('post','create_a_new_category',this.formItem)
                if(res.status===201){
                    this.s("Category added Successfully!");  
                  this.$router.push('/create_a_new_category')
                }

        }
       
       
    },
    created(){
       
        
        
    }
    // computed:{
    //     message(){
    //         return this.store.state.message
    //     }
    // }
}
</script>