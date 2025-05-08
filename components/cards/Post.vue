<script setup>
defineProps({
    to: {
        type: String,
        requred: true,
    },
});
</script>

<template>
    <NuxtLink :to class="post-card">
        <h3 class="post-card__title u-title-md u-text-neutral-2">
            <slot name="title" />
        </h3>
        <p class="post-card__text u-text-regular">
            <slot name="description" />
        </p>
    </NuxtLink>
</template>

<style lang="scss">
.post-card {
    @extend %u-transition;
    padding: toRem(32);
    border: 1px solid $color-neutral--6;
    border-radius: toRem(16);

    @include interaction {
        border-color: $color-primary;
        box-shadow: 0 0 0 toRem(4) rgba($color: #5641f6, $alpha: 0.1);
    }

    &__title {
        --_line-clamp: 2;
        @extend %u-line-clamp;
        margin-block-end: toRem(16);
    }

    &__text {
        @extend %u-line-clamp;
    }
}
</style>
