<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";
  import MainTitle from "$lib/components/MainTitle.svelte";

  selectedNav(1);
  resetNavButton();
</script>

<WelcomeTitle />

<ProfileCard />

<!--<MainTitle>-->
<!--    News-->
<!--</MainTitle>-->
