<script lang="ts">
  import "$lib/projects/projects";
  import selectedNav from "$lib/scripts/selectedNav";
  import { backgroundPurple, disableContentWidthMain, iframeDefault } from "$lib/scripts/tweaks";

  export let data: {
    url_name: string;
    name: string;
  };

  selectedNav(2);
  backgroundPurple();
  disableContentWidthMain();
  iframeDefault();
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
    width: 100vw;
    min-height: 100vh;

    .project-iframe {
      width: 100%;

      margin: 0 auto;

      iframe {
        margin: 0 auto;
      }
    }

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
      .project-iframe {
        --scale: 0.4;
        iframe {
          width: 250%;
          height: 2050px;
          transform-origin: 0 0;
          transform: scale(var(--scale));
          margin-bottom: calc((var(--scale) - 1) * 2050px);
        }
      }

      @media (min-width: 1060px) {
        .project-iframe iframe {
          width: 100%;
          transform: scale(1);
          margin-bottom: 0;
          height: 2050px;
        }
      }

      @media (min-width: 1750px) {
        .project-iframe iframe {
          height: 1050px;
        }
      }
    }

    &--pool {
      .project-iframe {
        --scale: 0.26;

        iframe {
          width: 1210px;
          height: 900px;
          transform-origin: 0 0;
          transform: scale(var(--scale));
          margin-bottom: calc((var(--scale) - 1) * 2050px);
        }

        @include tablet {
          --scale: 0.63;
        }

        @include desktop {
          --scale: 1;
        }
      }
    }

    iframe {
      border: none;
    }
  }
</style>
