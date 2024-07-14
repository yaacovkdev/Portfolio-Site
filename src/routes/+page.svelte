<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard.svelte";
import WelcomeTitle from "$lib/components/WelcomeTitle.svelte";
  import selectedNav from "$lib/scripts/selectedNav";

  selectedNav(1);
</script>

<WelcomeTitle />
<ProfileCard />
