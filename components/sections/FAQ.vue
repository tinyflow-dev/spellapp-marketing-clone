<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData("faqs-config", () => queryCollection("config").where("stem", "=", "config/faqs").first());
const activeIndex = ref(null);
const handleFAQToggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
    <!-- Section FAQ -->
    <section id="faq" class="section-faq u-spacing-block u-position-relative u-stacking-context">
        <img src="/images/patterns/section-faq-pattern.png" alt="" width="1440" height="674" loading="lazy" class="section-faq__bg" />
        <div class="container">
            <h2 class="faq__title u-heading-h3 u-text-center">Frequently asked questions</h2>
            <div class="faq-list">
                <div v-for="(item, index) in config" :key="index" :class="['faq-card', { 'cc-active': activeIndex === index }]">
                    <button @click="handleFAQToggle(index)" type="button" class="faq-card__toggler u-text-md">
                        {{ item.question }}
                        <span class="faq-card__icon">
                            <IconsArrowDown />
                        </span>
                    </button>
                    <div class="faq-card__body">
                        <div class="u-overflow-hidden">
                            <div class="faq-card__content">
                                <p class="u-text-sm">{{ item.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-faq__bg {
    position: absolute;
    width: 100%;
    z-index: -1;
    top: 0;

    @include max-lg {
        display: none;
    }
}

.faq {
    &__title {
        margin-block-end: toRem(40);
    }

    &-list {
        @extend %u-margin-inline-auto;
        max-width: toRem(568);
    }

    &-card {
        & ~ .faq-card {
            border-top: 1px solid $color-neutral--6;
        }

        &__toggler {
            @extend %u-display-flex;
            @extend %u-align-item-center;
            justify-content: space-between;
            gap: toRem(24);
            padding-block: toRem(24);
            width: 100%;
            background-color: transparent;
            border: 0;
            text-align: start;

            &:active,
            &:focus-visible {
                background-color: $color-neutral--7;
            }
        }

        &__icon {
            @extend %u-transition;
            flex-shrink: 0;
        }

        &__body {
            @extend %u-display-grid;
            @extend %u-transition;
            grid-template-rows: 0fr;
        }

        &__content {
            padding-block-end: toRem(24);
        }

        &.cc-active {
            .faq-card {
                &__icon {
                    transform: rotate(180deg);
                }

                &__body {
                    grid-template-rows: 1fr;
                }
            }
        }
    }
}
</style>
