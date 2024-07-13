<script lang="ts">
  import selectedNav from "$lib/scripts/selectedNav";
  import { iframeDefault, disableContentWidthMain} from "$lib/scripts/tweaks";

  selectedNav(3);
  disableContentWidthMain();
  iframeDefault();
  
</script>

<div class="project">
  <h3 class="text-lg">
    Also Avalible on <a href="https://boolean.yaacov.site"
      >boolean.yaacov.site</a
    >
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
