<script setup lang="ts">
import HomeAccordion from "@/components/HomeAccordion.vue";
import DisplayCard from "@/components/DisplayCard.vue";

import commAndComp from "@/assets/awake-screenshots/community-and-competition.png";
import eventsAndFun from "@/assets/awake-screenshots/events-and-fun.jpg";
import topTierRaiding from "@/assets/awake-screenshots/top-tier-raiding.png";
import PageFooter from "@/components/PageFooter.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

const welcomeDesc = `
Whether you're a seasoned raider or just getting started becoming the Warrior of Light, we're thrilled to have you join
us in this adventure-filled community. Get ready to embark on thrilling quests, conquer formidable foes, and forge
unforgettable memories together. So grab your controllers or keyboards, and may your gaming experience be `;
</script>

<template>
  <div class="wrapper">
    <ImageCarousel />
    <HomeAccordion />
  </div>
  <div class="welcome">
    <h1>Welcome</h1>
    <p>
      {{ welcomeDesc }}
      <em>LEGENDARY!</em>
    </p>
  </div>
  <display-card
    :image-left="true"
    title="Community and Competition"
    description="Make friends and challenge each other!"
    :image="commAndComp"
    alt="A show of friendly competition."
  />
  <display-card
    :image-left="false"
    title="Events and Fun"
    description="Always something to do!"
    :image="eventsAndFun"
    alt="A show of excitement."
  />
  <display-card
    :image-left="true"
    title="Top Tier Raiding"
    description="Overcoming our next, new boss!"
    :image="topTierRaiding"
    alt="A show of accomplishment"
  />
  <PageFooter />
</template>

<style scoped lang="scss">
.welcome {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 15%;
  padding-block: 2rem;

  h1 {
    font-size: xxx-large;
  }

  p {
    font-size: large;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--page-banner-height);
}
</style>
