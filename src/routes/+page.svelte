<script lang="ts">
    import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
    import WelcomeTitle from "$lib/components/Titles/WelcomeTitle.svelte";
    import {resetNavButton} from "$lib/scripts/resetNavButton";
    import selectedNav from "$lib/scripts/selectedNav";
    import FlashyTitle from "$lib/components/Titles/FlashyTitle.svelte";
    import NewsProjectCard from "$lib/components/NewsProjectCard.svelte";
    import {MainProjectsInfo as projects} from "$lib/projects/mainProjects.ts";

    selectedNav(1);
    resetNavButton();
</script>

<section class="main-limit-width">
    <div class="padding-default">
        <WelcomeTitle />
    </div>

    <div class="padding-default no-mobile-padding">
        <ProfileCard />
    </div>
</section>

<section class="section-news main-limit-width">
    <div class="padding-default">
        <FlashyTitle>Upcoming Projects!</FlashyTitle>
    </div>

    <div class="padding-default">
        {#each Object.entries(projects) as [_i, project]}
        <NewsProjectCard
            projectName={project.name}
            projectDescription={project.desc}
            projectSourceHref={project.sourcelink}
        />
        {/each}
    </div>
</section>

<style lang="scss">
  .section-news {
    z-index: -1;
    &__content {
      @include tablet {
        padding: $desktop-padding;
      }
    }
  }
</style>
