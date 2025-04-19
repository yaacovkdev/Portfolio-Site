<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/Titles/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import {dynamicDarkBackground, genBackgroundImage, getTFromTime} from "$lib/scripts/dynamicDarkBackground";
  import Subtitle from "$lib/components/Titles/Subtitle.svelte";

  //this allows for server rendered background, so there is dynamic background color preloaded
  const initStyleGraphics: string = genBackgroundImage(getTFromTime());

  selectedNav(2);
  resetNavButton();
  dynamicDarkBackground(); //this actually makes the background change over time
</script>

<div id="graphicsPageSection" class="background-purple" style={`background-image: ${initStyleGraphics}`}>
  <div class="main-limit-width">
  <MainTitle>Graphics Projects</MainTitle>

  <section>
    <Subtitle>PIXI.js Projects</Subtitle>

    <div class="project-cards">
      <a href="/graphics/polygon"><ProjectCard name="polygon" /></a>
      <a href="/graphics/quadrature"><ProjectCard name="quadrature" /></a>
    </div>
  </section>

  <section>
    <Subtitle>p5.js Projects</Subtitle>

    <div class="project-cards">
      <a href="/graphics/pool"><ProjectCard name="pool" /></a>
      <a href="/graphics/fourier"><ProjectCard name="fourier" /></a>
      <a href="/graphics/spinning"><ProjectCard name="spinning" /></a>
      <a href="/graphics/bouncy"><ProjectCard name="bouncy" /></a>

    </div>
  </section>

    <section>
      <Subtitle>WebGL Projects</Subtitle>
      <div class="project-cards">
        <a href="/graphics/cube"><ProjectCard name="cube" /></a>
        <a href="/graphics/rocket"><ProjectCard name="rocket" /></a>
      </div>
    </section>
  </div>
</div>

<style lang="scss">
  #graphicsPageSection {
    padding: 1rem;
  }

  @keyframes goldToDark {
    0% {
      color: $secondary;
    }

    50% {
      color: $red;
    }

    100% {
      color: $secondary;
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
