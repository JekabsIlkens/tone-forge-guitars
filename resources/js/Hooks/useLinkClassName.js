import { usePage } from "@inertiajs/react";

export function useLinkClassName() {
    const { url } = usePage().props;

    return function getLinkClassName(href) {
        if(href === "/" && href === url) { 
            return "nav-link-active"; 
        }
        else if(href !== "/") {
            return url.includes(href) ? "nav-link-active" : "nav-link-inactive";
        }
        else {
            return "nav-link-inactive"; 
        }
    };
}
