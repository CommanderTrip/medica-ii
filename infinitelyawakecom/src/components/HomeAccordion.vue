<!-- Inspiration from: https://uiverse.io/joe-watson-sbf/rude-shrimp-21 -->
<script setup lang="ts"></script>

<template>
  <div class="card">
    <p><span>Home</span></p>
    <p><span>About</span></p>
    <p><span>The Static</span></p>
    <p><span>Events</span></p>
    <p><span>Join Now</span></p>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 40%;
  height: 100%;
  border-radius: 0;
  display: flex;
}

.card p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.5s;
  background: #212121;
  border: 1px solid var(--accent);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  box-shadow: -15px 0px 25px -10px var(--text);
}

.card p:hover {
  flex: 4;
}

.card p span {
  min-width: 14em;
  padding: 0.5em;
  text-align: left;
  transform: rotate(-90deg);
  transition: all 0.5s;
  text-transform: uppercase;
  color: var(--text);
  letter-spacing: 0.1em;
  margin-bottom: 100px;
}
</style>
