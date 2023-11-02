<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    random: {
      type: Number
    }
  },
  computed: {
    cssVars() {
      return {
        "--rotation": Math.round(this.random) - 45 + "deg"
      }
    }
  }
}
</script>

<template>
  <img :key="this.alt" :src="this.src" :alt="this.alt" :style="cssVars" />
</template>

<style>
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
