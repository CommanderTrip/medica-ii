<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  fetch(
    "https://www.fflogs.com/v1/rankings/character/{characterName}/{serverName}/{serverRegion}"
  ).then((res) => console.log(res.json()));
});
</script>

<template>
  <p>hi</p>
</template>

<style scoped lang="scss"></style>
