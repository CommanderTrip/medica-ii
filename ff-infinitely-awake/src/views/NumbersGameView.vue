<script setup lang="ts">
import { onBeforeMount, type Ref, ref } from "vue"
import PageLayout from "@/components/PageLayout.vue"

let answer: number
let hintIsFirstDigit: boolean
let hintIsXYZ: boolean
let positionInTheHint: number
let userInput: number | null

let guessesTaken = ref(0)
let guessHistory = ref(["", "", "", "", ""])
const maxGuesses = 5
let victory = ref(false)

onBeforeMount(() => {
  answer = Math.floor(Math.random() * 89 + 10)
  hintIsFirstDigit = Math.random() > 0.5
  hintIsXYZ = Math.random() > 0.5
  positionInTheHint = Math.random()

  //console.log("Answer:", answer)
})

function userGuessed() {
  if (!userInput || userInput < 10 || userInput > 99) {
    return
  }

  if (userInput === answer) {
    victory.value = true
    return
  }

  guessHistory.value[guessesTaken.value] = `The combination is ${
    answer > userInput ? `greater than ${userInput}` : `less than ${userInput}`
  }...`
  guessesTaken.value++
  userInput = null
}

/*
  Types of hints:
    - first digit or second digit is
      - x, y, or z
      - even or odd
 */
function hint() {
  return `The ${hintIsFirstDigit ? "first digit" : "second digit"} of the combination is ${
    hintIsXYZ ? getXYZ(hintIsFirstDigit) : getEvenOrOdd(hintIsFirstDigit)
  }...`
}

/**
 * Uses the digit of the answer and returns a string of three consecutive numbers where one includes the determined
 * digit of the answer. Some values have a limited number of possible answers as seen in the switch statement but
 * otherwise generates the hint where the digit is in a random position within the hint.
 *
 * @param getFirstDigit A boolean to determine which digit to investigate.
 * @return A string of "X, Y, or Z".
 */
function getXYZ(getFirstDigit: boolean): string {
  const digit = getFirstDigit ? Math.floor(answer / 10) : answer - Math.floor(answer / 10) * 10

  switch (digit) {
    case 0:
      return "0, 1, or 2"
    case 1:
      if (positionInTheHint > 0.5) return "0, 1, or 2"
      return "1, 2, or 3"
    case 9:
      return "7, 8, or 9"
    case 8:
      if (positionInTheHint > 0.5) return "7, 8, or 9"
      return "6, 7, or 8"
    default:
      if (positionInTheHint < 0.33) return `${digit}, ${digit + 1}, or ${digit + 2}`
      else if (positionInTheHint >= 0.66) return `${digit - 2}, ${digit - 1}, or ${digit}`
      return `${digit - 1}, ${digit}, or ${digit + 1}`
  }
}

/**
 * Investigates the first or second digit of the answer to determine if it is even or odd.
 *
 * @param getFirstDigit A boolean that determines which digit of the answer to investigate.
 * @return A string of "even" or "odd".
 */
function getEvenOrOdd(getFirstDigit: boolean): "even" | "odd" {
  if (getFirstDigit) {
    return Math.floor(answer / 10) % 2 === 0 ? "even" : "odd"
  } else {
    return (answer - Math.floor(answer / 10) * 10) % 2 === 0 ? "even" : "odd"
  }
}
</script>

<template>
  <page-layout page-title="Chest Lock Picking">
    <div class="game">
      <div class="game-title">
        <h2>The combination is a value from 10 to 99.</h2>
        <h3>
          <b>{{ hint() }}</b>
        </h3>
      </div>
      <div class="guess-container" v-for="(guess, index) in guessHistory" :key="index">
        <p class="guess">{{ guess }}</p>
      </div>
      <form @submit.prevent="userGuessed" v-if="guessesTaken < maxGuesses && !victory">
        <input type="number" min="10" max="99" v-model="userInput" placeholder="Guess..." />
        <input type="submit" />
      </form>
      <div class="game-over" v-else>
        <p v-if="victory">YOU WIN!</p>
        <p>The combination was {{ answer }}</p>
        <button @click="() => this.$router.go()">{{ victory ? "Go Again!" : "Try Again!" }}</button>
      </div>
    </div>
  </page-layout>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";

form {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;

  * {
    margin-inline: 1rem;
  }

  input[type="number"] {
    width: 25%;
    background-color: transparent;
    color: black;
    border-width: 0;
    border-bottom: 2px solid var(--ras-color-grade);
  }
}

input[type="submit"],
button {
  background-color: var(--ras-color);
  height: 2rem;
  border-radius: 10px;
  border-style: none;
}

b {
  font-weight: bold;
}

label {
  color: black;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-over {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-title * {
  text-align: center;
}

.guess-container {
  width: 100%;
  padding-inline: 20%;
}

.guess {
  display: flex;
  justify-content: center;
  width: inherit;
  height: 2rem;
  color: black;
  margin-block: 0.5rem;
  font-style: italic;
  border-bottom: 2px solid var(--ras-color-grade);
}

::placeholder {
  color: #2c3e5099;
  font-style: italic;
  font-weight: bold;
}

@media (max-width: $lg-phone) {
  .guess-container {
    padding-inline: 10%;
  }
}
</style>
