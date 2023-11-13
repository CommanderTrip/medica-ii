<script>
import { defineComponent, ref } from "vue"
import { RouterLink } from "vue-router"

export default defineComponent({
  components: { RouterLink },
  data: () => ({
    isClosed: ref(false),
    mobileSidebar: ref(false)
  }),
  methods: {
    onResize() {
      this.mobileSidebar = window.innerWidth < 480 // See styles.scss for size
    },
    flipState() {
      this.isClosed = !this.isClosed
      console.log("isOpen", this.isClosed)
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener("resize", this.onResize, { passive: true })
  }
})
</script>

<template>
  <div v-if="!mobileSidebar" class="sidebar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Letters">Letters</RouterLink>
      <RouterLink to="/DaisyLove">Daisy Love</RouterLink>
    </nav>
  </div>

  <div v-else :class="{ open: isClosed }">
    <div @click="flipState">
      <span class="material-symbols-outlined"> menu </span>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Letters">Letters</RouterLink>
      <RouterLink to="/DaisyLove">Daisy Love</RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles.scss";

.sidebar {
  padding-right: 0.5rem;
  transition: 0.4s;
}

span {
  color: black;
  padding-left: 2rem;
}

.open > nav {
  display: none;
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

@media (max-width: $lg-phone) {
  .sidebar {
    background: #2c4736;
    border-radius: 10px;
    padding-block: 1rem;
    margin: 1rem;
  }

  a {
    min-width: 50px;
    border-radius: 10px;
    margin-inline: 1rem;
    margin-block: 0.1rem;
  }
}
</style>
