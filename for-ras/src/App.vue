<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/Letters">Letters</RouterLink>
        <RouterLink to="/DaisyLove">Daisy Love</RouterLink>
      </nav>
    </div>
  </header>
  <div className="page">
    <RouterView />
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  padding-inline: 2em;
  padding-block: 0.5em;
  padding-right: 5rem;
  min-width: 200px;
  background: linear-gradient(90deg, var(--ras-color-darken) 0%, rgba(255, 255, 255, 0) 100%);
  font-style: normal;
  text-align: center;
  font-size: larger;
  text-wrap: nowrap;
}

a:first-child {
  margin-top: 5rem;
}

nav {
  display: flex;
  flex-direction: column;
}

.router-link-active {
  border-block: 2px solid black;
  color: purple;
  background: linear-gradient(90deg, white 0%, rgba(255, 255, 255, 0) 100%);
  font-style: italic;
}

.page {
  padding-inline: 5%;
  width: 100%;
}

@media (hover: hover) {
  a:hover:not(.router-link-active) {
    background: linear-gradient(90deg, var(--ras-color) 0%, rgba(255, 255, 255, 0) 100%);
  }
}

@media (max-width: 800px) {
  header {
    margin-right: 0;
    min-width: 100px;
  }

  a {
    min-width: 50px;
    text-wrap: wrap;
  }

  .page {
    padding-inline: 0;
  }
}
</style>
