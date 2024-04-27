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
    <img :class="{ cutImageLeft: imageLeft }" :src="image" :alt="alt" />
    <ChapterHeading class="wide" :title="title" :description="description" />
  </div>
  <div v-else class="wrapper">
    <ChapterHeading class="wide" :title="title" :description="description" />
    <img :class="{ cutImageRight: !imageLeft }" :src="image" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
img {
  width: 50%;
  object-fit: cover;
  padding-block: 2%;
}

.cutImageLeft {
  mask-image: linear-gradient(-90deg, #00000000, #ffffffff 25%);
}

.cutImageRight {
  mask-image: linear-gradient(90deg, #00000000, #ffffffff 25%);
}

.wide {
  width: 50%;
}
</style>
