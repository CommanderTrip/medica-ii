<script setup lang="ts">
import titleImage from "@/assets/awake-screenshots/2023-07-14_18-08-30_Yaz_Dungeon_v2.png";
</script>

<template>
  <div class="container">
    <img :src="titleImage" alt="" />
    <div class="site-title">
      <p class="text-shadow">Infinitely</p>
      <p class="text-shadow">Awake</p>
      <em class="text-shadow">A Final Fantasy XIV Free Company</em>
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
  font-weight: normal;
}
</style>
