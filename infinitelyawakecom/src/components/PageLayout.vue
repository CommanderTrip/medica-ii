<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div class="page-layout">
    <PageHeader />
    <div class="page-content">
      <slot></slot>
    </div>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.page-content {
  height: 100%;
}
</style>
