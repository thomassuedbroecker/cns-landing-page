import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      landing: "https://cloud-native-starter-landing-tsuedbro.mybluemix.net/",
      security: "https://cloud-native-starter-security-tsuedbro.mybluemix.net/",
      reactive: "https://cloud-native-starter-reactive-tsuedbro.mybluemix.net/",
      synchron: "https://cloud-native-starter-synchron-tsuedbro.mybluemix.net/",
    }
  },
  mutations: {
  },
  actions: {
  }
})
