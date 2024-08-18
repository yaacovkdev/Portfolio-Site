import { onMount } from "svelte";

export const backgroundPurple = () => {
  onMount(() => {
    // Select the element with id 'my-element' and add a class 'new-class' to it
    const svelteBody: HTMLElement = document.querySelector("#svelteBody");

    svelteBody.classList.add("background-purple");

    return () => {
      svelteBody.classList.remove("background-purple");
    };
  });
};

export const disableContentWidthMain = () => {
  onMount(() => {
    const contentWidth = document.querySelector("#contentWidthMain");

    contentWidth.classList.remove("content-width");

    return () => {
      contentWidth.classList.add("content-width");
    };
  });
};

export const iframeDefault = () => {
  onMount(() => {
    // Select the element with id 'my-element' and add a class 'new-class' to it
    const main = document.querySelector("main");

    main.classList.add("iframe-default");

    return () => {
      main.classList.remove("iframe-default");
    };
  });
};
