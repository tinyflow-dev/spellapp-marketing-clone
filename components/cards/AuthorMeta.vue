<script setup>
defineProps({
    name: String,
    image: {
        type: String,
        default: "/images/authors/spencer-lanoue.png",
    },
});
</script>

<template>
    <div class="author">
        <img class="author__image" :src="image" :alt="name" width="36" height="36" loading="eager" />
        <strong class="author__name u-text-neutral-2 u-weight-bold">{{ name }}</strong>
    </div>
</template>

<style lang="scss" scoped>
.author {
    @extend %u-align-item-center;
    @extend %u-flex-wrap;
    display: inline-flex;
    gap: toRem(8);

    &__image {
        @extend %u-rounded-circle;
        @extend %u-ratio-1;
        width: toRem(36);
        flex-shrink: 0;
        border: 2px solid #fcfcfd;
    }
}
</style>
