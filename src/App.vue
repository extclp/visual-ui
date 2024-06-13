<script setup lang="ts">
import VisualButton from "@/components/button";
import ViInput from "@/components/input";
import ViSwitch from "@/components/switch";
import "@/components/style.scss";
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <VisualButton>Default</VisualButton>
  <VisualButton size="mini" type="primary">Mini Primary Button</VisualButton>
  <VisualButton size="small" type="success">Small Success Button</VisualButton>
  <VisualButton size="large" type="danger">Large Danger Button</VisualButton>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
