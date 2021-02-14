<template>
  <v-card
    elevation="1"
  >
    <g-link
      :to="card.path"
      active-class=""
      exact-active-class=""
      class="card-container link">
      <div class="card-thumbnail-container">
        <g-image
          :src="card.thumbnail"
          position="center"
          class="card-thumbnail"
          >
          <v-card-title v-text="card.title"/>
        </g-image>
      </div>
      <div class="card-info-container">
        <h2>{{card.title}}</h2>
        <div class="works-info">
          <p>{{card.year}}</p>
          <p>{{card.period}}</p>
          <p>{{card.role}}</p>
        </div>
        <div class="tags">
          <p v-for="tag in card.tags" :key="tag.id">#{{tag}}</p>
        </div>
      </div>
    </g-link>
  </v-card>
</template>

<script>
export default {
  props: ['card'],
  computed: {
    postPath (){
      return "/posts/"+this.card.id
    }
  }
}
</script>

<style scoped>

.card-container {
  display: flex;
  flex-direction: column;

  /* background-color: #FFF; */
  /* box-shadow: #0000001e 0px 3px 6px;
  border-radius: 32px; */
  padding: 18px;
}

.card-thumbnail-container{
  box-sizing: border-box;
  /* margin: 24px 24px 0 24px; */
}

.card-thumbnail {
  box-sizing: border-box;
  width: 100%;

  margin: 0 auto;
  display: block;
  /* border-radius: 4px 4px 0 0; */
}

.card-info-container{
  box-sizing: border-box;
  /* padding-right: 28px;
  padding-left: 24px; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 6px;
  margin-right: 6px;
  margin-left: 6px;
}

h2 {
  color: #F8410C;
  font-size: 26px;
  margin: 4px 0 12px;
}
/*
.card-info-container p{
  margin-right: 0.7em;
  margin-top: 0;
  margin-bottom: 0;
} */

</style>