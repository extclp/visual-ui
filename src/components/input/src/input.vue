<template>
    <span class="visual-input">
        <slot v-if="$slots.prefix" name="prefix" />
        <Icon v-else-if="$props.prefix instanceof Object">
            <component :is="$props.prefix" />
        </Icon>
        <span v-else-if="!!$props.prefix">{{ $props.prefix }}</span>

        <input class="visual-input_inner" v-model="model" :type="type" />

        <slot v-if="$slots.suffix" name="suffix" />
        <Icon v-else-if="$props.suffix instanceof Object">
            <component :is="$props.suffix" />
        </Icon>
        <span v-else-if="!!$props.suffix">{{ $props.suffix }}</span>
    </span>
</template>
<script setup lang="ts">
import Icon from '@/components/icon/src/icon.vue';
import type { Component, InputTypeHTMLAttribute, PropType } from 'vue';

const model = defineModel()

defineProps({
    prefix: [String, Object] as PropType<String | Component>,
    suffix: [String, Object] as PropType<String | Component>,
    size: String,
    type: String as PropType<InputTypeHTMLAttribute>
})
</script>