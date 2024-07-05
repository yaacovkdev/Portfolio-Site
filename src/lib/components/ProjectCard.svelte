<script lang="ts">
  export let name: string;
  import { ProjectsInfo } from "$lib/projects/projects";

  const full_name: string = ProjectsInfo[name].name;
  const description: string = ProjectsInfo[name].desc;
</script>

<div class="project-card">
  <div class="project-card__picture">
    <img src={`src/lib/images/preview/preview_${name}.jpg`} alt="img" />
  </div>
  <div class="project-card__info">
    <h3 class="font-mono">{full_name}</h3>
    <p>{description}</p>
  </div>
  <div class="project-card__platform"></div>
</div>

<style lang="scss">
  .project-card {
    width: 30rem;
    height: 30rem;
    background-color: $purple;
    box-shadow: 0 0 0.5rem 0.25rem rgb(0 0 0 );

    &__picture {
      
      img {
        margin:auto;
        padding: 1rem;
        border-radius: 2rem;
        width: 80%;
        height: auto;
      }
    }
  }
</style>
