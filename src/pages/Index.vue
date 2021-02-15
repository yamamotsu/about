<template>
  <Layout @tab="t => { tab = t }">
    <cards v-if="tab == 0" :edges="$page.posts.edges"/>
    <about v-if="tab == 3"/>
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

.card {
  /* width: 380px; */
  /* margin-right: 24px;
  margin-bottom: 24px; */
}
</style>
