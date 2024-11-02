<script lang="ts">
  import MainTitle from "$lib/components/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import BlueLink from "$lib/components/BlueLink.svelte";

  selectedNav(3);
  resetNavButton();
</script>

<div class="boolean-project limit-width">
  <MainTitle>
    Symbolic Boolean Calculator
  </MainTitle>
  <h3 class="padding-default text-lg">
    Also Available on <BlueLink href="https://boolean.yaacov.site" end={true}>boolean.yaacov.site</BlueLink>
  </h3>
  <iframe src="https://boolean.yaacov.site" title="Boolean Calculator"></iframe>
</div>

<style lang="scss">
  h3 {
    color: black;
  }

  .boolean-project {
    background-color: $background;
  }

  iframe {
    border: none;
    background-color: $background;
    width: 100%;
    height: 100vh;
  }
</style>
