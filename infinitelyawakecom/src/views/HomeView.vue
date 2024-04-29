<script setup lang="ts">
import HomeAccordion from "@/components/HomeAccordion.vue";
import ChapterHeading from "@/components/ChapterHeading.vue";
import DisplayCard from "@/components/DisplayCard.vue";

import image1 from "@/assets/awake-screenshots/2I4recB.png";
import image2 from "@/assets/awake-screenshots/187b6a0672385-screenshotUrl.jpg";
import image3 from "@/assets/awake-screenshots/2023-05-05_00-29-30_Talim_-_d-d-doppio.png";
import PageFooter from "@/components/PageFooter.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

const welcomeDesc = `
Whether you're a seasoned raider or just getting started becoming the Warrior of Light, we're thrilled to have you join
us in this adventure-filled community. Get ready to embark on thrilling quests, conquer formidable foes, and forge
unforgettable memories together. So grab your controllers or keyboards, and may your gaming experience be legendary!
`;
</script>

<template>
  <div class="wrapper">
    <ImageCarousel />
    <HomeAccordion />
  </div>
  <ChapterHeading title="Welcome" :description="welcomeDesc" />
  <display-card
    :image-left="true"
    title="About"
    description="We are Awake. Not sleepy."
    :image="image1"
    alt=""
  />
  <display-card
    :image-left="false"
    title="About"
    description="We are Awake. Not sleepy."
    :image="image2"
    alt=""
  />
  <display-card
    :image-left="true"
    title="About"
    description="We are Awake. Not sleepy."
    :image="image3"
    alt=""
  />
  <PageFooter />
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--page-banner-height);
}
</style>
