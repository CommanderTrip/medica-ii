<script setup>
import LetterCard from "../components/LetterCard.vue"
import { letters } from "../components/letters"
</script>

<template>
  <h1>Letters</h1>
  <div className="letters-page">
    <LetterCard v-for="letter in letters" :key="letter.author" :letter="letter" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 36pt;
}

.letters-page {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  min-width: 350px;
}

@media (max-width: 800px) {
  .letters-page {
    min-height: 100vh;
    grid-template-columns: auto;
  }
}
</style>
