<script setup lang="ts">
import HomeAccordion from "@/components/HomeAccordion.vue";
import ChapterHeading from "@/components/ChapterHeading.vue";
import DisplayCard from "@/components/DisplayCard.vue";

import image1 from "@/assets/awake-screenshots/2I4recB.png";
import image2 from "@/assets/awake-screenshots/187b6a0672385-screenshotUrl.jpg";
import image3 from "@/assets/awake-screenshots/2023-05-05_00-29-30_Talim_-_d-d-doppio.png";
import PageFooter from "@/components/PageFooter.vue";
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
