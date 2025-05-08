import { useRoute } from "vue-router";

export function useUtmLink(identifier?: string | number) {
    const route = useRoute();
    const pathSegments = route.path.split("/").filter(Boolean);
    const utm_source = pathSegments[0] || "";
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join("-") : (route.params.slug as string) || pathSegments.slice(1).join("-") || "";

    const utm_medium = slug;
    let utm_campaign = identifier?.toString() || "";

    function appendUTM(url: string, override?: { utm_campaign?: string | number }) {
        try {
            if (override?.utm_campaign) utm_campaign = override.utm_campaign?.toString() || "";
            const urlObj = url.startsWith("http") ? new URL(url) : new URL(url, window.location.origin);
            if (utm_source) urlObj.searchParams.set("utm_source", utm_source);
            if (utm_medium) urlObj.searchParams.set("utm_medium", utm_medium);
            if (utm_campaign) urlObj.searchParams.set("utm_campaign", utm_campaign);
            return urlObj.toString();
        } catch (e) {
            return url;
        }
    }

    return { appendUTM, utm_source, utm_medium, utm_campaign };
}
