<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import MainTitle from "$lib/components/MainTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  selectedNav(1);
  resetNavButton();

</script>

<div class="limit-width padding-default">
    <WelcomeTitle />
</div>

<div class="limit-width padding-default">
    <ProfileCard />
</div>

<!--<div class="content-width background-news">-->
<!--    <MainTitle>-->
<!--        News-->
<!--    </MainTitle>-->
<!--</div>-->

<style lang="scss">
  .limit-width {
    z-index: -1;
    @include main-outer-div;
  }

  .background-news {
    background-color: $lightgreen;
  }
</style>
