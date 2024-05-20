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
    <ChapterHeading
      class="wide"
      :class="{ headerRight: imageLeft }"
      :title="title"
      :description="description"
    >
      <slot></slot>
    </ChapterHeading>
  </div>
  <div v-else class="wrapper">
    <ChapterHeading
      class="wide"
      :class="{ headerLeft: !imageLeft }"
      :title="title"
      :description="description"
    >
      <slot></slot>
    </ChapterHeading>
    <img :class="{ cutImageRight: !imageLeft }" :src="image" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
img {
  width: 50%;
  object-fit: cover;
}

.cutImageLeft {
  mask-image: linear-gradient(to left, #00000000, #00000000 2%, #ffffffff 15%);
}

.cutImageRight {
  mask-image: linear-gradient(to right, #00000000, #00000000 2%, #ffffffff 15%);
}

.wide {
  width: 50%;
}
</style>
