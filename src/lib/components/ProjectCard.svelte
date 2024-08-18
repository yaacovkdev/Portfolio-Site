<script lang="ts">
  export let name: string;

  import { ProjectsInfo } from "$lib/projects/projects";
  import icon_desktop from "$lib/images/icons/icon-desktop.svg";
  import icon_mobile from "$lib/images/icons/icon-mobile.svg";
  import { onMount } from "svelte";

  const full_name: string = ProjectsInfo[name].name;
  const description: string = ProjectsInfo[name].desc;
  const main_image: any = ProjectsInfo[name].image;

  onMount(() => {
    const mobileIcon = document.querySelector(`#${name} .img--mobile`);
    if(ProjectsInfo[name].mobileIcon) mobileIcon.style.display = "block";

  });
</script>

<div id={`${name}`} class="project-card w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] xl:w-[30rem] xl:h-[30rem]">
  <div class="project-card__picture">
    <img src={main_image} alt="img" />
  </div>
  <div class="project-card__info flex justify-between">
    <h3 class="font-mono text-sm md:text-lg xl:text-2xl">{full_name}</h3>

    <div class="project-card__platform">
      <img class="img img--mobile" src={icon_mobile} alt="mobile_icon" />
      <img class="img img--desktop" src={icon_desktop} alt="desktop_icon" />
    </div>
  </div>
</div>

<style lang="scss">
  .project-card {
    background-color: $purple;

    &__picture {
      height: 83%;
      img {
        margin: auto;
        padding: 1rem;
        border-radius: 1.5rem;
        width: 85%;
        height: auto;
      }
    }

    @keyframes zoom {
      from {
        scale: 1;
      }
      to {
        scale: 1.05;
      }
    }

    &:hover {
      box-shadow: 0 0 3px 3px rgb(0 0 0);
      animation: 0.25s zoom forwards ease-in-out;
    }

    &__info {
      width: 85%;
      margin: auto;
      padding: 0 1rem;

      h3 {
        flex: 4;
        text-align: start;
        color: $white;
      }
    }

    &__platform {
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      flex-wrap: wrap;
      .img {
        width: 2.5rem;
        &--mobile {
          display: none;
        }
      }
    }
  }

  .icon-colors {
    fill: hsl(from color 1 2 3);
  }
</style>
