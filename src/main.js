import Vue from 'vue'
import App from './App.vue'

import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCqX5wNywVb6wTUB-O_2YEfDHeYt_PoT4",
  authDomain: "twocloud-peppar-development.firebaseapp.com",
  databaseURL: "https://twocloud-peppar-development.firebaseio.com",
  projectId: "twocloud-peppar-development",
  storageBucket: "twocloud-peppar-development.appspot.com",
  messagingSenderId: "1036391910028",
  appId: "1:1036391910028:web:bcc59a75b5c91ab9aa49a9",
  measurementId: "G-S83F6QBPXL"

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