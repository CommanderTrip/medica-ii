<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <div class="page">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "./assets/styles.scss";

.page {
  padding-inline: 1rem;
}

@media (max-width: $lg-phone) {
  .page {
    padding-inline: 0;
  }
}
</style>
