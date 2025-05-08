<template>
    <!-- Section Error 404 -->
    <header class="section-not-found u-spacing-block u-text-center u-position-relative u-stacking-context">
        <img src="/images/backgrounds/error-page-bg.png" alt="" loading="eager" class="u-section-bg" />
        <div class="container">
            <h1 class="u-heading-h1">Page not found! 🙁</h1>
            <p class="not-found__text u-text-md">Oops! The page you are looking for doesn't exist or has been removed</p>
            <Button to="/" variant="primary">Return home</Button>
        </div>
    </header>
</template>

<style lang="scss">
.section-not-found {
    padding-block-start: toRem(228);
}
.not-found__text {
    margin-block-start: toRem(16);
    margin-block-end: toRem(40);
}
</style>
