<script setup>
const { data } = await useAsyncData(() => queryCollection("pages").where("stem", "=", "pages/privacy-policy").first());
const { activeHeadingId } = useActiveTOCLink();
const { formatDate } = useFormattedDate();
const formattedDate = formatDate(data.value?.meta?.date);

usePageMeta({
    title: "Privacy Policy | Spell",
    description: "Read our privacy policy to understand how Spell collects, uses, and protects your data.",
});
</script>

<template>
    <header class="section-legal-header u-header-spacing-top u-spacing-block u-text-center u-position-relative u-stacking-context">
        <img class="u-section-bg" src="/images/backgrounds/privacy-page-bg.png" alt="" loading="eager" />
        <div class="container u-text-center">
            <h1 class="u-heading-h1">{{ data?.title || "Privacy Policy" }}</h1>
            <p class="legal-header__text">
                <strong class="legal-header__text__strong u-text-neutral-2 u-weight-bold">Lasted updated: </strong>
                <time v-if="data?.meta?.date" :datetime="`${data.meta.date}T00:00:00.000Z`">{{ formattedDate }}</time>
            </p>
        </div>
    </header>

    <!-- Section Legal Details Content -->
    <section class="section-legal-details u-spacing-block">
        <div class="container">
            <article class="legal-details__content u-position-relative">
                <div class="legal-details__toc">
                    <div class="legal-details__toc__card">
                        <h2 class="legal-details__toc__title u-text-neutral-2 u-text-md">Contents</h2>
                        <ul class="legal-details__toc__list u-list-unstyled">
                            <li v-for="(item, index) in data.body.toc.links" :key="index">
                                <NuxtLink
                                    :to="`#${item.id}`"
                                    class="legal-details__toc__link"
                                    :class="{
                                        'is-active': activeHeadingId === item.id,
                                    }"
                                >
                                    {{ item.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Richtext :content="data" />
            </article>
        </div>
    </section>
</template>

<style lang="scss">
.legal-header {
    &__text {
        color: $color-neutral--4;
        margin-block-start: toRem(16);
    }
}

.legal-details {
    &__toc {
        position: absolute;
        right: calc(100% + toRem(100));
        width: toRem(220);
        height: 100%;

        @media screen and (max-width: 1390px) {
            display: none;
        }

        &__card {
            position: sticky;
            top: var(--navbar-height);
        }

        &__title {
            margin-block-end: toRem(28);
        }

        &__list {
            @extend %u-display-grid;
            gap: toRem(20);
            max-height: calc(100vh - toRem(280));
            overflow: auto;
        }

        &__link {
            @extend %u-transition;
            display: block;

            @include interaction {
                color: $color-neutral--4;
            }

            &.is-active {
                color: $color-primary;
                text-shadow: 0 0 1px currentColor;
            }
        }
    }

    &__content {
        @extend %u-margin-inline-auto;
        width: min(toRem(700), 100%);
    }
}
</style>
