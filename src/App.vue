<script setup lang="ts">
import { prefix as pr } from './lib/prefixClasses'
</script>

<template>
  <div :class="pr('bg-red-500 text-center flex justify-center items-center p-2')">
    <a href="https://vitejs.dev" class="text-3xl" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped></style>
