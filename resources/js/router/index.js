import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import home from '../pages/home.vue'
import about from '../pages/about.vue'
import registration from '../pages/registration.vue'
import login from '../pages/login.vue'
import create_ad from '../pages/create_ad.vue'
import create_ad_city from '../pages/create_ad_city.vue'
import create_ad_name_price_and_all from '../pages/create_ad_name_price_and_all.vue'
import create_a_new_city from '../pages/ad/create_a_new_city.vue'
import create_a_new_division from '../pages/ad/create_a_new_division.vue'
import create_a_new_area from '../pages/ad/create_a_new_area.vue'
import create_a_new_category from '../pages/ad/create_a_new_category.vue'
import single_category from '../pages/single_category.vue'
import single_division from '../pages/single_division.vue'
import single_city from '../pages/single_city.vue'
import single_ad from '../pages/single_ad.vue'
import all_ads from '../pages/all_ads.vue'
import my_ads from '../pages/my_ads.vue'






let Admin = ['Admin'];


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Home',
      }

    },
   
    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'About',
        }
  
      },
      {
        path: '/registration',
        name: 'registration',
        component: registration,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'registration',
        }
  
      },
      
      {
        path: '/user/:id',
        name: 'my_ads',
        component: my_ads,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'my_ads',
        }
  
      },
      {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'login',
        }
  
      },
      {
        path: '/create_ad',
        name: 'create_ad',
        component: create_ad,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'POST YOUR AD',
        }
  
      },
      {
        path: '/all_ads',
        name: 'all_ads',
        component: all_ads,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'All Ads',
        }
  
      },
      
      {
        path: '/create_ad_name_price_and_all/:id',
        name: 'create_ad_name_price_and_all',
        component: create_ad_name_price_and_all,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'POST YOUR AD',
        }
  
      },

      {
        path: '/create_ad/:id',
        name: 'create_ad_city',
        component: create_ad_city,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'POST YOUR AD',
        }
  
      },
      {
        path: '/all_city/:id',
        name: 'single_city',
        component: single_city,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'City wise ads',
        }
  
      },
      {
        path: '/all_division/:id',
        name: 'single_division',
        component: single_division,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Division wise ads',
        }
  
      },
      {
        path: '/all_category/:id',
        name: 'single_category',
        component: single_category,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Category wise ads',
        }
  
      },
      {
        path: '/single_ad/:id',
        name: 'single_ad',
        component: single_ad,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'single_ad',
        }
  
      },
      {
        path: '/create_a_new_category',
        name: 'create_a_new_category',
        component: create_a_new_category,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Create A New Category',
        }
  
      },
      {
        path: '/create_a_new_area',
        name: 'create_a_new_area',
        component: create_a_new_area,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Create A New Area',
        }
  
      },
      {
        path: '/create_a_new_division',
        name: 'create_a_new_division',
        component: create_a_new_division,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Create A New Division',
        }
  
      },
      {
        path: '/create_a_new_city',
        name: 'create_a_new_city',
        component: create_a_new_city,
        meta: {
           // guest: true,
           // allowedUserType: ['All'],
            title: 'Create A New City',
        }
  
      },
  ],

});