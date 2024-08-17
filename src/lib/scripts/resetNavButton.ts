import {type Writable, writable} from "svelte/store";
import {onMount} from "svelte";

export let clickedMobileNav: Writable<boolean> = writable(false);

export const resetNavButton = () => {
    clickedMobileNav.set(false);

    onMount(() => {
        const bodyElement:HTMLElement = document.querySelector("body");

        //safest way I can think of regarding dealing with client shenanigans
        return(() => {
                bodyElement.classList.remove("overflow-hidden");
            }
        );

    })
}
