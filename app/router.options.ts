import type { RouterConfig } from "@nuxt/schema";

function waitForElement(selector: string, timeout = 3000): Promise<Element | null> {
    return new Promise((resolve) => {
        const interval = 50;
        let elapsed = 0;
        const check = () => {
            const el = document.querySelector(selector);
            if (el) return resolve(el);
            elapsed += interval;
            if (elapsed >= timeout) return resolve(null);
            setTimeout(check, interval);
        };
        check();
    });
}

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            const el = await waitForElement(to.hash);
            if (el) {
                return {
                    el: to.hash,
                    behavior: "smooth", // or 'auto'
                    top: 108,
                    left: 0,
                };
            }
            // fallback: scroll to top if element never appears
            return { left: 0, top: 0 };
        }
        return { left: 0, top: 0 };
    },
};
