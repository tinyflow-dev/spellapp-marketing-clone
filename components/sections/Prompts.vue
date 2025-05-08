<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData("prompts-config", () => queryCollection("config").where("stem", "=", "config/prompts").first());
</script>

<template>
    <!-- Section Prompts -->
    <section class="section-prompts u-spacing-block">
        <div v-for="({ prompts }, index) in config" :key="index" class="prompts__slider">
            <MarqueeSlider :reversed="index % 2 ? false : true" :pause-on-hover="true" duration="216s" gap="2rem">
                <CardsPrompt v-for="(prompt, index) in prompts" :key="index" :to="prompt.url">
                    <template #icon>
                        <img :src="prompt.icon" alt="" width="44" height="44" loading="lazy" />
                    </template>
                    <template #text>{{ prompt.text }}</template>
                </CardsPrompt>
            </MarqueeSlider>
        </div>
    </section>
</template>

<style lang="scss">
.section-prompts {
    --_overlay: 9.03%;
    @extend %u-display-grid;
    gap: toRem(32);
    mask: linear-gradient(90deg, transparent, #000000 var(--_overlay) calc(100% - var(--_overlay)), transparent);

    .prompts__slider:last-of-type {
        @include max-xs {
            display: none;
        }
    }
}
</style>
