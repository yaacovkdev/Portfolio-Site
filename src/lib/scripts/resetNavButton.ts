import {type Writable, writable} from "svelte/store";
import {onMount} from "svelte";

export let clickedMobileNav: Writable<boolean> = writable(false);

export const resetNavButton = () => {
    clickedMobileNav.set(false);

    onMount(() => {
        const bodyElement:HTMLElement = document.querySelector("body");
        const dashes: NodeListOf<HTMLElement> = document.querySelectorAll(".hamburger-dash");

        //safest way I can think of regarding dealing with client shenanigans
        return(() => {
                bodyElement.classList.remove("overflow-hidden");

                for (let i = 0; i< 3; i++){
                    dashes[i].classList.add("paused");
                }

                dashes[0].classList.remove("rotate-down");
                dashes[1].classList.remove("slide-left");
                dashes[2].classList.remove("rotate-up");
            }
        );

    })
}
