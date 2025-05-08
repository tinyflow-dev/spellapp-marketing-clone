<template>
    <div class="u-header-spacing-top"></div>
    <section class="section-process u-spacing-block">
        <div class="container">
            <div class="section-process__grid">
                <div class="process-card">
                    <div class="process-card__count u-text-neutral-2 u-position-relative u-text-md u-weight-bold"></div>
                    <p class="process-card__text u-text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <div class="process-card">
                    <div class="process-card__count u-text-neutral-2 u-position-relative u-text-md u-weight-bold"></div>
                    <p class="process-card__text u-text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <div class="process-card">
                    <div class="process-card__count u-text-neutral-2 u-position-relative u-text-md u-weight-bold"></div>
                    <p class="process-card__text u-text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <div class="process-card">
                    <div class="process-card__count u-text-neutral-2 u-position-relative u-text-md u-weight-bold"></div>
                    <p class="process-card__text u-text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.section-process {
    --container: 956px;

    &__grid {
        @extend %u-display-grid;
        grid-template-columns: repeat(4, 1fr);
        counter-reset: index;
    }
}

.process-card {
    @extend %u-display-grid;
    justify-items: center;
    gap: toRem(16);
    padding-inline: toRem(8);
    counter-increment: index;
    
    &__count {
        @extend %u-display-grid;
        @extend %u-ratio-1;
        width: toRem(44);
        border-radius: fluid-size(8px, 12px);
        background-image: $color-stroke-gradient--2;
        place-items: center;

        &::before {
            @extend %u-common-pseudo;
            background-color: $color-white;
            inset: 1px;
            border-radius: toRem(11);
        }
        
        &::after {
            @extend %u-position-relative;
            content: counter(index);
        }
    }

    &__text {
        max-width: 12.65ch;
        text-align: center;
    }
}
</style>