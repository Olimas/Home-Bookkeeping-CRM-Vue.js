import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAnFi_7a4CGh6rsJLGbNjW1dOlYeYoRE7M",
  authDomain: "crm-vue-1eee7.firebaseapp.com",
  projectId: "crm-vue-1eee7",
  storageBucket: "crm-vue-1eee7.appspot.com",
  messagingSenderId: "59080945894",
  appId: "1:59080945894:web:eb8f154895779a2b290b27",
  measurementId: "G-HK0R0Q9G7C"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})






