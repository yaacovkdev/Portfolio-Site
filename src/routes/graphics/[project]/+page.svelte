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
    iframe.src = `/p5/${data["url_name"]}/index.html`;
    iframe.title = data["name"];
    document.querySelector("#graphicsProjectSection .project-iframe").appendChild(iframe);
  });

</script>

<section
  id="graphicsProjectSection"
  class={`project project--${data["url_name"]} background-purple flex-col justify-start items-center`}
>
  <h1 class="my-4 text-2xl">{data["name"]}</h1>
  <div class="project-iframe"></div>

  <!--  Description goes here-->
  <div class="project-description"></div>
</section>
