<template>
   <!-- <div class="container">
        <Form :model="formItem" :label-width="60">
        
        <FormItem label="Email">
            <Input v-model="formItem.email" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Password">
            <Input type="password" v-model="formItem.password" placeholder="Enter something..."></Input>
        </FormItem>
       
        
        <FormItem>
            <Button type="primary" @click="login" >Login</Button>
        </FormItem>
    </Form>

   </div> -->

   	<div class="_content _mar_t10">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-8">
                        <div class="_1login _box_shadow _border_radious">
                           <div class="row">
                                <!-- Left -->
                                <div class="col-12 col-md-6 col-lg-6 _1login_left_all _border_color">
                                   <div class="_1login_left">
                                       <p class="_1login_left_title">My Chat</p>
                                       <p class="_1login_left_text">Login to see your chats</p>
                                   </div>

                                   <div class="_1login_left_contant_all">
                                       <div class="_1login_left_contant _dis_flex">
                                            <div class="_1login_left_contant_icons _color _border_color">
                                               <i class="fas fa-comments"></i>
                                            </div>

                                            <p class="_1login_left_contant_text">Access all your chat messages</p>
                                       </div>

                                        <div class="_1login_left_contant _dis_flex">
                                            <div class="_1login_left_contant_icons _color _border_color">
                                               <i class="fab fa-searchengin"></i>
                                            </div>

                                            <p class="_1login_left_contant_text">Mark ads as favorite and view them later.</p>
                                       </div>

                                        <div class="_1login_left_contant _dis_flex">
                                            <div class="_1login_left_contant_icons _color _border_color">
                                               <i class="fas fa-sim-card"></i>
                                            </div>

                                            <p class="_1login_left_contant_text">View and manage your ads at your convenience.</p>
                                       </div>
                                    </div>
                                </div>
                                <!-- Left -->

                                <!-- Right -->
                                <div class="col-12 col-md-6 col-lg-6 _1login_right_all _border_color">
                                    <button class="_facBtn" type="button"><i class="fab fa-facebook-square"></i> Continue with Facebook</button>

                                    <p class="_1login_or">or</p>

                                    <form>
                                        <div class="_1input_group">
                                            <input v-model="formItem.email" class="_1inpt" type="email" placeholder="Email">
                                        </div>

                                        <div class="_1input_group">
                                            <input v-model="formItem.password" class="_1inpt" type="password" placeholder="Password">
                                        </div>

                                        <div class="_1input_button">
                                            <button  @click="login"  class="_1btn" type="button">Log in</button>
                                        </div>

                                        <!-- <p class="_text_center">
                                            <a href="" class="forget _color">Forgot password?</a>
                                        </p> -->
                                    </form>

                                    <div class="_1login_signup _border_color">
                                        <!-- <p class="_1login_signup_dont">Don't have an account yet?</p>

                                        <a href="signup.html">
                                            <button class="_2btn" type="button">Sign Up</button>
                                        </a> -->
                                    </div>
                                </div>
                                <!-- Right -->
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
                user:{},
                formItem: {
                  email:'',
                  password:'',
                  
                }
            }
        },
        methods:{
            async login(){
                if(this.formItem.email=="" || this.formItem.password==''){
                    this.i("All frields are required!");
                    return;
                }
                const res = await this.callApi('post','login',this.formItem)
                if(res.status===200){
                  
                     this.$store.commit('setAuthuser', (res.data));
                     
                    this.s("login successfull !")
                      // window.location = '/'

                    this.$router.push('/')
                
                }
                else if (res.status===422){
                    this.e(res.data.msg);
                }
                else {
                    this.swr();
                }
            },
        },
        created(){
            console.log(window.authUser)
            
        }
    }
</script>