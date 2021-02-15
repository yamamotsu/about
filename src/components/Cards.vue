<template>
  <v-container>
    <v-row class="grey lighten-3">
      <v-col cols="12" sm="6" md="6" lg="4" xl="4"
        v-for="edge in edges" :key="edge.node.id">
        <card class="card" :card="edge.node"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/Card.vue'

Vue.component('card', Card)

export default {
  props: ['edges']
}
</script>
