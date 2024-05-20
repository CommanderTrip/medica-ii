<script setup lang="ts">
import ffxiv from "@/assets/icons/ffxiv-icon.png";
import pvp from "@/assets/icons/pvp_profile.png";
import goldSaucer from "@/assets/icons/gold_saucer.png";
import job from "@/assets/icons/journal.png";
</script>

<template>
  <ul>
    <li>
      <img :src="ffxiv" alt="Main Scenario Quest" />
      <p>Main Scenario Progression</p>
    </li>
    <li>
      <img :src="pvp" alt="PVP" />
      <p>Friendly 1v1's and Raids</p>
    </li>
    <li>
      <img :src="goldSaucer" alt="Golden Saucer" />
      <p>Glamours and Golden Saucer</p>
    </li>
    <li>
      <img :src="job" alt="Main Scenario Quest" />
      <p>Job Leveling</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  width: 100%;
  margin: auto;
}

li {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-inline: 7rem;
  padding-block: 1rem;
}

img {
  width: 64px;
}

p {
  font-size: large;
}
</style>
