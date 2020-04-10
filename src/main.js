import Vue from 'vue'
import App from './App.vue'

import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbcABbJmRSrNg_NzBlvKoAAEbM6JCgF94",
  authDomain: "trustfood-account-development.firebaseapp.com",
  databaseURL: "https://trustfood-account-development.firebaseio.com",
  projectId: "trustfood-account-development",
  storageBucket: "trustfood-account-development.appspot.com",
  messagingSenderId: "853232185583",
  appId: "1:853232185583:web:372eb68cfda3f9c76fab1a",
  measurementId: "G-SM5BEDL5XK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})