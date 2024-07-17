<script lang="ts">
  import ConnectButton from "$lib/components/ConnectButton.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  selectedNav(1);

  let dropCard;
  let returnCard;
</script>

<WelcomeTitle />
<ProfileCard bind:dropCard={dropCard} bind:returnCard={returnCard} />

<ConnectButton
  text="Let's Stay in Touch!"
  action={dropCard}
  revAction={returnCard}
/>
