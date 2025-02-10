<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/Titles/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import {dynamicDarkBackground, genBackgroundImage, getTFromTime} from "$lib/scripts/dynamicDarkBackground";
  import Subtitle from "$lib/components/Titles/Subtitle.svelte";

  let initStyleGraphics: string = genBackgroundImage(getTFromTime());

  selectedNav(2);
  resetNavButton();
  dynamicDarkBackground();
</script>

<div id="graphicsPageSection" class="background-purple" style={`background-image: ${initStyleGraphics}`}>
  <div class="main-limit-width">
  <MainTitle>Graphics Projects</MainTitle>
    <Subtitle class="m-0"><span class="project-announce__text">Project Descriptions Coming Soon!!!</span></Subtitle>

  <section>
    <Subtitle>WebGL Projects</Subtitle>
    <div class="project-cards">
      <a href="/graphics/rocket"><ProjectCard name="rocket" /></a>
      <a href="/graphics/cube"><ProjectCard name="cube" /></a>
    </div>
  </section>

  <section>
    <Subtitle>p5.js Projects</Subtitle>

    <div class="project-cards">
      <a href="/graphics/bouncy"><ProjectCard name="bouncy" /></a>
      <a href="/graphics/spinning"><ProjectCard name="spinning" /></a>
      <a href="/graphics/angel"><ProjectCard name="angel" /></a>
      <a href="/graphics/fourier"><ProjectCard name="fourier" /></a>
      <a href="/graphics/pool"><ProjectCard name="pool" /></a>

    </div>
  </section>

  <section>
    <Subtitle>PIXI.js Projects</Subtitle>

    <div class="project-cards">
      <a href="/graphics/quadrature"><ProjectCard name="quadrature" /></a>
      <a href="/graphics/polygon"><ProjectCard name="polygon" /></a>

    </div>
  </section>
  </div>
</div>

<style lang="scss">
  #graphicsPageSection {
    padding: 1rem;
  }

  .project-announce__text {
    text-decoration: underline;
    animation: 7s goldToDark ease-in-out infinite;
  }

  @keyframes goldToDark {
    0% {
      color: $gold;
    }

    50% {
      color: $pirategold;
    }

    100% {
      color: $gold;
    }
  }

  .project-cards {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    a {
      width: fit-content;
      color: $white;
      margin: 2rem 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
