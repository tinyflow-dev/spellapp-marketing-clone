<script setup>
usePageMeta({
    title: "Why? | Spell",
    description: "Spell is the AI-first collaborative document editor that combines the power of ChatGPT with the ease of Google Docs. Write, edit, and collaborate in real-time with AI assistance.",
});
</script>

<template>
    <header class="section-about-header u-header-spacing-top u-text-center u-position-relative u-stacking-context">
        <img class="u-section-bg" src="/images/backgrounds/why-page-bg.png" alt="" loading="eager" />
        <div class="container">
            <div class="about-header__wrapper">
                <Badge>✨ Why</Badge>
                <h1 class="u-heading-h1">Why Spell?</h1>
                <h2 class="about-header__subtitle u-title-lg">The AI-First Collaborative Document Editor</h2>
                <p class="about-header__text">
                    Most people toggle between ChatGPT and Google Docs. You generate content in one, paste into the other - then jump back and forth every time you want to revise. It's clunky, slow, and constantly breaks formatting. Spell
                    replaces that mess with a collaborative document editor where you can write, edit, and collaborate in real time. No switching tabs, no reformatting, no re-prompting. Imagine if ChatGPT was built into Google Docs - that's
                    Spell. Here's what makes us different:
                </p>
            </div>
        </div>
    </header>

    <section class="section-about-details u-spacing-block">
        <div class="container">
            <div class="about-details__wrapper">
                <div class="about-details-card">
                    <img class="about-details-card__icon" src="/images/icons/feather-teal.svg" alt="" width="32" height="32" loading="lazy" />
                    <div class="about-details-card__content">
                        <h2 class="about-details-card__title u-title-lg">One Tool for Drafting and Editing</h2>
                        <p>
                            No more copy-pasting between tools. With Spell, you don't have to jump between ChatGPT and Google Docs to write and revise. Start your doc with an AI-generated draft, then make changes directly by highlighting
                            text and prompting — all without losing formatting or context.
                        </p>
                    </div>
                </div>
                <div class="about-details-card">
                    <img class="about-details-card__icon" src="/images/icons/feather-purple.svg" alt="" width="32" height="32" loading="lazy" />
                    <div class="about-details-card__content">
                        <h3 class="about-details-card__title u-title-lg">Real-Time Collaboration with AI</h3>
                        <p>
                            Work with your team — and your AI — in the same doc. Spell feels like Google Docs: you can write, comment, and edit with others in real time. But unlike Docs, you're not on your own. Everyone can use AI together
                            — to draft, revise, summarize, or brainstorm — in the same live document.
                        </p>
                    </div>
                </div>
                <div class="about-details-card">
                    <img class="about-details-card__icon" src="/images/icons/feather-orange.svg" alt="" width="32" height="32" loading="lazy" />
                    <div class="about-details-card__content">
                        <h3 class="about-details-card__title u-title-lg">Better AI Outputs, Purpose-Built for Writing Docs</h3>
                        <p>
                            Not just a chatbot — a writing assistant built for docs. Spell uses context-specific prompts, guided flows, and a fine-tuned model trained on thousands of high-quality documents. The result? Outputs that match
                            real-world expectations — not generic, bloggy text from a chat window.
                        </p>
                    </div>
                </div>
                <div class="about-details-card">
                    <img class="about-details-card__icon" src="/images/icons/feather-blue.svg" alt="" width="32" height="32" loading="lazy" />
                    <div class="about-details-card__content">
                        <h3 class="about-details-card__title u-title-lg">Templates for Every Use Case</h3>
                        <p>
                            Get started with expert-backed document types. Need to write a job description, investor memo, customer reply, or product spec? Just pick a starting point or describe what you need — Spell knows the structure,
                            tone, and content that works best for dozens of common doc types.
                        </p>
                    </div>
                </div>
                <div class="about-details-card">
                    <img class="about-details-card__icon" src="/images/icons/feather-purple.svg" alt="" width="32" height="32" loading="lazy" />
                    <div class="about-details-card__content">
                        <h3 class="about-details-card__title u-title-lg">Built-In Guidance That Helps You Write Better</h3>
                        <p>
                            You don't just write faster — you write smarter. Spell doesn't just fill in the blanks. It helps you think through what matters. With prompt suggestions, checklist-style flows, and document-specific guidance, you
                            can be sure you're including what great documents should — every time.
                        </p>
                    </div>
                </div>
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
.about-header__text,
.about-details-card__title {
    color: $color-neutral--4;
}

.about-header {
    &__wrapper {
        @extend %u-display-grid;
        justify-items: center;
        gap: toRem(24);
    }

    &__subtitle {
        color: $color-primary;
    }

    &__text {
        max-width: 62.5ch;

        &:last-of-type {
            margin-block-start: fluid-size(2px, 12px);
        }
    }
}

.section-about-details {
    .container {
        --container: 700px;
    }
}

.about-details {
    &__wrapper {
        @extend %u-display-grid;
        gap: fluid-size(40px, 60px);
    }

    &-card {
        @extend %u-display-flex;
        align-items: flex-start;
        gap: toRem(16);
        padding: toRem(31);
        border: 1px solid $color-neutral--6;
        border-radius: toRem(24);

        &__icon {
            width: toRem(32);
            margin-block-start: toRem(6);
            flex-shrink: 0;
        }

        &__title {
            margin-block-end: toRem(16);
        }
    }
}
</style>
