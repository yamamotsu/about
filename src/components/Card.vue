<template>
  <g-link
    :to="card.path"
    active-class=""
    exact-active-class=""
    class="card-container link">
    <div class="card-thumbnail-container">
      <!-- <g-image alt="thumbnail" :src="thumbnailPath" width="300"/> -->
      <g-image
        :src="require(`!!assets-loader!@images/${card.thumbnail}`)"
        width="400"
        height="510"
        class="card-thumbnail"
        />
      <!-- <img src="thumbnailPath" alt="thumbnail"/> -->
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
  width: 380px;

  background-color: #FFF;
  box-shadow: #0000001e 0px 3px 6px;
  border-radius: 32px;
}

.card-thumbnail-container{
  box-sizing: border-box;
  margin: 24px 24px 0 24px;
}

.card-thumbnail {
  border-radius: 13px;
  box-sizing: border-box;
  max-width: 100%;
}

.card-info-container{
  box-sizing: border-box;
  padding-right: 28px;
  padding-left: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
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