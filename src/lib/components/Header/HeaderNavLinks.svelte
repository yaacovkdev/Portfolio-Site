<script lang="ts">
    import { page } from "$app/stores";
    import {shineNav} from "$lib/scripts/selectedNav";
    const root_paths: String[] = ['/', '/graphics', '/fullstack'];

  const firstpath = $page.url.pathname.match(/\/[^\/]*/gm)[0];

  let localShine:Number = root_paths.indexOf(firstpath);

  $: {
      localShine = $shineNav;
  }

</script>

<!--Needs fixing-->
{#if localShine == 1}
    <a class="nav-link nav-link--1 shine" href="/">Home</a>
{:else}
    <a class="nav-link nav-link--1" href="/">Home</a>
{/if}

{#if localShine == 2}
    <a class="nav-link nav-link--2 shine" href="/graphics">Graphics</a>
{:else}
    <a class="nav-link nav-link--2" href="/graphics">Graphics</a>
{/if}

{#if localShine == 3}
    <a class="nav-link nav-link--3 shine" href="/fullstack">Boolean Calculator</a>
{:else}
    <a class="nav-link nav-link--3" href="/fullstack">Boolean Calculator</a>
{/if}

<style lang="scss">
  a {
    @include shine-effect;
    position: relative;

    @apply text-3xl;
    margin: 1rem 0;

    @include tablet {
      @apply text-xl;
      margin: 0 1.5rem;
      display: inline-block;
    }
  }
</style>
