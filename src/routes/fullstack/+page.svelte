<script lang="ts">
  import MainTitle from "$lib/components/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import { disableContentWidthMain } from "$lib/scripts/tweaks";
  import { blueLink } from "$lib/scripts/blueLink";

  selectedNav(3);
  disableContentWidthMain();
</script>

<div class="project">
  <MainTitle title="Symbolic Boolean Calcuator" />
  <h3 class="text-lg">
    {@html `Also Avalible on 
    ${blueLink("https://boolean.yaacov.site", "boolean.yaacov.site", true)}`}
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
