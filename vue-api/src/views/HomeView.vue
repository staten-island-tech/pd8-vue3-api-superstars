<script setup>
import BarGraph from '../components/BarGraph.vue'
import { data } from '../api.js'
import PieChart from '../components/PieChart.vue'
console.log(data)
</script>

<template>
  <div>
    <h1>Squirrel Ages</h1>
    <BarGraph />
    <PieChart />
  </div>
</template>
