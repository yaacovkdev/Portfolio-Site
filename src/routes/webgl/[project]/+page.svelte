<script lang="ts">
  import { onMount } from "svelte";
  import "$lib/projects/projects";

  export let data: {
    url_name: string;
    name: string;
  };

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

<div
  class={`project project--${data["url_name"]} flex flex-col justify-start items-center`}
>
  <h1 class="my-4">{data["name"]}</h1>
  <iframe src={`/p5/${data["url_name"]}/index.html`} title={data["name"]}
  ></iframe>
</div>

<style lang="scss">
  .project {
    flex: 1;

    &--bouncy {
      background-color: pink;

      iframe {
        width: 650px;
        height: 650px;
      }
    }

    &--spinning {
      background-color: black;
      iframe {
        min-width: 700px;
        width: 1300px;
        height: 750px;
      }
    }

    &--fourier {
      iframe {
        min-width: 950px;
        min-height: 1050px;
        width: 100%;
        height: fit-content;

        @media screen and (max-width: 1700px) {
          height: 2050px;
        }
      }
    }

    iframe {
      border: none;
    }
  }
</style>
