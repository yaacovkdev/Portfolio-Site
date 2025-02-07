<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/Titles/WelcomeTitle.svelte";
  import {resetNavButton} from "$lib/scripts/resetNavButton";

  import selectedNav from "$lib/scripts/selectedNav";

  selectedNav(1);
  resetNavButton();

</script>

<section class="limit-width">
    <div class="padding-default">
        <WelcomeTitle />
    </div>

    <div class="padding-default no-mobile-padding">
        <ProfileCard />
    </div>
</section>

<style lang="scss">
  .limit-width {
    z-index: -1;
    @include main-outer-div;
  }

  .background-news {
    background-color: $lightgreen;
  }
</style>
