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
    <RouterView />
  </header>
</template>

<style scoped></style>
