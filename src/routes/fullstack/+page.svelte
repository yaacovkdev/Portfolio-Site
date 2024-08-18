<script lang="ts">
  import MainTitle from "$lib/components/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import { disableContentWidthMain } from "$lib/scripts/tweaks";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import BlueLink from "$lib/components/BlueLink.svelte";

  selectedNav(3);
  resetNavButton();
  disableContentWidthMain();
</script>

<div class="project">
  <MainTitle>
    Symbolic Boolean Calculator
  </MainTitle>
  <h3 class="text-lg">
    Also Available on <BlueLink href="https://boolean.yaacov.site" end={true}>boolean.yaacov.site</BlueLink>
  </h3>
  <iframe src="https://boolean.yaacov.site" title="Boolean Calculator"></iframe>
</div>

<style lang="scss">
  h3 {
    color: black;
  }

  .project {
    background-color: $background;
  }

  iframe {
    border: none;
    background-color: $background;
    width: 100vw;
    height: 100vh;
  }
</style>
