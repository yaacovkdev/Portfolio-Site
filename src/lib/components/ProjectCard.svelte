<script lang="ts">
  export let name: string;

  import { ProjectsInfo } from "$lib/projects/projects";
  import icon_desktop from "$lib/images/icons/icon-desktop.svg";
  import icon_mobile from "$lib/images/icons/icon-mobile.svg";

  const full_name: string = ProjectsInfo[name].name;
  const description: string = ProjectsInfo[name].desc;
  const main_image: any = ProjectsInfo[name].image;
</script>

<div class="project-card">
  <div class="project-card__picture">
    <img src={main_image} alt="img" />
  </div>
  <div class="project-card__info flex justify-between">
    <h3 class="font-mono text-1xl">{full_name}</h3>

    <div class="project-card__platform">
      {@html ProjectsInfo[name].mobileIcon ? `<img src=${icon_mobile} alt='mobile_icon' />` : ""}
      <img src={icon_desktop} alt="desktop_icon" />
    </div>
  </div>
</div>

<style lang="scss">
  .project-card {
    @include interactive-radius;
    
    width: 20rem;
    height: 20rem;
    background-color: $purple;

    &__picture {
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
        flex: 5;
        text-align: start;
      }
    }

    &__platform {
      flex: 1;
      img {
        height: 3rem;
        display: inline;
        fill: red;
        width: fit-content;
      }
    }
  }

  .icon-colors {
    fill: hsl(from color 1 2 3);
  }
</style>
