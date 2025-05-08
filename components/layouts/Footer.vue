<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData(() => queryCollection("config").where("stem", "=", "config/footer-navigation").first());
</script>

<template>
    <!-- Section Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="footer__top__left">
                    <NuxtLink to="/" aria-label="Spell" class="footer__brand">
                        <IconsLogo />
                    </NuxtLink>
                    <p class="footer__text u-text-regular">The AI-powered alternative to Google Docs and Word, Spell is the best way to create & edit docs with AI.</p>
                    <ul class="social-list u-list-unstyled">
                        <li>
                            <NuxtLink to="https://www.linkedin.com/company/spellapp" external target="_blank" aria-label="Linkedin" class="social__link">
                                <IconsLinkedin />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="https://x.com/spell_app" external target="_blank" aria-label="X" class="social__link">
                                <IconsTwitter />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="https://www.instagram.com/spell_app" external target="_blank" aria-label="Instagram" class="social__link">
                                <IconsInstagram />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="https://www.youtube.com/@spellapp" external target="_blank" aria-label="YouTube" class="social__link">
                                <IconsYouTube />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__top__right">
                    <div v-for="(categories, index) in config" :key="index" class="footer__block">
                        <h3 class="footer__block__title u-text-neutral-2 u-weight-bold">
                            {{ categories.category }}
                        </h3>
                        <ul class="footer__block__list u-list-unstyled">
                            <li v-for="(item, index) in categories.items" :key="index">
                                <NuxtLink :to="item.url" class="footer__block__link" :target="item.url.startsWith('https://') ? '_blank' : undefined">{{ item.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <p class="u-text-xs">© 2025 <NuxtLink to="/">Spell</NuxtLink>, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    align-self: end;

    &__top {
        @extend %u-display-grid;
        gap: fluid-size(60px, 100px);
        padding-block-start: fluid-size(40px, 60px);
        padding-block-end: fluid-size(24px, 55px);

        @include min-lg {
            grid-template-columns: auto 1fr;
        }

        &__left,
        &__right {
            @extend %u-display-grid;
            gap: toRem(32);
        }

        &__left {
            align-content: start;
            justify-items: start;
        }

        &__right {
            grid-template-columns: repeat(auto-fit, minmax(min(toRem(120), 100%), 1fr));
        }
    }

    &__text {
        max-width: 28ch;
    }

    &__block {
        &__title {
            margin-block-end: toRem(24);
        }

        &__list {
            @extend %u-display-grid;
            gap: toRem(16);
        }

        &__link {
            @extend %u-display-flex;
            @extend %u-transition;

            @include interaction {
                color: $color-neutral--4;
            }
        }
    }

    &__bottom {
        padding-block: toRem(24);
        border-block-start: 1px solid $color-neutral--6;
    }
}
</style>
