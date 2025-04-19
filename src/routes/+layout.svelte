<script lang="ts">
  import "../app.css";
  import "$lib/style/global.scss";
  import sveltekit_icon from "$lib/images/icons/sveltelogored.png";
  import HeaderMenu from "$lib/components/Header/HeaderMenu.svelte";
  import HeaderMobileSlide from "$lib/components/Header/HeaderMobileSlide.svelte";
  import {clickedMobileNav} from "$lib/scripts/resetNavButton";
  import {onMount} from "svelte";

  //when page fully loads
  onMount(() => {
    document.querySelector("#siteLogo").classList.add("sitelogoanimate");
  });
</script>

<header>
  <div class="header-hidden-block"></div>
  <div class="header-menu limit-width">
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
  <div class="limit-width">
    <p class="text-sm">Built by Jacob Kochatkov</p>
    <span class="footer-dot">·</span>
    <img src={sveltekit_icon} alt="svelte_icon" />
  </div>
</footer>

<style lang="scss">
  main, header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    z-index: 3;
    background: $background;
    border-bottom: 2px $secondary solid;
    padding: 0 $mobile-padding;
    height: $mobile-header-height;

    @include box-shadow;

    .limit-width {
      max-width: $site-width;
      width: 100%;
      height: 100%;
    }

    @include mobile {
      position: fixed;
      width: 100%;
    }
  }

  main {
    background: $background;
    z-index: 2;

    //make all outer children centered in main
    #contentWidthMain {
      width: 100%;
    }

    .header-slider {
      z-index: 10;
    }

    @include mobile {
      margin-top: $mobile-header-height;
    }
  }

  footer {
    background-color: $white;
    font-size: 1rem;
    margin-top: auto;
    z-index: 1;

    .limit-width {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    p,
    .footer-dot {
      color: $black;
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
