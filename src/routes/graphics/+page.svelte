<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import { backgroundPurple} from "$lib/scripts/tweaks";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import dynamicDarkBackground from "$lib/scripts/dynamicDarkBackground";

  selectedNav(2);
  resetNavButton();
  backgroundPurple(); //needed for light text color
  dynamicDarkBackground();
</script>

<MainTitle>WebGL Projects</MainTitle>
<div class="project-cards">
  <a href="/graphics/rocket"><ProjectCard name="rocket" /></a>
  <a href="/graphics/cube"><ProjectCard name="cube" /></a>

</div>

<MainTitle>p5.js Projects</MainTitle>

<div class="project-cards">
  <a href="/graphics/bouncy"><ProjectCard name="bouncy" /></a>
  <a href="/graphics/spinning"><ProjectCard name="spinning" /></a>
  <a href="/graphics/angel"><ProjectCard name="angel" /></a>
  <a href="/graphics/fourier"><ProjectCard name="fourier" /></a>
  <a href="/graphics/pool"><ProjectCard name="pool" /></a>

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
