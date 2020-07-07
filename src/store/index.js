import Vue from 'vue';
import Vuex from 'vuex';
import Users from './Users'
Vue.use(Vuex)

const myPlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation) => {
    switch(mutation.type){
      case 'Users/UPDATE_USERS_DETAILS':
        console.log('user details updated');
        break;
      default: 
        break;
    }
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
};

export default new Vuex.Store({
  strict: true,
  plugins: [myPlugin],
  modules: {
    Users,
  }
})
