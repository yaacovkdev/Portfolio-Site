<script lang="ts">
  import "../app.css";
  import "$lib/style/global.scss";
  import sveltekit_icon from "$lib/images/icons/sveltelogo.png";
  import HeaderMenu from "$lib/components/HeaderMenu.svelte";
  import HeaderMobileSlide from "$lib/components/HeaderMobileSlide.svelte";
  import {clickedMobileNav} from "$lib/scripts/resetNavButton";
</script>

<header>
  <div class="header-menu content-width">
    <HeaderMenu bind:mobileNavClicked={$clickedMobileNav} />
  </div>
</header>

<main>
  <div class="header-slider">
    <HeaderMobileSlide clickedButton={$clickedMobileNav} />
  </div>
  <div id="contentWidthMain" class="content-width">
    <slot />
  </div>
</main>

<footer>
  <div class="content-width">
    <p class="text-sm">By Jacob Kochatkov with power of SvelteKit</p>
    <span class="footer-dot">·</span>
    <img src={sveltekit_icon} alt="svelte_icon" />
  </div>
</footer>

<style lang="scss">
  header {
    background-color: $background;
    z-index: 1;

    .content-width {
      width: 100%;
      height: 100%;
      max-width: $sitewidth;
    }

    @include box-shadow;
  }

  main {
    z-index: 1;

    .header-slider {
      z-index: 10;
    }

    .content-width {
      z-index: 1;
      width: 100%;

      max-width: $sitewidth;
      margin-bottom: 2rem;
    }
  }

  footer {
    bottom: 0;
    background-color: $white;
    font-size: 1rem;

    .content-width {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    p,
    .footer-dot {
      color: gray;
    }

    img {
      width: 1rem;
      position: relative;
    }

    .footer-dot {
      font-size: 2em;
      line-height: 1em;
      padding: 0.25rem;
    }
  }
</style>
