<template>
  <div class="_layout">
    <header class="header">
      <div class="header-container">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <v-hover v-slot="{ hover }">
          <g-link to="/"
              :class="{ 'on-hover': hover }"
              class="header-logo link">
              <!-- <g-image alt="Logo"
                src="~/favicon.png" width="54" /> -->
              <logo :colorTheme="hover? 'fill':'light'"
                  :width="54" :height="54"
                  class="header-svg"/>
              <p class="header-sitename">
                {{ $static.metadata.siteName }}
              </p>
          </g-link>
        </v-hover>

        <v-tabs
          v-model="tab"
          class="nav"
          right
        >
          <v-tab v-for="item in links" :key="item">{{item}}</v-tab>
        </v-tabs>
        <!-- <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav> -->
      </div>
    </header>
    <main class="main">
      <!-- <v-tabs-items v-model="tab"/> -->
      <slot/>
    </main>

    <div class="_footer">
      <div class="footer-assignment">
        {{ new Date().getFullYear() }} — <strong>Yamamotsu</strong> @yamamotsuy
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SiteLogo from '~/components/SiteLogo'

Vue.component('logo', SiteLogo)

export default {
  data () {
    return {
      links: [
        'Home',
        'SW&HW',
        'Graphics',
        'About',
      ],
      tab: 0
    }
  },
  watch: {
    tab (){
      this.$emit("tab", this.tab)
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

._layout {
  margin: 0 auto;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  width: 100%;
  background-color: #FFF;
}

.header-container {
  /* position: fixed; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 24px;
  margin: 0 auto;
  max-width: 1240px;
}

.header-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.header-svg {
  transition: all .2s ease-in-out;
}

.header-sitename {
  font-size: 32px;
  letter-spacing: -0.3px;
  font-weight: 500;
  margin-left: 8px;
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: none;
  color: #5A5A5A;
  cursor: inherit;
}

.on-hover .header-sitename {
  color: #F8410C;
  transition: color .3s ease-in-out;
}

.main {
  width: 1240px;
  max-width: 100%;
  padding: 0 18px;
  margin-top: 24px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}

.nav {
  max-width: 40%;
}

.nav__link {
  /* margin-left: 24px;
  font-size: 24px; */
  text-decoration: none;
  color: #5A5A5A;
}

._footer {
  width: 100%;
  background-color: #5A5A5A;
  /* height: 48px; */
  padding: 18px 0;
  margin-top: 8px;
}

.footer-assignment {
  margin: 0 auto;
  font-size: 20px;
  color: #FFF;
  text-align: center;
}
</style>
