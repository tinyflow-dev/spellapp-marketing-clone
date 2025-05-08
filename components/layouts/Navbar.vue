<script setup>
const {
    data: {
        value: { config },
    },
} = await useAsyncData(() => queryCollection("config").where("stem", "=", "config/header-navigation").first());
const route = useRoute();
const showMobileMenu = ref(false);

// Close menu on any route change
watch(
    () => route.fullPath,
    () => {
        showMobileMenu.value = false;
    },
);
</script>

<template>
    <!-- Section Navbar -->
    <nav :class="['navbar', { 'cc-active': showMobileMenu }]">
        <div class="container">
            <div class="navbar__wrapper">
                <NuxtLink to="/" aria-label="Spell" class="navbar__brand">
                    <IconsLogo />
                </NuxtLink>
                <div class="navbar__menu">
                    <ul class="navbar__list u-list-unstyled">
                        <li v-for="item in config">
                            <NuxtLink :to="item.url" class="navbar__link">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                    <div class="navbar__buttons">
                        <Button to="https://spellapp.com/signup" variant="secondary">Sign in</Button>
                        <Button to="https://spellapp.com/signin" variant="primary">Get started</Button>
                    </div>
                </div>
                <button @click="showMobileMenu = !showMobileMenu" type="button" class="navbar__toggler">
                    <IconsMenuClose v-if="showMobileMenu" />
                    <IconsMenuOpen v-else />
                </button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    --gutter: #{toRem(16)};
    --_border-radius: #{toRem(12)};
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    padding-block-start: toRem(24);

    &__wrapper {
        @extend %u-transition;
        @extend %u-align-item-center;
        @extend %u-position-relative;
        border-radius: var(--_border-radius);
        box-shadow: 0 toRem(4) toRem(16) rgba($color: #172440, $alpha: 0.08);
        padding: toRem(16);

        @include max-md {
            display: flex;
            justify-content: space-between;
        }

        @include min-lg {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
        }

        &::before {
            @extend %u-common-pseudo;
            @extend %u-select-none;
            inset: 0;
            background-color: rgba($color: #fefefe, $alpha: 0.9);
            backdrop-filter: blur(toRem(10));
            border-radius: inherit;
            z-index: -1;
        }
    }

    &__brand {
        justify-self: start;
    }

    &__menu {
        @extend %u-transition;
        @extend %u-display-grid;
        position: fixed;
        inset: 0;
        grid-template-rows: 1fr auto;
        background-color: $color-neutral--8;
        padding: toRem(16);
        padding-top: toRem(114);
        z-index: -1;

        @include min-lg {
            display: contents;
        }
    }

    &__list {
        @extend %u-display-flex;

        @include max-md {
            flex-direction: column;
            margin-block-end: toRem(16);
        }

        @include min-lg {
            gap: toRem(22);
        }
    }

    &__link {
        @extend %u-transition;
        @extend %u-display-flex;
        @extend %u-align-item-center;
        padding: toRem(5);
        font-size: toRem(15);

        @include max-md {
            font-size: toRem(24);
            line-height: 1.42;
            padding: toRem(6) toRem(16);
            font-weight: 700;
        }

        @include interaction {
            color: $color-neutral--4;
        }
        &.router-link-exact-active {
            color: $color-neutral--4;
            font-weight: 600;
        }
    }

    &__buttons {
        @extend %u-display-flex;
        gap: toRem(12);

        @include max-xxs {
            flex-direction: column;
        }

        @include min-lg {
            justify-self: end;
            justify-content: center;
        }

        .button {
            @include max-md {
                flex-grow: 1;
                flex-basis: 0;
            }

            @include max-xxs {
                width: 100%;
            }
        }
    }

    &__toggler {
        background-color: transparent;
        border: none;
        color: $color-primary;

        @include min-lg {
            display: none;
        }
    }

    &:not(.cc-active) {
        .navbar {
            &__menu {
                @include max-md {
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
    }
}
</style>
