<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import MainTitle from "$lib/components/MainTitle.svelte";

  selectedNav(1);
  resetNavButton();
</script>

<div class="content-width">
    <WelcomeTitle />
</div>

<div class="content-width">
    <ProfileCard />
</div>

<!--<div class="content-width background-news">-->
<!--    <MainTitle>-->
<!--        News-->
<!--    </MainTitle>-->
<!--</div>-->


<style lang="scss">
  .content-width {
    z-index: -1;
    @include main-outer-div;
  }

  .background-news {
    background-color: $lightgreen;
  }
</style>
