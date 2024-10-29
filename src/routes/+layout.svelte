<script lang="ts">
  import "../app.css";
  import "$lib/style/global.scss";
  import sveltekit_icon from "$lib/images/icons/sveltelogo.png";
  import HeaderMenu from "$lib/components/Header/HeaderMenu.svelte";
  import HeaderMobileSlide from "$lib/components/Header/HeaderMobileSlide.svelte";
  import {clickedMobileNav} from "$lib/scripts/resetNavButton";
</script>

<header>
  <div class="header-hidden-block"></div>
  <div class="header-menu content-width">
    <HeaderMenu bind:mobileNavClicked={$clickedMobileNav} />
  </div>
</header>

<main>
  <div class="header-slider">
    <HeaderMobileSlide clickedButton={$clickedMobileNav} />
  </div>
  <div id="contentWidthMain">
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
    z-index: 1;
    background-color: $background;

    @include mobile {
      position: fixed;
      width: 100%;
    }
  }

  .dark-header {
    background-color: #780091;
  }

  main {
    @include mobile {
      margin-top: $mobile-header-height;
    }

    z-index: 0;

    .header-slider {
      z-index: 10;
    }
  }

  footer {
    background-color: $white;
    font-size: 1rem;

    z-index: -1;

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
