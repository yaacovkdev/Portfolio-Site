<script lang="ts">
  import "$lib/projects/projects";
  import "$lib/style/graphicsProjects.scss";
  import selectedNav from "$lib/scripts/selectedNav";
  import {
    backgroundPurple,
    disableContentWidthMain,
    iframeDefault,
  } from "$lib/scripts/tweaks";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import {onMount} from "svelte";

  export let data: {
    url_name: string;
    name: string;
  };

  selectedNav(2);
  resetNavButton();
  backgroundPurple();
  disableContentWidthMain();
  iframeDefault();

  onMount(() => {
    let iframe = document.createElement("iframe");
    iframe.src = `/p5/${data["url_name"]}/index.html`;
    iframe.title = data["name"];
    document.querySelector("#graphicsProjectRoot .project-iframe").appendChild(iframe);
  });

</script>

<div
  id="graphicsProjectRoot"
  class={`project project--${data["url_name"]} flex flex-col justify-start items-center`}
>
  <h1 class="my-4 text-2xl">{data["name"]}</h1>
  <div class="project-iframe"></div>

  <!--  Description goes here-->
  <div class="project-description"></div>
</div>
