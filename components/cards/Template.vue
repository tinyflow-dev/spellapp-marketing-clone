<script setup>
defineProps({
    to: {
        type: String,
        requred: true,
    },
    external: {
        type: Boolean,
        default: false,
    },
    backgroundImage: {
        type: String,
        default: "/images/templates/design-creative-bg.png",
    },
});
</script>

<template>
    <NuxtLink :to="to" :external="external" :target="external ? '_blank' : undefined" class="template-card u-position-relative u-stacking-context u-overflow-hidden">
        <img class="template-card__bg u-cover u-select-none" :src="backgroundImage" width="220" height="220" loading="lazy" />
        <div class="template-card__icon u-position-relative u-rounded-circle u-overflow-hidden">
            <slot name="icon" />
        </div>
        <h3 class="template-card__text u-title-md">
            <slot name="title" />
        </h3>
    </NuxtLink>
</template>

<style lang="scss">
.template-card {
    @extend %u-transition;
    @extend %u-display-grid;
    align-content: space-between;
    gap: toRem(16);
    width: toRem(220);
    @extend %u-ratio-1;
    padding: toRem(24);
    background-color: $color-neutral--8;
    border-radius: toRem(24);
    box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);

    &__bg {
        @extend %u-transition;
        z-index: -1;
    }

    &__icon {
        width: toRem(48);
        @extend %u-ratio-1;
        border: 2px solid $color-white;
        box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);

        > * {
            @extend %u-cover;
        }
    }

    &__text {
        color: $color-neutral--4;
        font-weight: 600;
    }

    @include interaction {
        @include common-shadow;

        .template-card__bg {
            scale: 1.02;
        }
    }
}
</style>
