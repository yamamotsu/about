<template>
  <div class="about-container">
    <profile-card class="about-profile-card"/>
    <div class="about-main">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ProfileCard from '~/components/ProfileCard'
Vue.component('profile-card', ProfileCard)

export default {
  components: { ProfileCard },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: row;

  margin-top: 12px;
}

.about-profile-card {
  margin-right: 24px;
}

.about-main {
}
</style>