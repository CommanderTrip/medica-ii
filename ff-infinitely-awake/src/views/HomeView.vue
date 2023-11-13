<script>
import doubleRas from "@/assets/blakexras/ohGO6Uo.png"
import groupPic from "@/assets/static-p9s-group-pic.png"
export default {
  data: () => ({
    photo: groupPic
  })
}
</script>

<template>
  <h1>Welcome, Ras!<br />From everyone who participated in this creation, we hope you enjoy! 💗</h1>
  <img :src="this.photo" alt="e" />
  <div>
    <h2>psst ... check out the other links!</h2>
    <h4>
      <em>... maybe this site will get updated with more features down the road. Who knows ...</em>
    </h4>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
}

h1 {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  color: black;
  border-block: 5px solid black;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
</style>
