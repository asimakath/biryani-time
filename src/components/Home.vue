<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div>
          <article v-for="(biryaniDay, idx) in biryaniDays" :key="idx">
            <h1>{{ biryaniDay.date | moment("ll")}}</h1>
            <p>Created by {{biryaniDay.createdBy}} {{biryaniDay.createdAt | moment("from")}}</p>
          </article>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import firestore from '../firestore'

export default {
  name: 'Home',
  data () {
    return {
      biryaniDays: []
    }
  },
  firestore () {
    return {
      biryaniDays: firestore.collection('biryaniDays').orderBy('createdAt')
    }
  },
  methods: {
    deleteBiryaniDay (id) {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
