<script setup>
import { data } from '../api.js'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
data.map((squirrel) => {
  squirrel.age = squirrel.age || 'Unknown'
  return squirrel
})
let dataAges = {
  labels: ['Adult', 'Juvenile', 'Unknown'],
  datasets: [
    {
      backgroundColor: ['#f87979', '#000', '#2a52be'],
      data: [
        data.filter((squirrel) => squirrel.age == 'Adult').length,
        data.filter((squirrel) => squirrel.age == 'Juvenile').length,
        data.filter((squirrel) => squirrel.age == 'Unknown').length
      ]
    }
  ]
}
let dataActions = {
  labels: ['Chasing', 'Climbing', 'Eating', 'Foraging'],
  datasets: [
    {
      backgroundColor: ['#f87979', '#000', '#2a52be', '#4cf313'],
      data: [
        data.filter((squirrel) => squirrel.chasing == true).length,
        data.filter((squirrel) => squirrel.climbing == true).length,
        data.filter((squirrel) => squirrel.eating == true).length,
        data.filter((squirrel) => squirrel.foraging == true).length
      ]
    }
  ]
}
let age = true
</script>

<template>
  <Pie v-if="age==true" id="my-chart-id" :data="dataAges" />
  <Pie v-else id="my-chart-id" :data="dataActions" />
  <!-- <Pie id="my-chart-id" :data="chartData" /> -->
</template>

<style></style>
