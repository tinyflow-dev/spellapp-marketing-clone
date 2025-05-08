export function usePageMeta({ title, description, image }: { title: string; description: string; image?: string }) {
    useSeoMeta({
        title,
        ogTitle: title,
        twitterTitle: title,
        description,
        ogDescription: description,
        twitterDescription: description,
        ...(image && {
            ogImage: image,
            twitterImage: image,
        }),
    });
    useHead({
        meta: [{ name: "title", content: title }],
    });
}
