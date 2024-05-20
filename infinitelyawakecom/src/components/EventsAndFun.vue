<script setup lang="ts">
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale,
  ArcElement
} from "chart.js";
import { PolarArea } from "vue-chartjs";

ChartJS.register(Legend, Tooltip, RadialLinearScale, ArcElement, CategoryScale);

const chartData = {
  labels: [
    "Movie Nights",
    "Deep Dungeons",
    "Savage Raids for Newbies",
    "Mount Farms",
    "Maps",
    "Golf With Friends",
    "JackBox"
  ],
  datasets: [
    {
      data: [10, 5, 2, 24, 20, 12, 7],
      backgroundColor: [
        "rgb(77,9,161)",
        "rgb(19,50,163)",
        "rgb(225,76,43)",
        "rgb(30,211,30)",
        "rgb(214,196,31)",
        "rgb(37,189,167)",
        "rgb(243,32,15)"
      ]
    }
  ]
};
</script>

<template>
  <div><PolarArea :data="chartData" /></div>
</template>

<style scoped lang="scss">
canvas {
  height: 99% !important;
  width: auto !important;
}

div {
  height: 100% !important;
}
</style>
