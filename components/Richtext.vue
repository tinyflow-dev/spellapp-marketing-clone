<script setup>
defineProps({
    content: {
        require: true,
    },
    isHTML: {
        type: Boolean,
        default: false,
        require: false,
    },
});
</script>

<template>
    <div v-if="isHTML" v-html="content" class="u-richtext" />
    <ContentRenderer v-else :value="content" class="u-richtext" />
</template>

<style lang="scss">
.u-richtext {
    > * {
        color: $color-neutral--4;
        font-size: fluid-size(15px, 18px);
        margin-block-end: toRem(20);
        line-height: 1.75;
    }

    :is(p, li) a {
        @extend %u-fw-semibold;
        @extend %u-transition;
        color: $color-primary;
        text-decoration: underline;

        @include interaction {
            color: $color-primary__variation-3;
        }
    }

    ol,
    ul {
        padding-inline-start: fluid-size(32px, 48px);
        margin-block: toRem(32);

        li {
            ~ li {
                margin-block-start: toRem(16);
            }
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: $color-neutral--2;
    }

    h1,
    h2 {
        margin-block-start: toRem(48);
    }

    h1,
    h2 {
        font-size: fluid-size(24px, 32px);
        line-height: 1.375;
        margin-block-end: toRem(20);
    }

    h3,
    h4 {
        font-size: fluid-size(20px, 24px);
        line-height: 1.42;
        margin-block-start: toRem(20);
    }

    pre {
        font-family: monospace, consolas;
        background-color: $color-neutral--7;
        margin-block-start: toRem(32);
        padding: toRem(32);
        border-radius: toRem(6);
        white-space: pre-wrap;
        word-break: break-word;
        overflow: auto;
    }

    > *:first-child {
        margin-block-start: 0;
    }
    > *:last-child {
        margin-block-end: 0;
    }
}
</style>
