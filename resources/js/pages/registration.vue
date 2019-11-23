<template>
   <!-- <div class="container">
        <Form :model="formItem" :label-width="60">
        <FormItem label="First Name">
            <Input v-model="formItem.first_name" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Last Name">
            <Input v-model="formItem.last_name" placeholder="Enter something..."></Input>
        </FormItem>
        
        <FormItem label="Email">
            <Input v-model="formItem.email" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Password">
            <Input type="password" v-model="formItem.password" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Confirm Password">
            <Input type="password" v-model="formItem.password_confirmation" placeholder="Enter something..."></Input>
        </FormItem>
        
        <FormItem>
            <Button type="primary" @click="registation" >Registration</Button>
        </FormItem>
    </Form>
   </div> -->
   	<div class="_content _mar_t10">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6">
                        <div class="_1sign_up _box_shadow _border_radious">
                            <div class="_1sign_up_main _border_color">
                                <p class="_1sign_up_title">Sign Up</p>

                                <button class="_facBtn" type="button"><i class="fab fa-facebook-square"></i> Continue with Facebook</button>

                                <p class="_1login_or">or</p>

                                <form>
                                    <div class="_1input_group">
                                        <input v-model="formItem.first_name" class="_1inpt" type="text" placeholder="Frist Name">
                                    </div>

                                    <div class="_1input_group">
                                        <input v-model="formItem.last_name" class="_1inpt" type="text" placeholder="Last Name">
                                    </div>

                                    <div class="_1input_group">
                                        <input v-model="formItem.email" class="_1inpt" type="email" placeholder="Email">
                                    </div>

                                    <div class="_1input_group">
                                        <input v-model="formItem.password" class="_1inpt" type="password" placeholder="Password">
                                    </div>

                                    <div class="_1input_group">
                                        <input v-model="formItem.password_confirmation" class="_1inpt" type="password" placeholder="Confirm Password">
                                    </div>

                                    <div class="_1input_button _mar_b20 _text_center">
                                        <button @click="registation"  class="_1btn" type="button">Sign In</button>
                                    </div>
                                </form>

                                <div class="_1login_signup _border_color">
                                    <!-- <p class="_1login_signup_dont">Don't have an account yet?</p> -->

                                    <!-- <a href="login.html">
                                        <button class="_2btn" type="button">Login In</button>
                                    </a> -->
                                </div>
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
                formItem: {
                  first_name:'',
                  last_name:'',
                  email:'',
                  password:'',
                  password_confirmation:'',
                }
               
            }
        },
        methods:{
            async registation(){
            
                if(this.formItem.first_name=='' ) return this.i("First Name is required!");
                if(this.formItem.last_name=='' ) return this.i("Last Name is required!")
                if(this.formItem.email=='' ) return this.i("Email is required!");
                if(this.formItem.password=='' ) return this.i("Password is required!");
                if(this.formItem.password_confirmation=='' ) return this.i("Password Confirmation is required!");
                if(this.password != this.password_confirmation){
                    this.i("The password confirmation does not match.");
                    return;
                }
                const res = await this.callApi('post',"registration",this.formItem)
                if(res.status===201){
                    this.s("registration Successfull ! Please Login.");
                    this.$router.push('/')
                  
                }
                else if(res.status===422){
                    if(res.data.errors.email){
                        this.errorData.email = res.data.errors.email 
                        for(let e of res.data.errors.email  )
                            this.e(e);
                    }  
                    if(res.data.errors.password)
                    {
                        this.errorData.password = res.data.errors.password 
                        for(let e of res.data.errors.password  )
                            this.e(e);
                    }  
                    
                    if(res.data.errors.firstName)
                    {
                        this.errorData.firstName = res.data.errors.firstName 
                        for(let e of res.data.errors.firstName  )
                            this.e(e);
                    }    
                    if(res.data.errors.lastName)
                    {
                        this.errorData.lastName = res.data.errors.lastName 
                        for(let e of res.data.errors.lastName  )
                            this.e(e);
                    }    
                }
                else{
                    this.swr();
                }
            },
        }
    }
</script>

