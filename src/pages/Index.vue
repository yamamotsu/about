<template>
  <Layout>

    <div class="cards-grid">
      <card class="card" v-for="edge in $page.posts.edges" :key="edge.node.id" :card="edge.node"></card>
    </div>
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
import Card from '~/components/Card.vue'

Vue.component('card', Card)

export default {
  metaInfo: {
    title: 'Hello, world!'
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
  width: 380px;
  margin-right: 24px;
  margin-bottom: 24px;
}
</style>
