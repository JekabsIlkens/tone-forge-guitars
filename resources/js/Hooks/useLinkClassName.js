import { usePage } from "@inertiajs/react";

export function useLinkClassName() {
    const { url } = usePage().props;

    return function getLinkClassName(href) {
        return url === href ? "nav-link-active" : "nav-link-inactive";
    };
}
