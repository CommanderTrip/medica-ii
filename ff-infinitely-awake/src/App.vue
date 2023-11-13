<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
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
  padding-block: 0.5em;
  padding-right: 5rem;
  min-width: 200px;
  background: linear-gradient(90deg, rgba(255, 228, 196, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  font-style: normal;
  text-align: center;
  font-size: larger;
}

nav {
  display: flex;
  flex-direction: column;
}

.router-link-active {
  border-block: 2px solid black;
  color: purple;
  background: linear-gradient(90deg, bisque 0%, rgba(255, 255, 255, 0) 100%);
  font-style: italic;
}

.page {
  padding-inline: 2rem;
}

@media (hover: hover) {
  a:hover:not(.router-link-active) {
    background: linear-gradient(90deg, var(--ras-color) 0%, rgba(255, 255, 255, 0) 100%);
  }
}

@media (max-width: 800px) {
  nav {
    flex-direction: row;
  }

  header {
    margin-right: 0;
    min-width: 100px;
    position: sticky;
    bottom: 0;
  }

  a {
    min-width: 50px;
  }

  .page {
    padding-inline: 0;
  }
}
</style>
