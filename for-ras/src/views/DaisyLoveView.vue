<script>
import DaisyImage from "../components/DaisyImage.vue"
import { daisyPhotos } from "../components/daisyPhotos"

export default {
  data: () => ({
    photos: daisyPhotos
  }),
  methods: {
    random() {
      return Math.random()
    }
  },
  components: { DaisyImage }
}
</script>

<template>
  <h1>Daisy Love</h1>
  <div className="daisy-page">
    <DaisyImage
      v-for="image in this.photos"
      :key="'hi!' + image.alt"
      :src="image.src"
      :alt="image.alt"
      :random="this.random() * 90"
    />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 36pt;
  color: black;
  border-block: 5px solid black;
  margin-block: 2rem;
}

img:hover {
  transform: scale(1.25);
  z-index: 99;
}

.daisy-page {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column dense;
  justify-items: center;
  min-width: 350px;
}
</style>
