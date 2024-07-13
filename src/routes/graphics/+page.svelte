<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/MainTitle.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const main = document.querySelector("main");
    main.classList.add("background-purple");

    return () => {
      main.classList.remove("background-purple");
    };
  });
</script>

<MainTitle title="p5.js Projects" />

<div class="project-cards">
  <a href="/graphics/bouncy"><ProjectCard name="bouncy" /></a>
  <a href="/graphics/spinning"><ProjectCard name="spinning" /></a>
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
    }
  }
</style>
