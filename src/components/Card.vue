<template>
  <v-card
    elevation="3"
    >
    <v-hover v-slot="{ hover }">
      <focus-anim :doAnimation="hover"
        :borderWidth="16"
        borderColor="#F8410C"
        :overlay="false"
        duration=".2s">
      <!-- <focus-anim :doAnimation="hover"> -->
        <g-link
          :to="card.path"
          class="card-container link">
          <div class="card-thumbnail-container">
            <g-image
              :src="card.thumbnail"
              position="center"
              class="card-thumbnail"/>
          </div>
          <div class="card-info-container">
            <h2
              :class="{ 'light-accent-text': hover,
                        'light-main-text': !hover }">
              {{card.title}}
            </h2>
            <works-info :items="worksInfo"
              :outlined="true"
              :label="true"
              color="#F8410C" background="#FFF"/>
            <div class="tags">
              <p v-for="tag in card.tags" :key="tag.id">#{{tag}}</p>
            </div>
          </div>
        </g-link>
      </focus-anim>
      <!-- </stripe-anim> -->
    </v-hover>
  </v-card>
</template>

<script>
import Vue from 'vue'
import WorksInfoChips from '~/components/WorkInfoChips'
import FocusAnimation from '~/components/BorderFocusAnimation'
Vue.component('focus-anim', FocusAnimation)
Vue.component('works-info', WorksInfoChips)

export default {
  props: ['card'],
  computed: {
    postPath (){
      return "/posts/"+this.card.id
    },
    worksInfo() {
      return [
        {
          icon: "mdi-calendar",
          text: this.card.year
        },
        {
          icon: "mdi-circle-slice-3",
          text: this.card.period
        },
        {
          icon: "mdi-account-circle",
          text: this.card.role
        },
      ]
    }
  }
}
</script>

<style scoped>

.card-container {
  display: flex;
  flex-direction: column;
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
  margin-right: 3px;
  margin-left: 3px;
}

h2 {
  transition: color .3s ease-in-out;
  font-size: 26px;
  margin: 4px 0 6px;
}

</style>