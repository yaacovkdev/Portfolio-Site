<script lang="ts">
  import ConnectButton from "$lib/components/ConnectButton.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  selectedNav(1);

  let playCard;
</script>

<WelcomeTitle />
<ProfileCard bind:dropCard={playCard} />

<ConnectButton
  id="profileButton"
  text="Let's Stay in Touch!"
  action={playCard}
/>
