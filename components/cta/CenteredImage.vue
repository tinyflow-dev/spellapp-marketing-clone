<script setup>
const { appendUTM } = useUtmLink("CTA-3");
</script>

<template>
    <div class="cta u-text-center u-position-relative u-stacking-context u-gradient-5">
        <div class="cta__icon cta__icon--left u-position-absolute u-select-none">
            <img class="cta__icon__image" src="/images/icons/hat.png" alt="" width="276" height="276" loading="lazy" />
        </div>
        <div class="cta__icon cta__icon--right u-position-absolute u-select-none">
            <img class="cta__icon__image" src="/images/icons/hat.png" alt="" width="276" height="276" loading="lazy" />
        </div>
        <div class="cta__title u-heading-h3 u-position-relative">
            <div class="cta__title__shapes cta__title__shapes--top-left u-position-absolute u-select-none">
                <IconsSparkle />
            </div>
            <div class="cta__title__shapes cta__title__shapes--top-right cta__title__shapes--circle u-position-absolute u-select-none"></div>
            <div class="cta__title__shapes cta__title__shapes--bottom-left cta__title__shapes--circle u-position-absolute u-select-none"></div>
            <div class="cta__title__shapes cta__title__shapes--bottom-right u-position-absolute u-select-none">
                <IconsSparkle />
            </div>
            Go From Idea to Polished Doc 10x Faster With Spell 🪄
        </div>
        <Button :to="appendUTM('https://spellapp.com/signup')" variant="primary">Get started for free</Button>
        <div class="cta__object u-position-relative">
            <UtilitiesImageFrame class="cta__media">
                <img src="/images/cta/centered-image/spell-ai-document-editor.png" alt="" width="716" height="214" loading="lazy" />
                <!--
                <button type="button" class="button button--play u-position-absolute">
                    <IconsPlay />
                </button>
                -->
            </UtilitiesImageFrame>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.cta {
    @extend %u-display-grid;
    gap: toRem(36);
    justify-items: center;
    border-radius: fluid-size(20px, 24px);
    padding-block-start: fluid-size(36px, 60px);
    padding-inline: toRem(24);

    &__icon {
        --_inline-offset: #{toRem(92)};
        --_rotateY: 0deg;
        top: toRem(-48);
        transform: rotateY(var(--_rotateY, 0deg)) rotateZ(10deg);
        @extend %u-z-index-n1;

        @include max-sm {
            display: none;
        }

        &--left {
            --_rotateY: 180deg;
            left: calc(var(--_inline-offset) * -1);
        }
        &--right {
            right: calc(var(--_inline-offset) * -1);
        }
    }

    &__title {
        max-width: 11.5ch;

        @include min-xs {
            max-width: 19.5ch;
        }

        &__shapes {
            @extend %u-z-index-n1;
            filter: blur(3px);

            &--circle {
                @extend %u-ratio-1;
                @extend %u-rounded-circle;
                width: 1em;
                background-color: $color-white;
            }

            &--top {
                &-left,
                &-right {
                    transform: translateY(-100%);
                }

                &-left {
                    font-size: toRem(28);
                    top: fluid-size(-6px, -10px);
                    left: 9.57%;
                }

                &-right {
                    font-size: toRem(10);
                    top: toRem(-4);
                    right: 15.78%;

                    @include max-xxs {
                        display: none;
                    }
                }
            }

            &--bottom {
                &-left,
                &-right {
                    @include min-xs {
                        transform: translateY(100%);
                    }
                }

                &-left {
                    font-size: toRem(8);
                    bottom: toRem(5);
                    left: toRem(-6);

                    @include min-xs {
                        bottom: toRem(-30);
                        left: 23.76%;
                    }
                }

                &-right {
                    font-size: toRem(20);
                    right: toRem(-7);
                    bottom: toRem(38);

                    @include min-xs {
                        right: 18.62%;
                        bottom: toRem(-5);
                    }
                }
            }
        }
    }

    &__object {
        width: min(toRem(740), 100%);

        &::after {
            @extend %u-common-pseudo;
            @extend %u-select-none;
            bottom: 0;
            left: 0;
            right: 0;
            height: toRem(80);
            background-image: linear-gradient(to bottom, transparent 0%, #fcfdfe 100%);
        }
    }

    &__media {
        --_inner-radius: #{toRem(12)};
        --_padding: #{fluid-size(5px, 11px)};
        --_bottom-size: 0;
        --_ratio: #{ratio(267px, 148px)};
        
        @include min-md {
            --_ratio: #{ratio(716px, 214px)};
        }
    }
}
</style>