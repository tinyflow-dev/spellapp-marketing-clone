<template>
    <div class="common-header u-text-center">
        <h2 class="u-heading-h3">
            <slot name="title" />
        </h2>
        <p class="common-header__text">
            <slot name="description" />
        </p>
        <slot />
    </div>
</template>

<style lang="scss">
.common-header {
    margin-block-end: fluid-size(40px, 56px);

    &__text {
        max-width: 60ch;
        @extend %u-margin-inline-auto;
        margin-block: toRem(16);
        font-size: fluid-size(18px, 18px);
    }
}
</style>
