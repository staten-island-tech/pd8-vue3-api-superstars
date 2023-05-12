<script setup>
import BarGraph from '../components/BarGraph.vue'
import PieChart from '../components/PieChart.vue'
import Button from '../components/Button.vue'
import { createAssignmentExpression } from '@vue/compiler-core'
import { ref, nextTick } from 'vue'

let stateAge = ref(true)
function ages() {
  stateAge.value = true
  console.log(stateAge.value)
  force()
}
function action() {
  stateAge.value = false
  console.log(stateAge.value)
  force()
}
let render = ref(true)
async function force() {
  render.value = false
  await nextTick()
  render.value = true
}
</script>

<template>
  <div>
    <h1>Squirrel Data</h1>
    <div>
      <Button @_clicked="ages">Squirrel Ages</Button>
      <Button @_clicked="action">Squirrel Actions</Button>
    </div>
    <BarGraph :age="stateAge" v-if="render" />
    <PieChart :age="stateAge" v-if="render" />
  </div>
</template>
