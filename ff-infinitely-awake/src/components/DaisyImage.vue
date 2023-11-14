<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  computed: {
    /**
     * Generates a random number between -45 and 45 and creates a CSS variable
     * string to injects style in order for the style tag below to detect the
     * variable and rotate the image. Designed to create a "collage" of images.
     *
     * @returns {{"--rotation": string}}
     */
    cssVars() {
      return {
        "--rotation": Math.round(Math.random() * 90) - 45 + "deg"
      }
    }
  }
}
</script>

<template>
  <img :key="this.alt" :src="this.src" :alt="this.alt" :style="cssVars" />
</template>

<style scoped>
img {
  transform: rotate(var(--rotation));
  max-width: 100%;
  margin: -50px;
  border: 2px solid white;
}
img:hover {
  transform: scale(2);
  z-index: 99;
}
</style>
