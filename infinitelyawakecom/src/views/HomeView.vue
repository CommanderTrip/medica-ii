<script setup lang="ts">
import HomeAccordion from "@/components/HomeAccordion.vue";
import ChapterHeading from "@/components/ChapterHeading.vue";
import DisplayCard from "@/components/DisplayCard.vue";
</script>

<template>
  <div class="wrapper">
    <div class="site-title">
      <p>Infinitely</p>
      <p>Awake</p>
      <em>A Final Fantasy XIV Free Company</em>
    </div>
    <HomeAccordion />
  </div>
  <ChapterHeading title="Welcome" description="You should join us" />
  <display-card
    image-left="true"
    title="About"
    description="We are Awake. Not sleepy."
    image="../assets/awake-screenshots/image.png)"
  />
  <display-card
    imageLeft="false"
    title="About"
    description="We are Awake. Not sleepy."
    image="../assets/awake-screenshots/2964358963.png)"
  />
  <display-card
    image-left="true"
    title="About"
    description="We are Awake. Not sleepy."
    image="../assets/awake-screenshots/image.png)"
  />
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: gray;
  height: var(--page-banner-height);
}

.site-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: xxx-large;
  padding-inline: 2rem;
}

.site-title em {
  font-size: x-large;
  font-weight: lighter;
}
</style>
