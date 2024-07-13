import { onMount } from "svelte";

export const backgroundPurple = () => {
  onMount(() => {
    // Select the element with id 'my-element' and add a class 'new-class' to it
    const main = document.querySelector("main");

    main.classList.add("background-purple");

    return () => {
      main.classList.remove("background-purple");
    };
  });
};
