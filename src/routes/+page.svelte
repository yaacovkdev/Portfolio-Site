<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/Titles/WelcomeTitle.svelte";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import selectedNav from "$lib/scripts/selectedNav";
  import NewsBlock from "$lib/components/News/NewsBlock.svelte";
  import HeadingColorTitle from "$lib/components/Titles/HeadingColorTitle.svelte";

  selectedNav(1);
  resetNavButton();
</script>

<section class="main-limit-width">
    <div class="padding-default">
        <WelcomeTitle />
    </div>

    <div class="padding-default no-padding-mobile">
        <ProfileCard />
    </div>
</section>

<!--<section class="section-news main-limit-width">
    <div class="section-news__content">
        <HeadingColorTitle color="teal">News</HeadingColorTitle>
    </div>
    <div class="padding-default">
        <NewsBlock title="Recent Contract" />
    </div>
</section>-->

<style lang="scss">
  @include mobile {
    .no-padding-mobile {
      padding: 0;
    }
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
