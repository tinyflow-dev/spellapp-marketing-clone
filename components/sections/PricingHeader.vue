<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData("pricing-config", () => queryCollection("config").where("stem", "=", "config/pricing").first());
const selectedPlan = ref("month");
const isAnnually = computed(() => selectedPlan.value === "year");
const { appendUTM } = useUtmLink();
</script>

<template>
    <header class="section-pricing-header u-header-spacing-top u-spacing-block u-position-relative u-stacking-context">
        <img class="u-section-bg" src="/images/backgrounds/pricing-page-bg.png" alt="" loading="eager" />
        <div class="container">
            <div class="u-text-center">
                <h1 class="u-heading-h1">Pricing plans</h1>
                <p class="pricing-header__text u-text-md">Choose the plan that works for you</p>
            </div>
            <div class="pricing-toggler">
                <div class="pricing-toggler__wrapper">
                    <label class="pricing-toggler__label u-position-relative">
                        <input type="radio" name="pricing" class="pricing-toggler__input u-position-absolute u-cover" value="month" v-model="selectedPlan" />
                        <span class="pricing-toggler__btn u-text-sm">Monthly</span>
                    </label>
                    <label class="pricing-toggler__label u-position-relative">
                        <input type="radio" name="pricing" class="pricing-toggler__input u-position-absolute u-cover" value="year" v-model="selectedPlan" />
                        <span class="pricing-toggler__btn u-text-sm">Yearly (Save 20%)</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="container" style="--container: 1240px">
            <div class="pricing-grid">
                <div v-for="(plan, planIndex) in config" :key="planIndex" :class="['pricing-card u-position-relative u-stacking-context u-overflow-hidden', { 'pricing-card--regular': !plan.popular, 'pricing-card--popular': plan.popular }]">
                    <img v-if="plan.popular" class="u-section-bg" src="/images/backgrounds/pricing-card-bg.png" alt="" loading="eager" />
                    <div class="pricing-card__header">
                        <h2 class="pricing-card__title u-weight-bold">{{ plan.name }}</h2>
                        <span v-if="plan.popular" class="pricing-card__badge u-text-xs"> Most popular </span>
                    </div>
                    <div class="pricing-card__price">
                        <h3 class="pricing-card__price__title u-heading-h2">{{ isAnnually ? plan.annually : plan.monthly }}</h3>
                        <strong v-if="(isAnnually ? plan.annually.toLowerCase() : plan.monthly.toLowerCase()) !== 'free'" class="pricing-card__price__text u-weight-bold">/{{ isAnnually ? "month, billed annually" : "month" }}</strong>
                    </div>
                    <hr class="pricing-card__divider" />
                    <div class="pricing-card__body">
                        <h4 class="pricing-card__subtitle u-title-md">{{ plan.subtitle }}</h4>
                        <ul class="pricing-card__list u-list-unstyled">
                            <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="pricing-card__list__item u-text-md">{{ feature }}</li>
                        </ul>
                    </div>
                    <Button :to="appendUTM('https://spellapp.com/signup', { utm_campaign: plan.name })" variant="primary">Get Started with {{ plan.name }}</Button>
                </div>
            </div>
        </div>
    </header>
    <section class="u-spacing-block">
        <div class="container">
            <h2 class="u-text-regular u-text-center">Loved by individuals at</h2>
            <div class="pricing-header__slider u-overflow-hidden">
                <MarqueeSlider>
                    <img src="/images/logos/facebook-v2.svg" alt="facebook" width="164" height="48" />
                    <img src="/images/logos/instagram-v2.svg" alt="instagram" width="164" height="48" />
                    <img src="/images/logos/facebook-v2.svg" alt="facebook" width="164" height="48" />
                    <img src="/images/logos/instagram-v2.svg" alt="instagram" width="164" height="48" />
                    <img src="/images/logos/facebook-v2.svg" alt="facebook" width="164" height="48" />
                    <img src="/images/logos/instagram-v2.svg" alt="instagram" width="164" height="48" />
                </MarqueeSlider>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.pricing-header {
    &__text {
        color: $color-neutral--4;
        margin-block-start: toRem(16);
    }
    &__slider {
        @extend %u-fadeout-edge;
        margin-block-start: toRem(20);
    }
}

.pricing {
    &-toggler {
        @extend %u-display-flex;
        @extend %u-flex-center;
        margin-block: toRem(40);

        &__wrapper {
            @extend %u-display-flex;
            @extend %u-flex-center;
            @extend %u-flex-wrap;
            @extend %u-rounded-pill;
            background-color: rgba($color: #c5abf8, $alpha: 0.2);
            padding: toRem(4);
            gap: toRem(8);
        }

        &__label {
            @extend %u-cursor-pointer;
        }

        &__btn {
            @extend %u-display-flex;
            @extend %u-rounded-pill;
            @extend %u-transition;
            padding: toRem(6) toRem(12);
            font-weight: 600;
            border: 1px solid transparent;

            @include interaction {
                color: $color-neutral--4;
            }
        }

        &__input {
            @extend %u-cursor-pointer;
            opacity: 0;

            &:checked + .pricing-toggler__btn {
                color: $color-primary;
                background-color: $color-neutral--8;
                border-color: $color-neutral--6;
                box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);
            }

            &:focus-visible + .pricing-toggler__btn {
                border-color: $color-primary;
            }
        }
    }

    &-grid {
        @extend %u-display-grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, toRem(360)), 1fr));
        gap: toRem(32);
    }

    &-card {
        @extend %u-display-flex;
        flex-direction: column;
        border-radius: toRem(16);
        padding: toRem(32) toRem(36);
        gap: toRem(16);

        &--regular {
            background-color: $color-neutral--8;
            border: 1px solid $color-neutral--6;
        }

        &__header {
            @extend %u-display-flex;
            @extend %u-flex-wrap;
            gap: toRem(16);
            justify-content: space-between;
            align-items: center;
        }

        &__badge {
            @extend %u-display-flex;
            @extend %u-rounded-pill;
            color: $color-neutral--8;
            padding: toRem(4) toRem(12);
            background-color: rgba($color: #f1e7ff, $alpha: 0.3);
        }

        &__title,
        &__price__title,
        &__subtitle {
            color: $color-neutral--2;
        }

        &__title {
            font-size: fluid-size(18px, 20px);
            line-height: 1.5;
        }

        &__price {
            @extend %u-display-flex;
            @extend %u-flex-wrap;
            gap: toRem(4);
            align-items: baseline;
        }

        &__divider {
            border: 0;
            border-top: 1px solid $color-neutral--6;
        }

        &__body,
        &__list {
            @extend %u-display-grid;
            gap: toRem(12);
        }

        &__body {
            margin-block-end: auto;
        }

        &__list__item {
            padding-inline-start: toRem(32);
            background-image: url("/images/icons/check-primary.svg");
            background-repeat: no-repeat;
            background-position-y: 0.35em;
        }

        &--popular {
            box-shadow: 0 0 0 toRem(4) rgba($color: #5641f6, $alpha: 0.1);

            .u-section-bg {
                object-position: center top;
            }

            .pricing-card {
                &__title,
                &__price__text,
                &__list__item {
                    color: $color-neutral--6;
                }

                &__price__title,
                &__subtitle {
                    color: $color-neutral--8;
                }

                &__list__item {
                    background-image: url("/images/icons/check-light.svg");
                }
            }
        }
    }
}
</style>
