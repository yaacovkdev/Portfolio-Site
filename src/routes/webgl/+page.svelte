<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import MainTitle from "$lib/components/MainTitle.svelte";
</script>

<MainTitle title="p5.js Projects" />

<div class="project-cards">
  <a href="/webgl/bouncy"><ProjectCard name="bouncy"/></a>
  <a href="/webgl/spinning"><ProjectCard name="spinning"/></a>
  <a href="/webgl/fourier"><ProjectCard name="fourier"/></a>
  <a href="/webgl/pool"><ProjectCard name="pool"/></a>
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
