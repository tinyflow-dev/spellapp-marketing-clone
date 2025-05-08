<script setup>
defineProps({
    to: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        required: true,
        default: "primary",
        validator: (value) => ["primary", "secondary", "tertiary"].includes(value),
    },
    external: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <NuxtLink :to="to" :external="external" :target="external ? '_blank' : undefined" :class="['button', `button--${variant}`]">
        <slot />
    </NuxtLink>
</template>
