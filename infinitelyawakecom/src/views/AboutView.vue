<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
import community from "@/assets/icons/community.png";
import respect from "@/assets/icons/friendship.png";
import competitive from "@/assets/icons/competitive.png";
import fun from "@/assets/icons/confetti.png";
import CoreValue from "@/components/CoreValue.vue";

const communityDescription = `
We are a tight-knit community that thrives on mutual support and interconnectedness bonded by camaraderie and shared
passion. In and outside the virtual realm, we prioritize collaboration and support, valuing each other's strengths
and fostering a sense of belonging. We organize regular gaming sessions not just for the thrill of victory, but for
the joy of shared experiences and mutual growth. In times of challenge, whether it be a tough boss battle or a
personal setback, the we stand united, offering encouragement and assistance to ensure no member is left behind.
Beyond the pixels and polygons, we cultivate real friendships, celebrating victories both in-game and in life,
embodying the belief that true success is measured by the strength of the bonds we forge.
`;
const respectDescription = `
We are dedicated to upholding the fundamental value of respect in all aspects of our interactions. Members
prioritize empathy, understanding, and dignity in our events with one another. We actively listen to diverse
perspectives, seeking common ground and fostering an atmosphere of inclusivity where every voice is heard and valued.
Through our actions, we demonstrate a profound appreciation for the uniqueness of each individual, striving to create
a space where differences are not just tolerated, but celebrated. Within Infinitely Awake, kindness and
consideration are not merely virtues; they are the guiding principles that shape our interactions and define our
collective identity.
`;
const competitiveDescription = `
Members and the Static embody the essence of competition, where we hone our skills and talents in exhilarating battles.
Comprised of dedicated players who hunger for victory, this group thrives on the adrenaline of intense competition but
there are areas for everyone. We push each other to our limits, constantly improving to reach the 99th percentile. For
us, every defeat is a lesson, and every triumph is a testament to our dedication and perseverance. In our pursuit of
excellence, we inspire not only each other proving that the spirit of competition is a powerful force for growth
and achievement.
`;
const funDescription = `
We value the essence of gaming as pure, unadulterated fun. Composed of individuals who see gaming as a joyful escape
from the mundane, we prioritize laughter and camaraderie above all else. We embark on virtual quests not just to
conquer challenges, but to share in the delight of exploration and discovery together. Whether traversing fantastical
realms or simply enjoying a round of casual matches, our members infuse every gaming session with infectious
enthusiasm and positivity. In a world where stress and responsibilities often loom large, we provide a sanctuary
of lightheartedness and fun, reminding everyone that sometimes, the greatest victory is simply enjoying the journey.
`;
</script>

<template>
  <PageLayout>
    <h1>What We Value</h1>
    <div class="values">
      <CoreValue
        title="Community"
        :image="community"
        alt="Community"
        :description="communityDescription"
      >
        <a
          class="attribute"
          href="https://www.flaticon.com/free-icons/together"
          title="together icons"
        >
          Together icons created by Us and Up - Flaticon
        </a>
      </CoreValue>
      <CoreValue title="Respect" :image="respect" alt="Respect" :description="respectDescription">
        <a
          class="attribute"
          href="https://www.flaticon.com/free-icons/together"
          title="together icons"
        >
          Together icons created by Us and Up - Flaticon
        </a>
      </CoreValue>
      <CoreValue
        title="Competition"
        :image="competitive"
        alt="Competition"
        :description="competitiveDescription"
      >
        <a
          class="attribute"
          href="https://www.flaticon.com/free-icons/advantage"
          title="advantage icons"
        >
          Advantage icons created by Uniconlabs - Flaticon
        </a>
      </CoreValue>
      <CoreValue title="Fun" :image="fun" alt="Fun" :description="funDescription">
        <a class="attribute" href="https://www.flaticon.com/free-icons/party" title="party icons">
          Party icons created by pongsakornRed - Flaticon
        </a>
      </CoreValue>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
h1 {
  display: flex;
  justify-content: center;
  font-size: xxx-large;
}

.values {
  max-width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.values img {
  object-fit: contain;
}

.attribute {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0.5;
  font-style: italic;
  text-decoration: none;
  color: black;
  font-size: small;
}
</style>
