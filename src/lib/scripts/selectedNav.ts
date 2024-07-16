/*
The sole purpose of this script is to have graphics gold effect be consistent
*/
import { onMount } from "svelte";

const selectedNav = (n: number): void => {
  onMount(() => {
    const link = document.querySelector(`#nav-${n}`);
    link.classList.add("gold");

    return (() => {
      link.classList.remove("gold");
    })
  });
}

export default selectedNav;