<script setup>
import LetterCard from "../components/LetterCard.vue"
import { letters } from "@/components/letters"
import PageLayout from "@/components/PageLayout.vue"
</script>

<template>
  <PageLayout page-title="Letters of Appreciation to Ras">
    <div class="letters-page">
      <LetterCard v-for="letter in letters" :key="letter.author" :letter="letter" />
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
@import "../assets/styles";

.letters-page {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
}

// Single Column mode
@media (max-width: $sm-monitor) {
  .letters-page {
    min-height: 100vh;
    grid-template-columns: auto;
  }
}
</style>
