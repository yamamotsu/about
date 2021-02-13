<template>
  <div class="layout">
    <header class="header">
      <div class="header-container">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-link to="/" class="header-logo link">
          <g-image alt="Logo" src="~/favicon.png" width="54" />
          <p class="header-sitename">{{ $static.metadata.siteName }}</p>
        </g-link>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

.layout {
  /* max-width: 760px; */
  margin: 0 auto;
  background-color: #F7F7F7;
  padding-bottom: 24px;
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

.header-sitename {
  font-size: 32px;
  letter-spacing: -0.3px;
  font-weight: 500;
  margin-left: 8px;
  text-decoration: none;
  color: #5A5A5A;
  cursor: inherit;
}

.main {
  max-width: 1240px;
  margin: 32px auto;
  padding: 0 24px;
}

.nav__link {
  margin-left: 24px;
  font-size: 24px;
  text-decoration: none;
  color: #5A5A5A;
}

</style>
