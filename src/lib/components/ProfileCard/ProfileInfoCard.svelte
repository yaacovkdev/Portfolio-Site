<script lang="ts">
  export let title: string;
  export let content: string;
  export let icon: string;

  import bachelors_icon from "$lib/images/icons/bachelors.svg";
  import work_icon from "$lib/images/icons/work.svg";
  import skills_icon from "$lib/images/icons/skills.svg";
  import language_icon from "$lib/images/icons/language.svg";
  import project_icon from "$lib/images/icons/project.svg";

  const icons = {
    bachelors: bachelors_icon,
    work: work_icon,
    skills: skills_icon,
    language: language_icon,
    project: project_icon,
  };
</script>

<div class="subcard">
  <img class="icon" src={icons[icon]} alt="icon" />
  <div class="subcard__content">
    <h3 class="text-lg font-semibold">{title}</h3>
    <p class="text-base">{@html content}</p>
  </div>
</div>

<style lang="scss">
  .subcard {
    position: relative;
    width: 18rem;
    padding: 1rem;
    padding-top: 1.25rem;
    border: 2px solid $gray;
    border-radius: 1rem;
    text-align: start;
    background-color: $background;

    .icon {
      position: absolute;
      top: -1.75rem;
      background-color: $background;
      
      height: 3rem;
      object-fit: fill;
      
    }
  }
</style>
