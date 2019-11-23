import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);

export default new Vuex.Store({
  state:{
	authUser:false,
	ob:{}
		
	},
	getters:{
	
		isLoggedIn (state) {
	    	return !!state.authUser
	  	},
	  	getAuthUser(state){
	  		return state.authUser
		  },
		  
		  getOb(state){
			return state.ob
		}
	  
		  
	},
	mutations:{
		
	  setAuthuser (state, data) {
      state.authUser = data
	},
	ccd(state, data) {
		state.ob = data
	  }

	},
	actions:{

		 // updateCart (state,data) {
			// 		  state.commit('updateCart', data);
   //               }
	         }  
   });
