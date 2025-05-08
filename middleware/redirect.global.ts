export default defineNuxtRouteMiddleware(async (to) => {
    try {
        const { data } = await useAsyncData("redirect-config", () => queryCollection("config").where("stem", "=", "config/redirects").first());

        const redirectMap = new Map<string, string>();

        for (const r of data.value?.config ?? []) {
            redirectMap.set(r.oldUrl, r.redirectUrl);
        }

        const redirectTarget = redirectMap.get(to.path);

        if (redirectTarget) {
            return navigateTo(redirectTarget, { redirectCode: 301 });
        }
    } catch (err) {
        console.error("Redirect middleware error:", err);
    }
});
