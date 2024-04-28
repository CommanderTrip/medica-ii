<script setup lang="ts"></script>

<template>
  <header class="page-header">
    <RouterLink to="/" class="title">Infinitely Awake</RouterLink>
    <nav class="header-routes">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/static">The Static</RouterLink>
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="/join">Join Now</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
$header-height: 8rem;

.title {
  font-size: x-large;
  text-decoration: none;
}

.header-routes {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-routes a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 2rem;
  height: 100%;
  width: 25%;
  text-decoration: none;
  background-image: linear-gradient(#00000000 0, #ffffffff 100%);
  background-position-y: $header-height;
  background-origin: border-box;
  background-repeat: no-repeat;
  transition: background-position 0.5s;
}

a:hover {
  background-position-y: 100%;
}

.page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  height: $header-height;
  background-color: red;
  padding-inline: 5%;
}
</style>
