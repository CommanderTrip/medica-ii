<script>
import groupPic from "@/assets/static-p9s-group-pic.png"
import SideBar from "@/components/SideBar.vue"
import PageLayout from "@/components/PageLayout.vue"
export default {
  components: { PageLayout },
  data: () => ({
    photo: groupPic
  })
}
</script>

<template>
  <PageLayout
    page-title="Welcome, Ras! From everyone who participated in this creation, we hope you enjoy! 💗"
  >
    <img :src="this.photo" alt="P9S Static Clear Group Picture" />
    <div class="home-content">
      <h2>psst ... check out the other links!</h2>
      <h4>
        <em
          >... maybe this site will get updated with more features down the road. Who knows ...</em
        >
      </h4>
    </div>
  </PageLayout>
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
}
</style>
