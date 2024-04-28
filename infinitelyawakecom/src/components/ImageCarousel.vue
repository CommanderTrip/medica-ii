<script setup lang="ts">
import titleImage from "@/assets/awake-screenshots/wave.jpg";
</script>

<template>
  <div class="container">
    <img :src="titleImage" alt="" />
    <div class="site-title">
      <p>Infinitely</p>
      <p>Awake</p>
      <em>A Final Fantasy XIV Free Company</em>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.site-title {
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: xxx-large;
  padding-inline: 2rem;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 33%;
}

.site-title em {
  font-size: x-large;
  font-weight: lighter;
  text-shadow:
    0 0 10px #ffffff,
    0 2px 20px #ffffff;
}
</style>
