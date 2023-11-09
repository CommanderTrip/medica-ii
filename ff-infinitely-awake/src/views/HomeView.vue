<script>
import doubleRas from "@/assets/blakexras/ohGO6Uo.png"
export default {
  data: () => ({
    photo: doubleRas
  })
}
</script>

<template>
  <h1>
    Welcome, Ras!<br />From everyone who participated in this creation, we hope you enjoy, Ras!<br />💗
  </h1>
  <img :src="this.photo" alt="Double Ras" />
  <h2>psst ... check out the other links!</h2>
  <h4>
    <em>... maybe this site will get updated with more features down the road. Who knows ...</em>
  </h4>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 30%;
  align-content: center;
}

h1 {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 36pt;
  color: black;
  border-block: 5px solid black;
  margin-block: 2rem;
}
</style>
