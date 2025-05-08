<script setup>
const isClient = import.meta.client;
const route = useRoute();
const { formatDate } = useFormattedDate();
const { data: resource, pending, error } = await useFetch(`/api/resources/${route.params.slug}`);

if (error.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Oops! The blog you are looking for doesn't exist or has been removed",
        fatal: true,
    });
}

usePageMeta({
    title: resource.value?.title,
    description: resource.value?.description,
    image: resource.value?.thumbnail,
});

/* Dynamic CTAs Add Functions */
const contentWrapper = ref(null);
const firstCTA = ref(null);
const secondCTA = ref(null);
const thirdCTA = ref(null);
const fourthCTA = ref(null);

// Function to insert CTAs into the rendered content
const insertCTAsIntoContent = () => {
    if (!contentWrapper.value) return;

    const contentContainer = contentWrapper.value;

    const contentElements = contentContainer.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (!contentElements || contentElements.length === 0) {
        console.warn("No content elements found to insert CTAs");
        return;
    }

    const total = contentElements.length;
    // CTA refs and their target indices
    const ctas = [
        { ref: firstCTA, index: 0 },
        { ref: secondCTA, index: Math.floor(total * 0.3) },
        { ref: thirdCTA, index: Math.floor(total * 0.6) },
        { ref: fourthCTA, index: Math.floor(total * 0.8) },
    ];

    // Track which indices have already been used (avoid duplicates)
    const usedIndices = new Set();

    ctas.forEach(({ ref, index }) => {
        if (ref.value && index < total && !usedIndices.has(index)) {
            contentElements[index].before(ref.value);
            usedIndices.add(index);
        }
    });
};

// Insert CTAs at specific content percentages
onMounted(() => {
    if (isClient) {
        // Wait for content to be fully rendered
        nextTick(() => {
            // Use setTimeout to ensure content is rendered
            setTimeout(() => {
                insertCTAsIntoContent();
            }, 500); // Small delay to ensure content is rendered
        });
    }
});

const formattedDate = formatDate(resource.value?.date);
</script>

<template>
  <!-- <h1>{{ resource.title }}</h1>
  <p>{{ resource.date }}</p>
  <Richtext :content="resource.body" isHTML /> -->
<div v-if="pending">Loading...</div>
<template v-else>
  <!-- Section Blog Details Header -->
  <header class="section-blog-details u-header-spacing-top u-spacing-block-sm u-position-relative u-stacking-context">
      <img class="u-section-bg" src="/images/backgrounds/blog-details-page-bg.png" alt="" loading="eager" />
      <div class="container">
          <div class="blog-details__header u-text-center">
              <Badge v-if="resource?.category">{{ resource.category }}</Badge>
              <h1  v-if="resource?.title" class="blog-details__header__title u-heading-h2">
                  {{ resource?.title }}
              </h1>
              <div class="blog-details__meta">
                  <CardsAuthorMeta
                      v-if="resource?.author"
                      :name="resource?.author"
                      :image="resource?.authorImage"
                  />
                  <time
                      v-if="resource?.date"
                      class="blog-details__meta__date u-position-relative"
                      :datetime="resource.date"
                  >{{ formattedDate }}</time>
              </div>
          </div>
          <UtilitiesImageFrame v-if="resource?.thumbnail" class="blog-details__thumbnail">
              <img :src="resource?.thumbnail" :alt="resource?.category" width="868" height="420" loading="eager" />
          </UtilitiesImageFrame>
      </div>
  </header>

  <!-- Section Blog Details Content -->
  <section class="u-spacing-block-sm">
      <div class="container">
          <article class="blog-details__content u-position-relative">
              <div class="blog-details__toc">
                  <div class="blog-details__toc__card">
                      <h2 class="blog-details__toc__title u-text-md">Contents</h2>
                      <ul class="blog-details__toc__list u-list-unstyled">
                        <li>
                          <NuxtLink :to="resource?.slug" class="blog-details__toc__link">TOC Item</NuxtLink>
                        </li>
                      </ul>
                  </div>
              </div>
              <div v-memo="[resource?.slug]" ref="contentWrapper">
                  <Richtext :content="resource.body" isHTML />
                  <div class="u-display-none">
                      <div ref="firstCTA" class="cta-wrapper">
                          <CtaText />
                      </div>
                      <div ref="secondCTA" class="cta-wrapper cc-margin-inline-0">
                          <CtaVideo />
                      </div>
                      <div ref="thirdCTA" class="cta-wrapper cc-margin-inline-0">
                          <CtaCenteredImage />
                      </div>
                      <div ref="fourthCTA" class="cta-wrapper cc-margin-inline-0">
                          <CtaImageLeft />
                      </div>
                  </div>
                  <CardsAuthor
                      v-if="resource?.author"
                      :name="resource?.author"
                      :image="resource?.authorImage"
                  />
              </div>
          </article>
      </div>
  </section>
</template>

</template>


<style lang="scss">
.blog-details {
    &__header {
        @extend %u-display-flex;
        @extend %u-align-item-center;
        flex-direction: column;
        margin-block-end: fluid-size(36px, 40px);

        &__title {
            max-width: 25ch;
            margin-block-start: toRem(24);
            margin-block-end: fluid-size(16px, 24px);
            // text-wrap: balance;
        }
    }

    &__meta {
        --_gap: #{toRem(12)};
        @extend %u-display-flex;
        @extend %u-align-item-center;
        @extend %u-justify-content-center;
        @extend %u-flex-wrap;
        gap: var(--_gap);

        &__date {
            @extend %u-display-flex;
            @extend %u-align-item-center;
            gap: var(--_gap);
            color: $color-neutral--4;

            &::before {
                @extend %u-rounded-circle;
                @extend %u-ratio-1;
                content: "";
                display: block;
                flex-shrink: 0;
                width: toRem(4);
                background-color: $color-neutral--5;
            }
        }
    }

    &__thumbnail {
        --_ratio: #{ratio(868px, 420px)};
        --_inner-radius: #{fluid-size(10px, 16px)};
        --_padding: #{fluid-size(5px, 7px)};

        @extend %u-margin-inline-auto;
        width: min(toRem(884), 100%);
    }

    &__content {
        @extend %u-margin-inline-auto;
        width: min(toRem(860), 100%);

        .u-richtext {
            >* {
                @include min-md {
                    margin-inline: toRem(80);
                }
            }

            .cta-wrapper {
                margin-block: toRem(48);

                &.cc-margin-inline-0 {
                    margin-inline: 0;
                }
            }
        }
    }

    &__toc {
        position: absolute;
        right: calc(100% + toRem(20));
        width: toRem(200);
        height: 100%;

        @media screen and (max-width: 1390px) {
            display: none;
        }

        &__card {
            position: sticky;
            top: calc(var(--navbar-height) + 82px);
        }

        &__title {
            color: $color-neutral--3;
            margin-block-end: toRem(16);
        }

        &__list {
            @extend %u-display-grid;
            gap: toRem(8);
        }

        &__link {
            @extend %u-transition;
            display: block;
            font-size: toRem(14);
            line-height: toRem(18);

            @include interaction {
                color: $color-neutral--3;
            }

            &.is-active {
                color: $color-primary;
            }
        }
    }
}

.author-card {
    margin-block-start: toRem(48);
}
</style>