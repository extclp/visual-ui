<script setup lang="ts">
import ViButton from "@/components/button"
import ViInput from "@/components/input"
import "@/components/style.scss"
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <ViButton loading>你好世界</ViButton>
  <ViInput :suffix="Search"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
