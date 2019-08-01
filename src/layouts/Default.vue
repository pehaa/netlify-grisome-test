<template>
  <div class="layout container">
    <header class="header pt-5">
      <g-link to="/">
        <g-image src="~/assets/logo.svg" width="300"/>
      </g-link>
      <nav class="nav">
        <ul class="flex font-display">
          <li class="mr-6">
            <g-link class="text-primary hover:text-secondary" to="/">Home</g-link>
          </li>
          <li class="mr-6">
            <g-link class="text-primary hover:text-secondary" to="/category/apprendre">Apprendre</g-link>
          </li>
           <li class="mr-6">
            <g-link class="text-primary hover:text-secondary" to="/category/utiliser">Utiliser</g-link>
          </li>
           <li class="mr-6">
            <g-link class="text-primary hover:text-secondary" to="/category/sinspirer">S'inspirer</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {

  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
