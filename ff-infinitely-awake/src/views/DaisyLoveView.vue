<script>
import DaisyImage from "../components/DaisyImage.vue"
import { daisyPhotos } from "@/components/daisyPhotos"
import PageLayout from "../components/PageLayout.vue"

export default {
  data: () => ({
    photos: daisyPhotos
  }),
  components: { PageLayout, DaisyImage }
}
</script>

<template>
  <PageLayout page-title="Daisy Love">
    <div class="daisy-page">
      <DaisyImage v-for="image in photos" :key="image.alt" :src="image.src" :alt="image.alt" />
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
@import "../assets/styles";

img:hover {
  transform: scale(1.5);
  z-index: 99;
}

.daisy-page {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-block: 5rem;
  margin-right: 5%;
}
</style>
