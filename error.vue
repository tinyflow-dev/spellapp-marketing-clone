<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});

const handleClearError = () => clearError({ redirect: "/" });

const is404 = computed(() => props.error?.statusCode === 404);
</script>

<template>
    <LayoutsNavbar />

    <main class="main">
        <!-- Section Error -->
        <header class="section-not-found u-text-center u-position-relative u-stacking-context">
            <img src="/images/backgrounds/error-page-bg.png" alt="" loading="eager" class="u-section-bg" />
            <div class="container">
                <h1 class="u-heading-h1">
                    {{ is404 ? "Page not found! 🙁" : "Oops! Something went wrong 😓" }}
                </h1>
                <p class="not-found__text u-text-md">
                    {{ is404 ? "Oops! The page you are looking for doesn't exist or has been removed" : props.error?.message || "An unexpected error occurred. Please try again later." }}
                </p>
                <Button to="/" variant="primary" @click="handleClearError"> Return home </Button>
            </div>
        </header>
    </main>

    <LayoutsFooter />
</template>

<style lang="scss">
.section-not-found {
    padding-block-start: fluid-size(200px, 228px);
    padding-block-end: fluid-size(80px, 152px);
}
.not-found__text {
    margin-block-start: toRem(16);
    margin-block-end: toRem(40);
}
</style>
