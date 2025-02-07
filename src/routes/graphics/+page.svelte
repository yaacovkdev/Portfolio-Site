<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/Titles/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import dynamicDarkBackground from "$lib/scripts/dynamicDarkBackground";
  import Subtitle from "$lib/components/Titles/Subtitle.svelte";

  selectedNav(2);
  resetNavButton();
  dynamicDarkBackground();
</script>

<div id="graphicsPageSection" class="background-purple padding-default">
  <MainTitle>Graphics Projects</MainTitle>

  <Subtitle>WebGL Projects</Subtitle>
    <section class="project-cards">
      <a href="/graphics/rocket"><ProjectCard name="rocket" /></a>
      <a href="/graphics/cube"><ProjectCard name="cube" /></a>
    </section>

  <Subtitle>p5.js Projects</Subtitle>

  <section class="project-cards">
    <a href="/graphics/bouncy"><ProjectCard name="bouncy" /></a>
    <a href="/graphics/spinning"><ProjectCard name="spinning" /></a>
    <a href="/graphics/angel"><ProjectCard name="angel" /></a>
    <a href="/graphics/fourier"><ProjectCard name="fourier" /></a>
    <a href="/graphics/pool"><ProjectCard name="pool" /></a>

  </section>

</div>

<style lang="scss">
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
