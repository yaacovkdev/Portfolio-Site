<script lang="ts">
  import "$lib/projects/projects";
  import "$lib/style/graphicsProjects.scss";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import {onMount} from "svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  export let data: {
    url_name: string;
    name: string;
  };

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

  <div class="project-instructions">
  </div>
  <div class="project-description">
  </div>
</div>
