<script setup>
const { appendUTM } = useUtmLink("CTA-1");
</script>

<template>
    <div class="cta">
        <div>🔮</div>
        <div class="cta__text u-text-md">
            <div class="cta__text__strong u-weight-bold u-text-neutral-2">The AI Alternative to Google Docs & Word:</div>
            Save time by letting Spell write your docs for you. Turn hours of doc writing work into minutes.
            <Button :to="appendUTM('https://spellapp.com/signup')" variant="tertiary">Try it free →</Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta {
    @extend %u-display-flex;
    gap: toRem(10);
    background-color: $color-shade--purple;
    border-radius: fluid-size(12px, 16px);
    padding: fluid-size(20px, 24px) fluid-size(16px, 20px);

    &__text {
        color: $color-neutral--4;

        &__strong {
            display: inline;
        }
    }
}
</style>
