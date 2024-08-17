<script lang="ts">
  import ConnectButton from "$lib/components/ConnectButton.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";
  import {resetNavButton} from "$lib/scripts/resetNavButton";

  selectedNav(1);
  resetNavButton();

  let dropCard;
  let returnCard;
</script>

<WelcomeTitle />
<ProfileCard bind:dropCard={dropCard} bind:returnCard={returnCard} />

<ConnectButton
  action={dropCard}
  revAction={returnCard}
/>
