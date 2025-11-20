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

<div class="main-content-sections main-limit-width">
    <section>
        <div class="profile-card-section padding-default no-mobile-padding">
            <ProfileCard />
        </div>
    </section>

    <section class="section-news">
        <div class="padding-default">
            <FlashyTitle>Developed Projects!</FlashyTitle>
        </div>

        <div class="padding-default">
            {#each Object.entries(projects) as [_i, project]}
            <NewsProjectCard
                projectName={project.name}
                projectDescription={project.desc}
                projectSourceHref={project.sourcelink}
                projectLiveHref={project.livelink}
                datastatus={project.datastatus}
            />
            {/each}
        </div>
    </section>
</div>

<style lang="scss">
  .profile-card-section {
    margin-top: 6rem;
  }

  .section-news {
    z-index: -1;
    &__content {
      @include tablet {
        padding: $desktop-padding;
      }
    }
  }
</style>
