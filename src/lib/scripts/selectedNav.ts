/*
The sole purpose of this script is to have graphics gold effect be consistent
*/
import { onMount } from "svelte";

const selectedNav = (n: number): void => {
  onMount(() => {
    const link = document.querySelectorAll(`.nav-link--${n}`);

    for(let i = 0; i < link.length; i++) {
      link[i].classList.add("shine");
    }


    return (() => {
      for(let i = 0; i < link.length; i++) {
        link[i].classList.remove("shine");
      }
    })
  });
}

export default selectedNav;