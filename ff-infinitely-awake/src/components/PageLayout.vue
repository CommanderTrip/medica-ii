<script>
import SideBar from "@/components/SideBar.vue"

export default {
  components: { SideBar },
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="page-layout">
    <h1 class="page-title">{{ pageTitle }}</h1>
    <SideBar class="sidebar" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles.scss";

.page-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.page-title {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  color: black;
  border-block: 5px solid black;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  grid-area: 1 / 1 / 2 / 6;
}

.sidebar {
  grid-area: 2 / 1 / 6 / 2;
}

.content {
  grid-area: 2 / 2 / 6 / 6;
}

@media (max-width: $sm-monitor) {
  .page-layout {
    grid-template-columns: repeat(3, 1fr);
    grid-area: 1 / 1 / 2 / 3;
  }

  .sidebar {
    grid-area: 2 / 1 / 2 / 1;
  }

  .content {
    grid-area: 2 / 2 / 2 / 4;
  }
}

@media (max-width: $lg-phone) {
  .page-layout {
    display: flex;
    flex-direction: column;
  }
}
</style>
