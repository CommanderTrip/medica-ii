<!-- Inspiration from: https://uiverse.io/joe-watson-sbf/rude-shrimp-21 -->
<script setup lang="ts">
import aboutImg from "@/assets/awake-screenshots/about.png";
import staticImg from "@/assets/awake-screenshots/UpmRjZP.png";
import eventsImg from "@/assets/awake-screenshots/image.png";
import joinImg from "@/assets/awake-screenshots/Picsart_24-01-02_00-26-02-539.jpg";
import comingImg from "@/assets/awake-screenshots/2023-11-15_Neneko_Fragments_of_the_Past_34.png";
</script>

<template>
  <nav class="card">
    <RouterLink class="nav-section" to="/about">
      <img class="about-img" :src="aboutImg" alt="" />
      <p>
        <span>About</span>
      </p>
    </RouterLink>
    <RouterLink class="nav-section" to="/static">
      <img class="static-img" :src="staticImg" alt="" />
      <p>
        <span>The Static</span>
      </p>
    </RouterLink>
    <RouterLink class="nav-section" to="/events">
      <img class="events-img" :src="eventsImg" alt="" />
      <p>
        <span>Events</span>
      </p>
    </RouterLink>
    <RouterLink class="nav-section" to="/join">
      <img class="join-img" :src="joinImg" alt="" />
      <p>
        <span>Join Now</span>
      </p>
    </RouterLink>
    <RouterLink class="nav-section" to="/">
      <img class="coming-img" :src="comingImg" alt="" />
      <p>
        <span>Coming Soon...</span>
      </p>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.card {
  width: 75%;
  height: 100%;
  border-radius: 0;
  display: flex;
}

.card a,
p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  box-shadow: -15px 0px 25px -10px black;
}

.card a:hover {
  flex: 4;
}

.card p span {
  position: absolute;
  min-width: 14em;
  margin-bottom: 12rem;
  text-align: left;
  transform: rotate(-90deg);
  transition: all 0.5s;
  text-transform: uppercase;
  color: var(--text);
  letter-spacing: 0.3em;
  font-size: x-large;
  text-shadow:
    0 0 1px #000000,
    0 0 2px #000000,
    0 0 3px #000000;
}

.nav-section {
  position: relative;
}

.nav-section img {
  position: absolute;
  width: auto;
  opacity: 70%;
  height: 100%;
}

.about-img {
  margin-right: 2.5rem;
}

.static-img {
  top: 0;
  margin-left: 20rem;
  height: 120% !important;
  overflow: hidden;
}

.events-img {
  margin-right: 0rem;
}

.join-img {
  margin-left: 5rem;
}

.coming-img {
  margin-left: 30rem;
}
</style>
