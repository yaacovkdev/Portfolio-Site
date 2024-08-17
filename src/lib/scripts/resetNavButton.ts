import {type Writable, writable} from "svelte/store";

export let clickedMobileNav: Writable<boolean> = writable(false);

export const resetNavButton = () => {
    clickedMobileNav.set(false);
}
