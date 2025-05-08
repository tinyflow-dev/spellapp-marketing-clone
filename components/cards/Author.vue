<script setup>
defineProps({
    name: String,
    image: {
        type: String,
        default: "/images/authors/spencer-lanoue.png",
    },
});
</script>

<template>
    <div class="author-card">
        <img class="author-card__image" :src="image" :alt="name" width="40" height="40" loading="eager" />
        <h3 class="author-card__name u-text-neutral-2 u-title-md">{{ name }}</h3>
        <p class="author-card__description">Spencer has been working in product and growth for the last 10 years. He's currently Head of Growth at Sugardoh. Before that he worked at Bump Boxes, Buffer, UserTesting, and a few other early-stage startups.</p>
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
        </ul>
    </div>
</template>

<style lang="scss">
.author-card {
    @extend %u-display-grid;
    background-color: $color-shade--purple;
    border-radius: fluid-size(20px, 24px);
    padding-block-start: fluid-size(24px, 32px);
    padding-inline: fluid-size(20px, 32px);
    padding-block-end: fluid-size(36px, 40px);
    
    @include max-sm {
        grid-row-gap: toRem(16);
        grid-template-columns: toRem(56) 1fr;
        grid-template-areas:
            "image title"
            "description description"
            "social social";
    }
    
    @include min-md {
        grid-row-gap: toRem(8);
        grid-template-columns: toRem(56) 1fr auto;
        grid-template-areas:
            "image title social"
            ". description description";
    }


    &__image {
        @extend %u-rounded-circle;
        @extend %u-ratio-1;
        width: toRem(44);
        border: 2px solid #fcfcfd;
        grid-area: image;
    }

    &__name {
        grid-area: title;
    }
    
    &__description {
        color: $color-neutral--4;
        grid-area: description;
    }

    .social-list {
        grid-area: social;
    }
}
</style>
