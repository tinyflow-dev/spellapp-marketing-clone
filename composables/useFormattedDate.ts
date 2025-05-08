export function useFormattedDate() {
    const formatDate = (dateString: string, locale = "en-US") => {
        if (!dateString) return "";

        const date = new Date(dateString);
        return date.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return {
        formatDate,
    };
}
