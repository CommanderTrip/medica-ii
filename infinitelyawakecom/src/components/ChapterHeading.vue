<script setup lang="ts">
defineProps<{
  title: String;
  description: String;
}>();
</script>

<template>
  <div>
    <p>{{ $props.title }}</p>
    <p><span>|</span></p>
    <p class="description">{{ $props.description }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
  background: linear-gradient(-45deg, var(--text), var(--accent));
}

span {
  color: var(--accent);
}

p {
  font-size: xx-large;
}

.description {
  font-size: large;
  font-weight: lighter;
}
</style>
