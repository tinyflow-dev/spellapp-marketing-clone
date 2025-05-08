<script setup>
defineProps({
    to: {
        type: String,
        requred: true,
    },
});
</script>

<template>
    <NuxtLink :to class="prompt-card">
        <div class="prompt-card__icon u-position-relative u-rounded-circle u-overflow-hidden">
            <slot name="icon" />
        </div>
        <p class="prompt-card__text u-text-regular">
            <slot name="text" />
        </p>
    </NuxtLink>
</template>

<style lang="scss">
.prompt-card {
    @extend %u-display-grid;
    @extend %u-transition;
    gap: toRem(24);
    width: toRem(244);
    padding: toRem(20);
    background-color: $color-neutral--8;
    border: 1px solid $color-neutral--6;
    border-radius: toRem(20);

    @include interaction {
        border-color: $color-secondary--purple;
        box-shadow: 0 0 0 toRem(4) rgba($color: #5641f6, $alpha: 0.1);
    }

    &__icon {
        @extend %u-ratio-1;
        width: toRem(48);
        border: 2px solid $color-white;
        box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);

        > * {
            @extend %u-cover;
        }
    }
}
</style>
