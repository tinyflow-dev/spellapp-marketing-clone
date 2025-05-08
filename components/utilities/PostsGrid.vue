<template>
    <!-- Posts grid -->
    <div class="posts-grid">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, toRem(300)), 1fr));
    grid-column-gap: toRem(24);
    grid-row-gap: toRem(32);
    margin-block-start: toRem(48);

    @include min-lg {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
