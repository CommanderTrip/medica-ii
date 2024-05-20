<script setup lang="ts">
defineProps<{
  title: String;
  description: String;
}>();
</script>

<template>
  <div>
    <h2>{{ $props.title }}</h2>
    <em class="description">{{ $props.description }}</em>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
}

h2 {
  font-size: xx-large;
}

.description {
  font-size: large;
  font-weight: lighter;
}
</style>
