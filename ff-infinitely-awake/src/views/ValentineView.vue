<script lang="ts">
import PageLayout from "@/components/PageLayout.vue"

export default {
  components: { PageLayout },
  data() {
    return {
      rejectionCount: 0,
      accepted: false,
      noText: [
        "no",
        "NO",
        "Are you sure?",
        "Have you reconsidered?",
        "Think it again",
        "Please be my Valentine!!!",
        "please, please, please, please, please???",
        "Oh come on :(",
        "I'll shower you with presents!",
        "How about candy?",
        "Okay, last chance",
        "I'm gonna cry :'(",
        "For real this time, last chance",
        "Ha, you thought I'd let you free",
        "",
        "",
        "STOP!!",
        "HIT YES!",
        "Fine... sit in this loop forever... you will be mine >:)"
      ]
    }
  },

  methods: {
    rejectionIncrease() {
      this.rejectionCount += 1
    },

    inputAccepted() {
      this.accepted = true
      this.rejectionCount = 0
    }
  },

  computed: {
    cssVars() {
      return `--fs: ${
        this.rejectionCount === 0 ? this.rejectionCount + 1 : this.rejectionCount * 2
      }em`
    }
  }
}
</script>

<template>
  <PageLayout page-title="Valentine">
    <div class="page">
      <div>
        <img
          v-if="accepted"
          src="@/assets/bear-kiss-bear-kisses.gif"
          alt="Cute cartoon bears kissing"
        />
        <img v-else src="@/assets/bear-hug.gif" alt="Cute bears hugging" />
        <h1>{{ !accepted ? "Will you be my valentine?" : "Yay! No taking it back now!" }}</h1>
      </div>
      <div class="input">
        <button class="yes" @click="inputAccepted" :style="cssVars">YES</button>
        <button class="no" @click="rejectionIncrease" :class="{ hidden: accepted }">
          {{ noText[rejectionCount] }}
        </button>
      </div>
      <img
        v-if="accepted"
        class="hearts"
        src="@/assets/heart-up-hearts.gif"
        alt="Hearts flying up page"
      />
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
h1 {
  color: black;
}

.hidden {
  display: none;
}

.yes {
  background-color: green;
  font-size: var(--fs);
}

.no {
  background-color: red;
  font-size: 1em;
}

.input button {
  margin-inline: 1rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px #181818;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hearts {
  position: absolute;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
