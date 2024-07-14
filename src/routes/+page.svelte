<script lang="ts">
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const main = document.querySelector("main");
    main.classList.add("home-main");

    return () => {
      main.classList.remove("home-main");
    };
  });

  const message: string =
    "Something Cool will happen to this page really soon!";
  let currentMessage = "";
  let pipe: string  = "  ";
  let i = 0;
  let showPipe = true;

  const printInterval = setInterval(() => {
    currentMessage += message[i++];

    if (i >= message.length) {
      clearInterval(printInterval);
      pipe = "  ";
    }

    showPipe = Boolean(parseInt(i / 5) % 2);
    if(showPipe) pipe =  " |";
    else pipe = "  ";
  },  Math.floor(Math.random() * 100) + 75);
</script>

<WelcomeTitle />

<h2 class="text-gray-600 text-4xl">
  Hello World! <br />
  {currentMessage + pipe}
</h2>
