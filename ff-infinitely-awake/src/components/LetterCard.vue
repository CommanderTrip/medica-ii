<script>
export default {
  props: {
    letter: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <p>{{ letter.body }}</p>
    <span>
      <em>{{ letter.author }}</em>
    </span>
  </div>
</template>

<style scoped>
div {
  background-color: bisque;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 7px 30px -1px rgba(0, 0, 0, 0.67);
  height: fit-content;
}

p {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
}

span {
  font-family: "Alegreya", serif;
  font-weight: 700;
  text-align: end;
}

em {
  font-size: large;
  font-weight: bolder;
}

div:hover {
  transform: scale(1.1);
}
</style>
