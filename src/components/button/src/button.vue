<template>
  <button
    class="visual-button"
    :class="[
      `visual-button--${$props.size}`,
      { 'visual-button--block': $props.block },
      { 'visual-button--primary': $props.type === 'primary' },
      { 'visual-button--success': $props.type === 'success' },
      { 'visual-button--danger': $props.type === 'danger' },
    ]"
  >
    <template v-if="$props.loading">
      <slot v-if="$slots.loading" name="loading" />
      <Icon v-else>
        <Loading />
      </Icon>
    </template>

    <slot v-else-if="$slots.prefix" name="prefix" />
    <div v-else="$props.prefix" />

    <span class="visual-button_content">
      <slot />
    </span>

    <slot v-if="$slots.suffix" name="suffix" />
    <div v-else="$props.suffix" />
  </button>
</template>

<script setup lang="ts">
import { Loading } from "@element-plus/icons-vue";
import Icon from "@/components/icon";

defineOptions({
  name: "VisualButton",
});

defineProps({
  loading: Boolean,
  prefix: String,
  suffix: String,
  block: Boolean,
  size: {
    type: String,
    default: "large",
    validator: (value: string) => ["mini", "small", "large"].includes(value),
  },
  type: {
    type: String,
    default: "default",
  },
});
</script>
