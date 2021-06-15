import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from "firebase"

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBnB-ifoxHvaciU9wcoXDWUYV2t-YCJoo8",
  authDomain: "kwetter-cf7f5.firebaseapp.com",
  projectId: "kwetter-cf7f5",
  storageBucket: "kwetter-cf7f5.appspot.com",
  messagingSenderId: "351222711038",
  appId: "1:351222711038:web:9b9335cf1206c79cc11baf",
  measurementId: "G-HXGYXZYR7B"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
