<script>
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

export default defineComponent({
  components: { RouterLink }
})
</script>

<template>
  <div class="sidebar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Letters">Letters</RouterLink>
      <RouterLink to="/DaisyLove">Daisy Love</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  padding-right: 0.5rem;
}

a {
  text-decoration: none;
  color: black;
  padding-block: 0.5em;
  padding-right: 5rem;
  padding-left: 1rem;
  text-wrap: nowrap;
  background: linear-gradient(90deg, rgba(255, 228, 196, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  font-style: normal;
  text-align: center;
  font-size: larger;
}

.router-link-active {
  border-block: 2px solid black;
  color: purple;
  background: linear-gradient(90deg, bisque 0%, rgba(255, 255, 255, 0) 100%);
  font-style: italic;
}

nav {
  display: flex;
  flex-direction: column;
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

  a {
    min-width: 50px;
  }
}
</style>
