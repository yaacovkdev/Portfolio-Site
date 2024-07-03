<script lang="ts">
  export let name : string;
  import {ProjectsInfo} from "$lib/projects/projects";

  const full_name : string = ProjectsInfo[name].name;
  const description : string = ProjectsInfo[name].desc;


</script>

<div class="project-card">
  <div class="project-card__picture">
    <img alt="img" />
  </div>
  <div class="project-card__info">
    <h3>{full_name}</h3>
    <p>{description}</p>
  </div>
  <div class="project-card__platform"></div>
</div>

<style lang="scss">
  .project-card {
    width: 30rem;
    height: 30rem;
    background-color: $purple;
    border-radius: 1rem;
  }
</style>
