<script setup lang="ts">
import ChapterHeading from "@/components/ChapterHeading.vue";

defineProps<{
  imageLeft: boolean;
  title: string;
  description: string;
  image: string;
  alt: string;
}>();
</script>

<template>
  <div v-if="imageLeft" class="wrapper">
    <img :src="image" :alt="alt" />
    <ChapterHeading class="wide" :title="title" :description="description" />
  </div>
  <div v-else class="wrapper">
    <ChapterHeading class="wide" :title="title" :description="description" />
    <img :src="image" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
img {
  width: 50%;
  object-fit: cover;
  padding: 2%;
}

.wide {
  width: 50%;
}
</style>
