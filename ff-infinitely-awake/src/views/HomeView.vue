<script>
import PageLayout from "@/components/PageLayout.vue"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/vue"

const cld = new Cloudinary({
  cloud: {
    cloudName: "dnwngayqx"
  }
})

const myImg = cld.image("static-p9s-group-pic_jylcwm")
export default {
  components: { PageLayout, AdvancedImage },
  data: () => ({
    photo: myImg
  })
}
</script>

<template>
  <PageLayout
    page-title="Welcome, Ras! From everyone who participated in this creation, we hope you enjoy! 💗"
  >
    <AdvancedImage :cldImg="photo" />
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
