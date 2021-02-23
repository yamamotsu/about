<template>
  <v-card
    elevation="3"
    >
    <v-hover v-slot="{ hover }">
      <stripe-anim :doAnimation="hover"
        :borderWidth="14"
        borderColor="#F8410C"
        :overlay="false">
      <g-link
        :to="card.path"
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
          <h2
            :class="{ 'light-accent-text': hover,
                      'light-main-text': !hover }">
                      {{card.title}}</h2>
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
      </stripe-anim>
    </v-hover>
  </v-card>
</template>

<script>
import Vue from 'vue'
import FocusAnimation from '~/components/BorderFocusAnimation'
import StripeAnimation from '~/components/BorderStripeAnimation'
import GrowAnimation from '~/components/BorderGrowAnimation'
// Vue.component('focus-anim', FocusAnimation)
Vue.component('stripe-anim', GrowAnimation)

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
  transition: color .3s ease-in-out;
  font-size: 26px;
  margin: 4px 0 12px;
}

.card-border-container,
.card-border-container__inner {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.card-border-container::before,
.card-border-container::after,
.card-border-container__inner::before,
.card-border-container__inner::after {
  content: '';
  /* background-color: #F8410C; */
  display: block;
  position: absolute;
  z-index: 10;
  transition: all .2s ease-in-out;
}
/* Left Top border */
.card-border-container::after {
  width: 100%;
  height: 18px;
  background-size: 64px 18px;
  background-image: repeating-linear-gradient(to right top, #F8410C, transparent, 19px);
  background-repeat: repeat-x;
  top: 0px;
  left: 0px;
}
/* Right Bottom border */
.card-border-container::before {
  background-size: 36px 18px;
  background-image: linear-gradient(to left, #F8410C, #F8410C 22px, transparent 22px, transparent 36px);
  background-repeat: repeat-x;
  /* width: 0px;
  height: 2px; */
  right: 0px;
  bottom: 0px;
}
/* Right Top border */
.card-border-container__inner::after {
  background-size: 18px 36px;
  background-image: linear-gradient(to bottom, #F8410C, #F8410C 22px, transparent 22px, transparent 36px);
  background-repeat: repeat-y;
  /* width: 2px;
  height: 0px; */
  top: 0px;
  right: 0px;
}
/* Left Bottom border */
.card-border-container__inner::before {
  background-size: 18px 36px;
  background-image: linear-gradient(to top, #F8410C, #F8410C 22px, transparent 22px, transparent 36px);
  background-repeat: repeat-y;
  /* width: 2px;
  height: 0px; */
  bottom: 0px;
  left: 0px;
}

.card-border-container:hover::after{
  background-image: linear-gradient(to right, #F8410C, #F8410C 36px, transparent 36px, transparent 36px);
}
.card-border-container:hover::before {
  /* width: 100%; */
  background-image: linear-gradient(to left, #F8410C, #F8410C 36px, transparent 36px, transparent 36px);
}

.card-border-container__inner:hover::after{
  background-image: linear-gradient(to bottom, #F8410C, #F8410C 36px, transparent 36px, transparent 36px);
}
.card-border-container__inner:hover::before {
  background-image: linear-gradient(to top, #F8410C, #F8410C 36px, transparent 36px, transparent 36px);
  /* height: 100%; */
}

</style>