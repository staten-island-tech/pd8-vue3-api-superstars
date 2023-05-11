<script setup>
import { Bar } from 'vue-chartjs'
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
        backgroundColor: '#f87979',
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
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

let prop = defineProps(['age'])
console.log(prop)
let age = ref(prop.age)
</script>

<template>
  <Bar v-if="age == true && loaded" id="my-chart-id" :data="dataAges" />
  <Bar v-else-if="loaded" id="my-chart-id" :data="dataActions" />
</template>

<style></style>
