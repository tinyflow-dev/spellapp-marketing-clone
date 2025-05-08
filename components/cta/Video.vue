<script setup>
const { appendUTM } = useUtmLink("CTA-2");
</script>

<template>
    <div class="cta u-position-relative u-stacking-context u-overflow-hidden u-gradient-4">
        <div class="cta__pattern u-position-absolute u-select-none">
            <IconsPattern />
        </div>
        <div class="cta__content">
            <div class="cta__title u-heading-h4">The AI-First Document Editor</div>
            <div class="cta__text u-text-regular">Spell is the AI-powered alternative to Google Docs and Microsoft Word.</div>
            <Button :to="appendUTM('https://spellapp.com/signup')" variant="primary">Get started for free</Button>
        </div>
        <!-- <div class="cta__media u-overflow-hidden">
            <div class="cta__figure u-position-relative u-overflow-hidden">
            </div>
        </div> -->
        
        <UtilitiesImageFrame class="cta__media">
            <img src="/images/cta/video/spell-ai-document-editor.png" alt="" width="414" height="270" loading="lazy" />
            <!--
            <button type="button" class="button button--play u-position-absolute">
                <IconsPlay />
            </button>
            -->
        </UtilitiesImageFrame>
    </div>
</template>

<style lang="scss" scoped>
.cta {
    @extend %u-display-grid;
    gap: fluid-size(36px, 48px);
    border-radius: fluid-size(20px, 24px);
    padding-block: fluid-size(24px, 36px);
    padding-inline: fluid-size(24px, 48px);

    @include min-md {
        display: flex;
    }

    &__pattern {
        @extend %u-z-index-n1;
        left: 0;
        align-self: center;

        @include min-md {
            left: calc(100% + toRem(16));
            transform: translateX(-100%);
        }

        svg {
            width: toRem(600);
            height: auto;
            max-width: unset;
        }
    }

    &__content {
        @include cta-content-center;
        @include min-md {
            align-self: center;
        }
    }

    &__title {
        max-width: 14ch;
    }

    &__text {
        margin-block-start: toRem(12);
        margin-block-end: toRem(24);
    }

    &__media {
        --_ratio: #{ratio(414px, 270px)};
        --_radius: #{fluid-size(8px, 12px)};
        --_inner-radius: #{fluid-size(6px, 8px)};
        --_padding: #{toRem(3)};

        @extend %u-margin-inline-auto;
        width: 100%;

        @include min-md {
            width: min(toRem(422), 100%);
            flex-basis: 100%;
        }
    }
}
</style>
