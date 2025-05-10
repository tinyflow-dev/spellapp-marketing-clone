export default defineNuxtPlugin((nuxtApp) => {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig();

    // Default domain from runtime config or fallback
    const domain = runtimeConfig.public.baseDomain || "https://spellapp.com";

    // Watch route changes and update globalUseHead
    const updateGlobalUseHead = () => {
        useHead({
            meta: [
                { property: "og:url", content: `${domain}${route.path}` },
                { property: "twitter:url", content: `${domain}${route.path}` },
            ],
            link: [{ rel: "canonical", href: `${domain}${route.path}` }],
        });
    };

    // Initial globalUseHead
    updateGlobalUseHead();

    // Watch for route changes
    nuxtApp.hook("page:finish", updateGlobalUseHead);
});
