import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

export default function useActiveTOCLink() {
    const route = useRoute();
    const activeHeadingId = ref("");
    let observer: IntersectionObserver | null = null;
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    // Update from URL hash
    watch(
        () => route.hash,
        (newHash) => {
            if (newHash) {
                activeHeadingId.value = newHash.slice(1);
            }
        },
        { immediate: true },
    );

    // IntersectionObserver to track headings
    onMounted(() => {
        if (typeof window === "undefined") return;

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        if (debounceTimer) clearTimeout(debounceTimer);
                        debounceTimer = setTimeout(() => {
                            activeHeadingId.value = entry.target.id;
                        }, 100); // debounce time in ms
                    }
                }
            },
            {
                rootMargin: "-110px 0px -66%",
                threshold: 0,
            },
        );

        document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach((heading) => observer?.observe(heading));
    });

    // Clean up observer on unmount
    onBeforeUnmount(() => {
        observer?.disconnect();
    });

    return {
        activeHeadingId,
    };
}
