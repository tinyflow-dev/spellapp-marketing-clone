<script setup>
const { appendUTM } = useUtmLink("CTA-4");
</script>

<template>
    <div class="cta u-position-relative u-stacking-context u-overflow-hidden u-gradient-1">
        <div class="cta__content">
            <div class="cta__title u-heading-h4">The AI Alternative to Google Docs</div>
            <div class="cta__text u-text-regular">Go from idea to polished doc in seconds with Spell's AI-powered document editor.</div>
            <Button :to="appendUTM('https://spellapp.com/signup')" variant="primary">Create my first doc</Button>
        </div>
        <figure class="cta__media">
            <img class="cta__media__hidden u-select-none" src="/images/cta/image-left/spell-fake-preview-1.png" alt="" width="474" height="323" loading="lazy" />
            <img class="cta__media__image u-select-none" src="/images/cta/image-left/spell-preview-1.png" alt="" width="554" height="369" loading="lazy" />
        </figure>
    </div>
</template>

<style lang="scss" scoped>
.cta {
    --_padding-inline: #{fluid-size(24px, 48px)};
    @extend %u-display-grid;
    gap: fluid-size(36px, 52px);
    border-radius: fluid-size(20px, 24px);
    padding-block: fluid-size(24px, 32px);
    padding-inline-end: var(--_padding-inline);

    @include min-lg {
        display: flex;
        align-items: center;
    }

    &__content {
        @include max-md {
            padding-inline-start: var(--_padding-inline);
        }
        @include min-lg {
            order: 1;
        }
        @include cta-content-center(991.98px);
    }

    &__title {
        max-width: 15ch;

        @include min-lg {
            max-width: 11ch;
        }
    }

    &__text {
        margin-block-start: toRem(12);
        margin-block-end: toRem(24);
        max-width: 30.5ch;
    }

    &__media {
        @extend %u-display-grid;

        &__hidden {
            visibility: hidden;
        }

        &__image {
            position: absolute;
            left: 0;
            transform: translateY(-14px);

            @include max-md {
                max-width: unset;
            }

            @media screen and (max-width: 550px) {
                width: 108.5%;
            }
        }
    }
}
</style>
