<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showLogin()">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
      <div id="firebaseui-auth-container"></div>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 No rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'It\'s biryani time!'
    }
  },
  methods: {
    showLogin () {
      const uiConfig = {}
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  },
  name: 'App'
}
</script>
