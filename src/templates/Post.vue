<template>
  <Layout>
    <div class="post">
      <g-image
        :src="$page.post.thumbnail"
        position="center"
        class="thumbnail"
        />
      <div class="post-content">
        <div class="post-summary">
          <v-breadcrumbs class="breadcrumbs" :items="breadCrumbItems" large/>
          <h1 class="article-title">{{ $page.post.title }}</h1>
          <works-info :items="worksInfo"
            :outlined="true"
            :label="true"
            color="#F8410C" background="#FFF"/>
          <div class="tags">
            <p v-for="tag in $page.post.tags" :key="tag.id">#{{tag}}</p>
          </div>
        </div>
        <v-divider/>
        <article class="article" v-html="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!){
   post(id:$id) {
    id
    title
    content
    path
    year
    period
    role
    github
    tags
    thumbnail (height: 480, fit: cover, quality: 90)
  }
}
</page-query>

<script>
import Vue from 'vue'
import WorksInfoChips from '~/components/WorkInfoChips'
Vue.component('works-info', WorksInfoChips)
export default {
  computed: {
    breadCrumbItems() {
      return [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: this.$page.post.title,
          disabled: true,
          href: this.$page.post.path
        },
      ]
    },
    worksInfo() {
      return [
        {
          icon: "mdi-calendar",
          text: this.$page.post.year
        },
        {
          icon: "mdi-circle-slice-3",
          text: this.$page.post.period
        },
        {
          icon: "mdi-account-circle",
          text: this.$page.post.role
        },
      ]
    }
  }
}
</script>

<style scoped>

.post {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  margin: 8px 0;
}

.post-content{
  padding: 0 18px;
}

.post-summary {
  margin: 18px 0;
}

.breadcrumbs {
  padding: 0 8px;
}

.v-breadcrumbs--large li {
  font-size: 20px;
}

.works-info p {
  font-size: 26px;
}
.tags {
  margin-top: 6px;
}
.tags p {
  font-size: 22px;
}

h1.article-title {
  margin-top: 12px;
  margin-bottom: 8px;
}

.article {
  margin: 24px 18px 0 18px;
}

/*
.article h2 {
  font-size: 28px;
}
.article h3 {
  font-size: 26px;
}
.article h4 {
  font-size: 24px;
  font-weight: 500;
} */

</style>

<style>

.thumbnail {
  margin: 0 auto;
  /* min-height: 480px; */
  max-width: 100%;
  display: block;
}

.article p {
  color: #5A5A5A;
  font-size: 24px;
  line-height: 1.4em;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}

</style>