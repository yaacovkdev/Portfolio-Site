<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    // Select the element with id 'my-element' and add a class 'new-class' to it
    const main = document.querySelector("main");

    if (main) {
      main.classList.add("iframe-default");
    }

    return () => {
      main?.classList.remove("iframe-default");
    };
  });
</script>

<div class="project">
  <h3>
    Also Avalible on <a href="https://boolean.yaacov.site">boolean.yaacov.site</a>
  </h3>
  <iframe src="https://boolean.yaacov.site" title="Boolean Calculator"></iframe>
</div>

<style lang="scss">

  h3 {
    color: black;
  }
  
  .project {
    background-color: $white;
  }

  iframe {
    border: none;
    background-color: $white;
    width: 90%;
    height: 90vh;
  }
</style>
