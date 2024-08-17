<script lang="ts">
    import HeaderNavLinks from "$lib/components/HeaderNavLinks.svelte";
    import {onMount} from "svelte";

    export let clickedButton;
    let headerMobileSlider: Element;

    $: if(headerMobileSlider) {
        console.log(clickedButton);
        if(clickedButton) {
            headerMobileSlider.classList.remove("hidden");
            headerMobileSlider.classList.add("slide-down");

        }
        else {
            headerMobileSlider.classList.add("hidden");
            headerMobileSlider.classList.remove("slide-down");
        }
    }

    onMount(() => {
        headerMobileSlider = document.querySelector(".header-mobile-slider");
        headerMobileSlider.classList.remove("slide-down");
    })

</script>

<div class="header-mobile-slider slide-down hidden flex justify-center items-center flex-col  md:hidden">
    <HeaderNavLinks />
</div>

<style lang="scss">
  @keyframes slide-d {
    from {top: calc(-100vh + $mobile-header-height);}
    to {top: $mobile-header-height;}
  }

  .slide-down {
    animation: slide-d 1s forwards;
  }

  .header-mobile-slider {
    position: fixed;
    width: 100vw;
    height: calc(100vh - $mobile-header-height);
    background-color: $background;
    top: $mobile-header-height;
    right: 0;
  }
</style>