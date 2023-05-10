<script setup>
import { data } from '../api.js'
import { Bar } from 'vue-chartjs'
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
data.map((squirrel) => {
  squirrel.age = squirrel.age || 'Unknown'
  return squirrel
})
let chartData = {
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
</script>

<template>
  <Bar id="my-chart-id" :data="chartData" />
</template>

<style></style>
