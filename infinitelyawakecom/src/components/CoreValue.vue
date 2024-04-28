<script setup lang="ts">
defineProps<{
  image: string;
  alt: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="value">
    <img :src="image" :alt="alt" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.value {
  display: flex;
  flex-direction: column;
  margin: 2%;
  padding: 2%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  transition: box-shadow 0.2s;
}

.value:hover {
  box-shadow: rgba(255, 255, 255, 0.24) 0 3px 8px;
}

.value img {
  max-width: 25%;
}

.value img,
h2 {
  margin-inline: auto;
}

.value p {
  text-indent: 2rem;
}

.value h2 {
  font-size: xx-large;
}
</style>
