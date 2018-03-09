// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueFire from 'vuefire'
import moment from 'moment'
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

const ui = new firebaseui.auth.AuthUI(firebase.auth())
ui.foo = 3

Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
})
