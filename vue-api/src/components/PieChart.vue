<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref } from 'vue'

let data, dataAges, dataActions
let loaded = ref(false)
async function name() {
  data = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  data = await data.json()
  data.map((squirrel) => {
    squirrel.age = squirrel.age || 'Unknown'
    return squirrel
  })
  dataAges = {
    labels: ['Adult', 'Juvenile', 'Unknown'],
    datasets: [
      {
        label: '',
        backgroundColor: ['#f87979', '#000', '#2a52be'],
        data: [
          data.filter((squirrel) => squirrel.age == 'Adult').length,
          data.filter((squirrel) => squirrel.age == 'Juvenile').length,
          data.filter((squirrel) => squirrel.age == 'Unknown').length
        ]
      }
    ]
  }
  dataActions = {
    labels: ['Chasing', 'Climbing', 'Eating', 'Foraging'],
    datasets: [
      {
        label: '',
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
  loaded.value = true
}
name()
ChartJS.register(ArcElement, Tooltip, Legend)

let prop = defineProps(['age'])
let age = prop.age
</script>

<template>
  <Pie v-if="age == true && loaded" id="my-chart-id" :data="dataAges" />
  <Pie v-else-if="loaded" id="my-chart-id" :data="dataActions" />
  <!-- <Pie id="my-chart-id" :data="chartData" /> -->
</template>

<style></style>
