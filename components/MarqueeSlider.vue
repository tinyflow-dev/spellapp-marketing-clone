<script setup>
defineProps({
    reversed: {
        type: Boolean,
        default: false,
    },
    pauseOnHover: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: String,
        default: "120s",
    },
    gap: {
        type: String,
        default: "0.75rem",
    },
});
</script>

<template>
    <div
        :class="['marquee-slider', { 'marquee-slider--reversed': reversed }]"
        :style="[
            { '--_gap': gap },
            { '--_animation-duration': duration },
            {
                '--_animation-play-state-on-hover': pauseOnHover ? 'paused' : 'running',
            },
        ]"
    >
        <div class="marquee-slider__slide" style="--_index: 0">
            <slot />
        </div>
        <div class="marquee-slider__slide" style="--_index: 1">
            <slot />
        </div>
        <div class="marquee-slider__slide" style="--_index: 2">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.marquee-slider {
    --_direction: 1;
    @extend %u-display-grid;
    grid-template-areas: "center";
    grid-template-columns: max-content;

    &__slide {
        @extend %u-display-grid;
        gap: var(--_gap, 0.75rem);
        padding-inline-end: var(--_gap, 0.75rem);
        grid-area: center;
        grid-auto-flow: column;
        justify-content: flex-start;
        translate: calc(var(--_index) * (100% * var(--_direction)));

        @include motion {
            animation: marquee var(--_animation-duration, 50s) linear infinite;

            @keyframes marquee {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(calc(-100% * var(--_direction)));
                }
            }
        }
    }

    &--reversed {
        --_direction: -1;
        justify-content: flex-end;
    }

    &:hover {
        .marquee-slider__slide {
            animation-play-state: var(--_animation-play-state-on-hover, running);
        }
    }
}
</style>
