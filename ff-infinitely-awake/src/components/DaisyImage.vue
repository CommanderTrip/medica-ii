<script>
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/vue"

export default {
  components: { AdvancedImage },
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  data: () => ({
    photo: null
  }),
  created() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dnwngayqx"
      }
    })
    this.photo = cld.image(this.$props.src)
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
  <AdvancedImage :cldImg="photo" :style="cssVars" />
</template>

<style scoped>
img {
  transform: rotate(var(--rotation));
  max-width: 25%;
  border: 2px solid white;
  margin-top: -2rem;
}

img:hover {
  transform: scale(2);
  z-index: 99;
}
</style>
