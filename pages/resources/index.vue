<script setup>
const route = useRoute();
const router = useRouter();
const requestUrl = useRequestURL(); // works on both SSR & client

// Track current page from query param
const page = computed(() =>
  parseInt((route.query.page || requestUrl.searchParams.get('page') || '1')) || 1
);
const limit = 9;

// 🧠 Reactive fetch with watch
const { data, pending } = await useAsyncData(
  'resources',
  () =>
    useFetch('/api/resources', {
      query: () => ({ page: page.value, limit })
    }).then(res => res.data.value),
  {
    watch: [page]
  }
);

// Computed resources and pagination
const resources = computed(() => data.value?.resources || []);
const pagination = computed(() => ({
  page: data.value?.pagination?.page || 1,
  totalPages: data.value?.pagination?.totalPages || 1,
  total: data.value?.pagination?.total || 0,
}));

// Pagination handlers
const nextPage = () => {
  if (page.value < pagination.value.totalPages) {
    router.replace({ query: { page: String(page.value + 1) } });
  }
};

const previousPage = () => {
  if (page.value > 1) {
    router.replace({ query: { page: String(page.value - 1) } });
  }
};
</script>


<template>
    <!-- <header
        v-if="featuredPost"
        class="section-blog-header u-header-spacing-top u-spacing-block u-position-relative u-stacking-context"
    >
        <img class="u-section-bg" src="/images/backgrounds/blog-page-bg.png" alt="" loading="eager" />
        <div class="container">
            <NuxtLink class="blog-header__wrapper" :to="featuredPost.path">
                <div class="blog-header__content">
                    <Badge>{{ featuredPost.category }}</Badge>
                    <div class="blog-header__content__heading">
                        <h1 class="blog-header__title u-heading-h3">{{ featuredPost.title }}</h1>
                        <p class="blog-header__text u-text-md">{{ featuredPost.description }}</p>
                    </div>
                    <CardsAuthorMeta v-if="featuredPost.meta?.author" :name="featuredPost.meta?.author"
                        :image="featuredPost.meta?.authorImage" />
                </div>
                <UtilitiesImageFrame class="blog-header__thumbnail">
                    <img :src="featuredPost.meta?.thumbnail" :alt="featuredPost.title" width="868" height="420" loading="eager" />
                </UtilitiesImageFrame>
            </NuxtLink>
        </div>
    </header>
    <header v-else class="u-header-spacing-top u-spacing-block">
        <h1 class="u-heading-h1 u-text-center">All posts</h1>
    </header> -->

    <header class="u-header-spacing-top">
        <h1 class="u-heading-h1 u-text-center">All posts <br> <strong v-if="pagination.total" class="u-text-primary">{{ pagination.total }}</strong></h1>
    </header>

    <!-- Section Related Posts -->
    <section class="u-spacing-block">
        <div class="container">
            <!-- Categories -->
            <!-- <ul class="nav u-list-unstyled">
                <li>
                    <button @click="selectCategory('all')"
                        :class="['nav__link', { active: selectedCategory === 'all' }]">All categories</button>
                </li>
                <li v-for="(category, index) in categories" :key="index">
                    <button @click="selectCategory(category)"
                        :class="['nav__link', { active: selectedCategory === category }]">
                        {{ category }}
                    </button>
                </li>
            </ul> -->

            <div v-if="pending">Loading...</div>

            <UtilitiesPostsGrid v-else>
                <CardsPost v-for="resource in resources" :key="resource.id" :to="`/resources/${resource.slug}`">
                    <template #title>{{ resource.title }}</template>
                    <template #description>{{ resource.description }}</template>
                </CardsPost>
            </UtilitiesPostsGrid>

            <!-- No resources found -->
            <template v-if="resources.length === 0 && !pending">
                <p class="u-text-center">No resources found on this page.</p>
            </template>

            <!-- Pagination -->
            <div v-if="pagination.totalPages > 1" class="pagination">
                <button type="button" class="pagination__btn" @click="previousPage"
                    :disabled="page <= 1 || pending">
                    <IconsChevronLeft class="pagination__btn__icon" /> Previous
                </button>
                <span>Page {{ page }} of {{ pagination.totalPages }}</span>
                <button type="button" class="pagination__btn" @click="nextPage"
                    :disabled="page >= pagination.totalPages || pending">Next
                    <IconsChevronRight class="pagination__btn__icon" />
                </button>
            </div>
        </div>
    </section>

    <section class="u-spacing-block">
        <div class="container">
            <CtaCenteredImage />
        </div>
    </section>
</template>

<style lang="scss">
.section-blog-header {
    .container {
        @media screen and (min-width: 1320px) {
            --container: 1200px;
            margin-inline-start: calc((((100% - var(--container)) / 2)) + (var(--gutter) / 1.5));
        }
    }
}

.blog-header {
    &__content {
        @include max-md {
            text-align: center;
        }

        &__heading {
            margin-block-start: toRem(24);
            margin-block-end: fluid-size(16px, 24px);
        }
    }

    &__title,
    &__text {
        @include max-md {
            margin-inline: auto;
        }
    }

    &__title {
        @extend %u-line-clamp;
        max-width: 15ch;
    }

    &__text {
        @extend %u-line-clamp;
        max-width: 38ch;
        margin-block-start: toRem(16);
    }

    &__wrapper {
        @extend %u-display-flex;
        gap: toRem(36);

        @include max-md {
            flex-direction: column;
            align-items: center;
        }

        @include min-lg {
            align-items: flex-start;
            justify-content: space-between;
        }
    }

    &__thumbnail {
        --_ratio: #{ratio(658px, 390px)};
        --_inner-radius: #{fluid-size(10px, 16px)};
        --_padding: #{fluid-size(5px, 11px)};

        width: min(toRem(682), 100%);
    }
}

.nav,
.pagination__btn {
    gap: toRem(8);
}

.nav__link,
.pagination__btn {
    background-color: transparent;
    border: 0;

    &:not(:disabled) {
        @include interaction {
            color: $color-neutral--3;
        }
    }

    &:disabled {
        cursor: not-allowed;
    }
}

.nav {
    @extend %u-display-flex;
    overflow: auto;

    &__link {
        @extend %u-transition;
        @extend %u-display-flex;
        flex-shrink: 0;
        white-space: nowrap;
        padding: toRem(6) toRem(16);
        border-radius: toRem(8);
        outline-offset: -2px;

        &.active {
            color: $color-neutral--2;
            background-color: #f3f3f3;
        }
    }
}

.pagination {
    @extend %u-display-flex;
    @extend %u-flex-center;
    @extend %u-flex-wrap;
    gap: toRem(60);
    margin-block-start: toRem(48);

    &__btn {
        @extend %u-transition;
        @extend %u-display-flex;
        @extend %u-flex-center;
        padding: toRem(5);
        min-width: toRem(84);

        &__icon {
            flex-shrink: 0;
        }
    }
}
</style>