<script setup>
defineProps({
    to: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <NuxtLink v-if="to" :to="to" class="badge badge--link">
        <slot />
    </NuxtLink>
    <span v-else class="badge">
        <slot />
    </span>
</template>

<style lang="scss">
.badge {
    @extend %u-rounded-pill;
    @extend %u-position-relative;
    @extend %u-stacking-context;
    display: inline-block;
    color: $color-neutral--4;
    font-size: fluid-size(12px, 15px);
    background-image: $color-stroke-gradient--2;
    padding: fluid-size(5px, 3px) fluid-size(11px, 15px);
    box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);

    &::before {
        @extend %u-common-pseudo;
        @extend %u-select-none;
        background-color: $color-neutral--8;
        inset: 1px;
        border-radius: inherit;
        z-index: -1;
    }

    &--link {
        @extend %u-transition;

        @include interaction {
            box-shadow: 0 toRem(6) toRem(20) rgba($color: #172440, $alpha: 0.16);
        }
    }
}
</style>
