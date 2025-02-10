<script lang="ts">
    import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
    import WelcomeTitle from "$lib/components/Titles/WelcomeTitle.svelte";
    import {resetNavButton} from "$lib/scripts/resetNavButton";
    import selectedNav from "$lib/scripts/selectedNav";

    selectedNav(1);
    resetNavButton();
</script>

<section class="main-limit-width">
    <div class="padding-default">
        <WelcomeTitle />
    </div>

    <div class="padding-default">
        <ProfileCard />
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
