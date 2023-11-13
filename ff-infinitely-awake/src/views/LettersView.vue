<script setup>
import LetterCard from "../components/LetterCard.vue"
import { letters } from "@/components/letters"
</script>

<template>
  <h1>Letters of Appreciation to Ras</h1>
  <div className="letters-page">
    <LetterCard v-for="letter in letters" :key="letter.author" :letter="letter" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  color: black;
  border-block: 5px solid black;
  margin-block: 2rem;
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
