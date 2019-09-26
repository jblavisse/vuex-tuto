import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     count: 0
  },
  mutations: {
     addCount: function()
     {
       this.state.count++;
     }
  },
  actions: {
      itCount: function()
      {
          if(this.state.count < 10)
          {
            this.commit("addCount");
          }
          
      }
  }
})
