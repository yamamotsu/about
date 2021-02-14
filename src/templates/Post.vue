<template>
  <Layout>
    <div class="post">
      <g-image
        :src="$page.post.thumbnail"
        position="center"
        class="thumbnail"
        />
      <div class="post-content">
        <h1 class="article-title">{{ $page.post.title }}</h1>
        <div class="works-info">
          <p>Year: {{$page.post.year}}</p>
          <p>Period: {{$page.post.period}}</p>
          <p>Role: {{$page.post.role}}</p>
        </div>
        <div class="tags">
          <p v-for="tag in $page.post.tags" :key="tag.id">#{{tag}}</p>
        </div>
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

<style scoped>

.post {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
}

.post-content{
  /* padding: 0 24px; */
}

.works-info p {
  font-size: 26px;
}
.tags p {
  font-size: 22px;
}
/*
.article h1 {
  font-size: 30px;
}
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