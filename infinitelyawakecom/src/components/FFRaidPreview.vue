<script setup lang="ts">
import { onMounted } from "vue";
import raidComplete from "@/assets/raid-complete/raid-complete.png";

const serverName = "coeurl";
const serverRegion = "na";

onMounted(async () => {
  fetch(
    `https://www.fflogs.com/v1/rankings/character/blake%20xiao-long/${serverName}/${serverRegion}?api_key=${import.meta.env.VITE_API_KEY}`
  ).then((res) => console.log(res.json()));
});
</script>

<template>
  <img :src="raidComplete" alt="Pandaemonium Raid Series Complete" />
</template>

<style scoped lang="scss">
img {
  width: 90%;
}
</style>
