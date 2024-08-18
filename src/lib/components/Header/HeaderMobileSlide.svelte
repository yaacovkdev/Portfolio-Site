<script lang="ts">
    import HeaderNavLinks from "$lib/components/Header/HeaderNavLinks.svelte";
    import {onMount} from "svelte";

    export let clickedButton: boolean;
    let headerMobileSlider: Element;
    let animationTimeout: number;

    $: if(headerMobileSlider) {
        if(clickedButton) {
            headerMobileSlider.classList.remove("hidden");
            headerMobileSlider.classList.add("slide-down");
            clearTimeout(animationTimeout);
            animationTimeout = setTimeout(()=>{
                headerMobileSlider.classList.remove("slide-down");
            }, 400);
        }
        else {
            headerMobileSlider.classList.add("hidden");
            headerMobileSlider.classList.remove("slide-down");
            clearTimeout(animationTimeout);
        }
    }

    onMount(() => {
        headerMobileSlider = document.querySelector(".header-mobile-slider");
        headerMobileSlider.classList.remove("slide-down");
    })

</script>

<nav class="header-mobile-slider slide-down hidden flex justify-center items-center flex-col  md:hidden">
    <HeaderNavLinks />
</nav>

<style lang="scss">
  @keyframes slide-d {
    from {top: calc(-100vh + $mobile-header-height);}
    to {top: $mobile-header-height;}
  }

  .slide-down {
    animation: slide-d 400ms forwards;
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