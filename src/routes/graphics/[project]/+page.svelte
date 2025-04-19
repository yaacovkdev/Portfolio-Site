<script lang="ts">
  import "$lib/projects/graphicsProjects";
  import "$lib/style/graphicsProjects.scss";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import {onMount} from "svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import type { LoadResult } from "./$types";

  let { data }: LoadResult = $props();

  selectedNav(2);
  resetNavButton();

  onMount(() => {
    let iframe = document.createElement("iframe");
    iframe.src = `/sites/${data["url_name"]}/index.html`;
    iframe.title = data["name"];
    iframe.sandbox = "allow-scripts allow-downloads allow-same-origin";
    document.querySelector("#graphicsProjectSection .project-iframe").appendChild(iframe);
  });

</script>

<div
        id="graphicsProjectSection"
        class={`project project--${data["url_name"]} background-purple flex-col justify-start items-center`}
>
  <h1 class="my-4 text-2xl padding-default">{data["name"]}</h1>
  <div class="project-iframe"></div>

  <!--  Description goes here-->
  {#if data["instructions"].length !== 0 }
    <div class="project-instructions padding-default md:mb-20 main-limit-width">
      <h2>Instructions</h2>

      {@html data["instructions"]}
    </div>
  {/if}

  {#if data["description"].length !== 0}
  <div class="project-description padding-default main-limit-width">
    <h2>Description</h2>

    {@html data["description"]}
  </div>
    {/if}
</div>
