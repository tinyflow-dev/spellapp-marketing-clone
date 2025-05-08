<script setup>
const { appendUTM } = useUtmLink("Home");
</script>

<template>
    <!-- Section Home Header -->
    <header class="section-home-header u-header-spacing-top u-text-center u-position-relative u-stacking-context">
        <img class="u-section-bg" src="/images/backgrounds/home-page-bg.png" alt="" loading="eager" />
        <div class="container">
            <div class="home-header__content u-position-relative">
                <!-- 
                <span class="home-header__cursors home-header__cursors--left u-position-absolute u-select-none">
                    <img class="home-header__cursors__image" src="../../public/images/cursors/cursor-left.svg" alt="" width="102" height="48" loading="eager" />
                </span>
                <span class="home-header__cursors home-header__cursors--right u-position-absolute u-select-none">
                    <img class="home-header__cursors__image" src="../../public/images/cursors/cursor-right.svg" alt="" width="111" height="48" loading="eager" />
                </span>
                -->
                <Badge to="/why" class="home-header__badge">✨ Introducing Spell →</Badge>
                <h1 class="home-header__title u-heading-h1">Write impressively good documents in seconds</h1>
                <p class="home-header__text">Spell is your superhuman document writing copilot. Write and edit your docs in natural language. Then share and collaborate with your team.</p>
                <Button :to="appendUTM('https://spellapp.com/signup')" variant="primary">
                    <IconsMagician />
                    Get started for free
                </Button>
            </div>
            <div class="home-header__slider u-fadeout-edge u-overflow-hidden">
                <MarqueeSlider>
                    <img src="/images/logos/customer-logos/tinyflow.svg" alt="tinyflow logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/uc-irvine.svg" alt="uc irvine logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/usertesting.svg" alt="usertesting logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/stanford.svg" alt="stanford logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/zapier.svg" alt="zapier logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/uc-berkeley.svg" alt="uc berkeley logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/buffer.svg" alt="buffer logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/glean.svg" alt="glean logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/northwestern-university.svg" alt="northwestern university logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/guidewire.svg" alt="guidewire logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/university-of-toronto.svg" alt="university of toronto logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/kaiser-permanente.svg" alt="kaiser permanente logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/university-of-san-francisco.svg" alt="university of san francisco logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/pelago.svg" alt="pelago logo" width="164" height="48" />
                    <img src="/images/logos/customer-logos/wellworthy.svg" alt="wellworthy logo" width="164" height="48" />
                </MarqueeSlider>
            </div>
            <div class="u-position-relative">
                <div class="home-header__gradient u-position-absolute u-select-none"></div>
                <UtilitiesImageFrame class="home-header__block">
                    <img src="/images/posters/homepage-hero.png" alt="" width="1096" height="590" loading="eager" />
                    <!--
                    <button type="button" class="button button--play u-position-absolute">
                        <IconsPlay />
                    </button>
                    -->
                </UtilitiesImageFrame>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.section-home-header::after {
    @extend %u-common-pseudo;
    @extend %u-select-none;
    bottom: -1px;
    left: 0;
    right: 0;
    height: fluid-size(80px, 100px);
    background-image: linear-gradient(to bottom, transparent 0%, #ffffff 100%);
}

.home-header {
    // &__cursors {
    //     z-index: -1;
    //     @include max-md {
    //         display: none;
    //     }

    //     &--left {
    //         top: 55%;
    //         left: toRem(-31);

    //         @include motion {
    //             animation: cursorLeft 10s cubic-bezier(0.85, 0, 0.15, 1) infinite;
    //             @keyframes cursorLeft {
    //                 0%, 100% { transform: translateX(0%) translateY(0%); }
    //                 33.33% { transform: translateX(50%) translateY(-100%); }
    //                 66.67% { transform: translateX(100%) translateY(100%); }
    //             }
    //         }
    //     }

    //     &--right {
    //         top: 35%;
    //         right: toRem(-37);
    //         @include motion {
    //             animation: cursorRight 9s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    //             @keyframes cursorRight {
    //                 0%, 100% { transform: translateX(0%) translateY(0%); }
    //                 33.33% { transform: translateX(-50%) translateY(-100%); }
    //                 66.67% { transform: translateX(-100%) translateY(100%); }
    //             }
    //         }
    //     }

    //     &__image {
    //         filter: drop-shadow(0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08));
    //     }
    // }

    &__title {
        margin-block-start: toRem(24);
        font-size: 2.5rem;

        @include min-sm {
            font-size: 3rem;
        }
    }

    &__text {
        @extend %u-margin-inline-auto;
        color: $color-neutral--4;
        margin-block-start: toRem(16);
        margin-block-end: toRem(40);
        max-width: 40ch;
        font-size: 18px;

        @include min-sm {
            max-width: 56ch;
            font-size: 21px;
        }
    }

    &__badge {
        font-size: 15px;
        line-height: 1.5;
        padding: 0.5rem 1rem;

        @include min-sm {
            font-size: 16px;
        }
    }

    &__slider {
        @extend %u-fadeout-edge;
        margin-block: toRem(40);
    }

    &__gradient {
        z-index: -1;
        left: 50%;
        width: min(100%, fluid-size(327px, 654px));
        aspect-ratio: 100 / 26;
        border-radius: 100%;
        background-image: linear-gradient(90deg, #79d9ff, #fd9cff, #ffc671, #fd9cff, #ffc671, #79d9ff, #ffc671, #79d9ff, #f19cff);
        background-size: 400%;
        filter: blur(toRem(75));
        opacity: 0.6;
        transform: translateX(-50%) translateY(toRem(-2));

        @include min-sm {
            transform: translateX(-50%) translateY(toRem(-20));
        }

        @include motion {
            animation: gradientMove 20s linear infinite;
            @keyframes gradientMove {
                0%, 100% { background-position-x: 0%; }
                50% { background-position-x: 100%; }
            }
        }
    }

    &__block {
        --_ratio: #{ratio(1096, 590)} !important;
        --_bottom-size: 0;

        .frame__figure {
            @include common-shadow;
        }
    }
}
</style>