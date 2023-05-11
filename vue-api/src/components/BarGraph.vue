<script setup>
import { data } from "../api.js";
import { Bar } from "vue-chartjs";
import { ref } from "vue";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
data.map((squirrel) => {
  squirrel.age = squirrel.age || "Unknown";
  return squirrel;
});
let dataAges = {
  labels: ["Adult", "Juvenile", "Unknown"],
  datasets: [
    {
      label: "",
      backgroundColor: "#f87979",
      data: [
        data.filter((squirrel) => squirrel.age == "Adult").length,
        data.filter((squirrel) => squirrel.age == "Juvenile").length,
        data.filter((squirrel) => squirrel.age == "Unknown").length,
      ],
    },
  ],
};
let dataActions = {
  labels: ["Chasing", "Climbing", "Eating", "Foraging"],
  datasets: [
    {
      label: "",
      backgroundColor: ["#f87979", "#000", "#2a52be", "#4cf313"],
      data: [
        data.filter((squirrel) => squirrel.chasing == true).length,
        data.filter((squirrel) => squirrel.climbing == true).length,
        data.filter((squirrel) => squirrel.eating == true).length,
        data.filter((squirrel) => squirrel.foraging == true).length,
      ],
    },
  ],
};
let prop = defineProps(["age"]);
console.log(prop);
let age = ref(prop.age);
</script>

<template>
  <Bar v-if="age == true" id="my-chart-id" :data="dataAges" />
  <Bar v-else id="my-chart-id" :data="dataActions" />
</template>

<style></style>
