<script setup>
import { data } from '../api.js'
console.log(data.map((squirrel) => squirrel.age || 'Unknown'))
</script>

<template>
  <h1>hi</h1>
</template>
