<template>
    <span class="visult-icon" :style="{ color: $props.color, fontSize: size }">
        <slot />
    </span>
</template>
<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
    name: "VisualIcon"
})

const props = defineProps({
    color: String,
    size: [Number, String]
})

const size = computed(() => {
    if (!props.size) {
        return
    }

    try {
        return `${Number(props.size)}px`
    } catch (e) {
        return props.size
    }
})
</script>