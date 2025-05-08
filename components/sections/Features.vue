<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData("features-config", () => queryCollection("config").where("stem", "=", "config/features").first());
const { appendUTM } = useUtmLink("Features");
</script>

<template>
    <!-- Section Features -->
    <div id="product" class="features-wrapper">
        <section v-for="(feature, index) in config" :key="index" :id="feature.id" class="section-feature u-spacing-block">
            <div class="container">
                <CommonSectionHeader>
                    <template #title>{{ feature.title }}</template>
                    <template #description>{{ feature.description }}</template>
                    <Button :to="appendUTM(feature.button.url)" external variant="tertiary">
                        {{ feature.button.text }}
                    </Button>
                </CommonSectionHeader>
                <div :class="['feature__block u-overflow-hidden', feature.gradient]">
                    <UtilitiesImageFrame class="feature__block__object">
                        <img :src="feature.image" :alt="feature.title" width="905" height="517" loading="lazy" />
                    </UtilitiesImageFrame>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.feature {
    &__block {
        padding-block-start: fluid-size(21px, 89px);
        padding-inline: toRem(20);
        border-radius: fluid-size(12px, 24px);
        background-color: $color-primary;

        &__object {
            --_ratio: #{ratio(905, 517)};
            --_radius: #{fluid-size(8px, 16px)};
            --_inner-radius: #{fluid-size(6px, 10px)};
            --_padding: #{fluid-size(3px, 11px)};
            --_bottom-size: 0;

            @extend %u-margin-inline-auto;
            max-width: toRem(929);
            box-shadow: 0 toRem(4) toRem(24) rgba($color: #172440, $alpha: 0.04);
        }
    }
}
</style>
