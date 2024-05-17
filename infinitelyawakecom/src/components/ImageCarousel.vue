<script setup lang="ts">
import titleImage from "@/assets/awake-screenshots/2023-07-14_18-08-30_Yaz_Dungeon_v2.png";
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
  overflow: hidden;
}

.site-title {
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: xxx-large;
  padding-inline: 2rem;
  text-shadow:
    0 0 1px #000000,
    0 0 2px #000000,
    0 0 3px #000000;
}

img {
  width: 100%;
  height: auto;
  min-height: 100%;
  object-fit: cover;
  opacity: 80%;
}

.site-title em {
  font-size: x-large;
  font-weight: lighter;
  text-shadow:
    0 0 1px #000000,
    0 0 2px #000000,
    0 0 3px #000000;
}
</style>
