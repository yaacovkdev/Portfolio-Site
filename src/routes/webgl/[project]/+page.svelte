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
  <h1 class="my-4 text-2xl">{data["name"]}</h1>
  <div class="project-iframe">
    <iframe src={`/p5/${data["url_name"]}/index.html`} title={data["name"]}
    ></iframe>
  </div>
</div>

<style lang="scss">
  .project {
    flex: 1;
    // display: flexbox;

    // iframe {
    //   position: absolute;
    // }

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
      width: 100vw;

      .project-iframe {
        --scale: 0.4;
        width: 100%;
        margin: auto;
        iframe {
          width: 250%;
          height: 2050px;
          transform-origin: 0 0;
          transform: scale(var(--scale));
          margin-bottom: calc((var(--scale) - 1) * 2050px);
        }
      }

      @include tablet {
        .project-iframe iframe {
          width: 100%;
          transform: scale(1);
          margin-bottom: 0;
        }
      }
    }

    iframe {
      border: none;
    }
  }
</style>
