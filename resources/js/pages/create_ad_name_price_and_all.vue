<template>
  <div class="_content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-11">
          <div class="_1post_ads_steps _box_shadow _border_radious _mar_b20">
            <h3 class="_1post_ads_steps_heading">Sell an item or service</h3>

            <div class="_1post_ads_3steps_main">
              <div class="_1post_ads_3steps_done">
                <div class="_1post_ads_3steps_one _border_color">
                  <div class="_1post_ads_3steps_one_main">
                    <ul class="_1post_ads_3steps_one_list">
                      <li>
                        <i class="fas fa-check"></i>
                      </li>
                      <li>Category is selected</li>
                    </ul>
                  </div>
                </div>

                <div class="_1post_ads_3steps_one _border_color">
                  <div class="_1post_ads_3steps_one_main">
                    <ul class="_1post_ads_3steps_one_list">
                      <li>
                        <i class="fas fa-check"></i>
                      </li>
                      <li>Location is selected</li>
                      <li>Upload 5 photoes please</li>
                    </ul>
                  </div>
                </div>

                <!-- 
                <p class="_1post_ads_3steps_add_title">Add Photos (5 for free)</p>-->
              </div>

              <div class="_1post_ads_3steps_items">

                <Upload
                ref="upload"
               :headers="crfObj"
               :with-credentials="true"
                :on-success="handleImageUpload"
                 name="img" action="/app/upload_image">
                  <Button icon="ios-cloud-upload-outline">Upload file</Button>
                </Upload>
                <template >
                    <!-- <img :src="formItem.image_link"/> -->
                    
                </template>

                <!-- Item -->
                <!-- <div class="_1post_ads_3steps_add _border_color">
                                        <div class="_1post_ads_3steps_add_pic _border_color">
                                            <img class="_1post_ads_3steps_add_img" src="../assets/img/watches.jpg" alt="" title="">
                                        </div>

                                        <div class="_1post_ads_3steps_add_details">
                                            <p class="_1post_ads_3steps_add_details_title"><i>This will be your main image</i></p>
                                            <p class="_1post_ads_3steps_add_details_text"><i class="fas fa-minus"></i> Remove Image</p>
                                        </div>

                                        <p class="_1post_ads_3steps_add_errow">
                                            <i class="fas fa-chevron-down"></i>
                                        </p>
                </div>-->
                <!-- Item -->

                <!-- Item -->
                <!-- <div class="_1post_ads_3steps_add _border_color">
                                        <div class="_1post_ads_3steps_add_pic _border_color">
                                            <img class="_1post_ads_3steps_add_img" src="../assets/img/watches2.jpg" alt="" title="">
                                        </div>

                                        <div class="_1post_ads_3steps_add_details">
                                            <p class="_1post_ads_3steps_add_details_text"><i class="fas fa-minus"></i> Remove Image</p>
                                        </div>

                                        <p class="_1post_ads_3steps_add_errow">
                                            <i class="fas fa-chevron-up"></i>
                                        </p>
                </div>-->
                <!-- Item -->

                <!-- Upload -->
                <!-- <div class="_1post_ads_3steps_add _border_color">
                                        <div class="_1post_ads_3steps_add_pic _border_color">
                                            <i class="fas fa-image"></i>
                                        </div>

                                        <div class="_1post_ads_3steps_add_details">
                                            <button class="_1btn">Add a Photo</button>
                                        </div>
                </div>-->
                <!-- Upload -->
              </div>

              <div class="_1post_ads_3steps_items">
                <form>
                  <p class="_1post_ads_3steps_title _border_color">Fill in the details</p>

                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-12 _mar_b30">
                      <input v-model="formItem.name" class="_1inpt" type="text" placeholder="Title" />
                    </div>

                    <div class="col-12 col-md-12 col-lg-12 _mar_b30">
                      <textarea
                        v-model="formItem.description"
                        class="_1textarea"
                        rows="6"
                        placeholder="Description"
                      ></textarea>
                    </div>

                    <div class="col-12 col-md-4 col-lg-4">
                      <p class="_1label">Price (Tk)</p>
                      <input
                        v-model="formItem.price"
                        class="_1inpt"
                        type="text"
                        placeholder="Price (Tk)"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div class="_1post_ads_3steps_items">
                <p class="_1post_ads_3steps_title _border_color">Fill in the details</p>

                <div class="row">
                  <div class="col-12 col-md-12 col-lg-12 _mar_b20">
                    <p class="_color _1label">Name</p>

                    <p
                      class="_1post_ads_3steps_value"
                    >{{authUser.first_name}} {{authUser.last_name}}</p>
                  </div>

                  <div class="col-12 col-md-7 col-lg-6 _mar_b20">
                    <p class="_color _1label">Your Phone Number</p>
                    <input
                      v-model="formItem.phone"
                      class="_1inpt"
                      type="text"
                      placeholder="Your phone number (0000)"
                    />
                    <!-- <div class="_1post_ads_3steps_num _border_color">
                                            
                                                <a href="addNumber.html"><button class="_1btn" type="button">Add phone number</button></a>

                                                <p class="_1post_ads_3steps_num_check"><input type="checkbox"> Hide phone number(s)</p>
                    </div>-->
                  </div>

                  <div class="col-12 col-md-12 col-lg-12 _mar_b20">
                    <p class="_color _1label">Email</p>

                    <p class="_1post_ads_3steps_value">{{authUser.email}}</p>
                  </div>

                  <div class="col-12 col-md-12 col-lg-12">
                    <button @click="submitAdInformation" class="_1btn" type="button">Post ad</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            class="_1post_ads_note _mar_b20"
          >By posting this ad, you agree to the Terms & Conditions of this site.</p>

          <div class="_1post_ads_bottom _box_shadow _border_radious _mar_b20">
            <p class="_quick">Quick rules</p>

            <p class="_all_ads">All ads posted on Bikroy.com must follow our rules:</p>

            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <ul class="_1post_ads_bottom_list">
                  <li>Make sure you post in the correct category.</li>
                  <li>Do not post the same ad more than once or repost an ad within 7 days.</li>
                  <li>Do not upload pictures with watermarks.</li>
                </ul>
              </div>

              <div class="col-12 col-md-6 col-lg-6">
                <ul class="_1post_ads_bottom_list">
                  <li>Do not post ads containing multiple items unless it's a package deal.</li>
                  <li>Do not put your email or phone numbers in the title or description.</li>
                </ul>
              </div>
            </div>

            <div class="_1post_ads_bottom_click _color">
              <a href>
                Click here to see all of our posting rules
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        name: "",
        price: "",
        description: "",
        phone: "",
        user_id: "",
        category_id: "",
        city_id: "",
        division_id: "",
        area_id: "",
        ad_type:"",
        image_links:[]
      },

     crfObj: {
        "X-CSRF-TOKEN": document
          .querySelector('meta[name="csrf-token"]')
          // .getAttribute("content")
      }
    }
  },
  methods: {
    async submitAdInformation() {
      if (this.formItem.name == "") return this.i("Name is required!");
      if (this.formItem.price == "") return this.i("Price is required!");
      if (this.formItem.description == "")
        return this.i("Description is required!");
      if (this.formItem.phone == "") return this.i("Phone Number is required!");

      this.formItem.category_id = this.storeOb.category_id;
      this.formItem.city_id = this.storeOb.city_id;
      this.formItem.division_id = this.storeOb.division_id;

      this.formItem.user_id = this.authUser.id;
      this.formItem.area_id = this.$route.params.id;
      this.formItem.ad_type = 'general'

      const res = await this.callApi("post", "create_a_new_ad", this.formItem);
      if (res.status === 201) {
        this.s("Your Ad is Added Successfully!");
        this.$router.push("/");
      }
    }
    ,
    async handleImageUpload(res, file) {
			if (res) {
				//console.log(file);
				//console.log(res);
				this.formItem.image_links.push(res)
			}
			//console.log(res);
		}
  },
  created() {
    // console.log(file.url)
  }
};
</script>