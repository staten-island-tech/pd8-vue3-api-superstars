<script setup></script>

<template>
  <button @click="$emit('_clicked')"><slot></slot></button>
</template>

<style scoped>
button {
  width: 500px;
}
</style>
