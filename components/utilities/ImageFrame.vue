<template>
    <div class="frame u-position-relative u-overflow-hidden">
        <figure class="frame__figure u-position-relative u-overflow-hidden">
            <slot />
        </figure>
    </div>
</template>

<style lang="scss">
.frame {
    --_ratio: #{ratio(1096, 656)};
    --_radius: #{fluid-size(16px, 24px)};
    --_padding: #{fluid-size(7px, 11px)};

    @extend %u-backdrop-stroke-blur;
    padding: var(--_padding) var(--_padding) var(--_bottom-size, var(--_padding)) var(--_padding);

    &__figure {
        --_radius: var(--_inner-radius, #{fluid-size(8px, 12px)});
        
        @extend %u-display-grid;
        place-items: center;
        padding-top: var(--_ratio);

        & > img {
            @extend %u-cover;
        }
    }
}

.frame,
.frame__figure
{
    border-radius: var(--_radius) var(--_radius) var(--_bottom-size, var(--_radius)) var(--_bottom-size, var(--_radius));
}
</style>