<script setup>
import { register } from "swiper/element/bundle";
const {
    data: {
        value: { config },
    },
} = await useAsyncData("templates-config", () => queryCollection("config").where("stem", "=", "config/templates").first());
const { appendUTM } = useUtmLink("Templates");
const templatesSlider = ref(null);

// Register Swiper web components
onMounted(() => {
    register();
    const sliderOptions = {
        injectStyles: [
            `
            :is(.swiper-button-prev, .swiper-button-next) svg {
                width: 1em;
                height: 1em;
            }
            .swiper-button-disabled {
                display: none;
            }
            `,
        ],
    };
    Object.assign(templatesSlider.value, sliderOptions);
    templatesSlider.value.initialize();
});
</script>

<template>
    <!-- Section Templates -->
    <section class="section-templates u-spacing-block" id="templates">
        <div class="container container--lg">
            <CommonSectionHeader>
                <template #title>Write docs 10x faster with Spell</template>
                <template #description>Spell takes you from blank page to polished, professional documents in a fraction of the time — helping businesses, teams & professionals be incredibly productive.</template>
                <Button :to="appendUTM('https://spellapp.com/signup')" variant="tertiary">Get started for free →</Button>
            </CommonSectionHeader>

            <swiper-container ref="templatesSlider" init="false" slides-per-view="auto" space-between="24" navigation="true">
                <swiper-slide v-for="(template, index) in config" :key="index">
                    <CardsTemplate :to="appendUTM(template.url)" external :background-image="template.backgroundImage">
                        <template #icon>
                            <img :src="template.icon" width="44" height="44" loading="lazy" />
                        </template>
                        <template #title>{{ template.title }}</template>
                    </CardsTemplate>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>

<style lang="scss">
.section-templates {
    /* swiper */
    ::part(container) {
        overflow: visible;
    }

    /* swiper navigation buttons */
    ::part(button-prev),
    ::part(button-next) {
        @extend %u-rounded-circle;
        @extend %u-transition;
        width: toRem(48);
        height: toRem(48);
        color: $color-neutral--1;
        background-color: $color-neutral--8;
        border: 1px solid $color-neutral--6;
        font-size: toRem(14);
        box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);

        @include max-xs {
            display: none;
        }

        @include min-xxl {
            --swiper-navigation-sides-offset: #{toRem((48 + 12) * -1)};
        }

        @include hover {
            &:hover,
            &:focus-visible {
                box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.12);
            }
        }

        &:active {
            background-color: $color-neutral--7;
        }
    }

    swiper-slide {
        width: auto;
    }
}
</style>
