<template>
  <Layout @tab="t => { tab = t }">
    <v-tabs-items v-model="tab" class="main-tab-items">
      <v-tab-item :key="0">
        <cards :edges="$page.posts.edges"/>
      </v-tab-item>
      <v-tab-item :key="1">
        <about/>
      </v-tab-item>
    </v-tabs-items>
  </Layout>
</template>

<page-query>
query{
	posts: allPost {
    edges {
      node {
        id
        title
        path
        year
        date
        period
        role
        tags
        thumbnail (width: 340, fit: cover, quality: 90)
        content
      }
    }
  }
}
</page-query>

<script>
import Vue from 'vue'
import Cards from '~/components/Cards'
import About from '~/components/About'

Vue.component('cards', Cards)
Vue.component('about', About)

export default {
  data() {
    return {
      links: [
        'Home',
        'SW&HW',
        'Graphics',
        'About',
      ],
      tab: 0,
    }
  },
  metaInfo: {
    Carditle: 'Hello, world!'
  },
  methods: {
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.cards-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: flex-start;
}

.main-tab-items.v-tabs-items {
  background-color: transparent;
}

.card {
  /* width: 380px; */
  /* margin-right: 24px;
  margin-bottom: 24px; */
}
</style>
