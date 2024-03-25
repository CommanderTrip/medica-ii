<script lang="ts">
import ChapterHeading from "@/components/ChapterHeading.vue";

export default {
  components: { ChapterHeading },
  props: {
    imageLeft: {
      type: Boolean,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div v-if="$props.imageLeft" class="wrapper">
    <img src="../assets/awake-screenshots/image.png" alt="idk" />
    <ChapterHeading class="wide" title="{{$props.title}}" description="{{ $props.description }}" />
  </div>
  <div v-else class="wrapper">
    <ChapterHeading class="wide" title="{{$props.title}}" description="{{ $props.description }}" />
    <img src="../assets/awake-screenshots/image.png" alt="idk" />
  </div>
</template>

<style scoped lang="scss">
img {
  width: 50%;
  object-fit: cover;
}

.wide {
  width: 50%;
}
</style>
