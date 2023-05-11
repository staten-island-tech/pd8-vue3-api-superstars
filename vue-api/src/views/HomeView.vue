<script setup>
import BarGraph from '../components/BarGraph.vue'
import { data } from '../api.js'
import PieChart from '../components/PieChart.vue'
import { createAssignmentExpression } from '@vue/compiler-core';
console.log(data)

let stateAge = true
let stateActions = false
function ages () {

}
</script>

<template>
  <div>
    <h1>Squirrel</h1>
    <div>
      <button>ages</button>
      <button>actions</button>
    </div>
    <BarGraph />
    <PieChart />
  </div>
</template>
