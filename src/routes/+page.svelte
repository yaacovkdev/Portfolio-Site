<script lang="ts">
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const main = document.querySelector("main");
    main.classList.add("home-main");

    return (() => {
      main.classList.remove("home-main");
    });
  });
</script>

<WelcomeTitle />