<script lang="ts">
    import HeaderNavLinks from "$lib/components/Header/HeaderNavLinks.svelte";
    import {onMount} from "svelte";

    let props = $props();
    let clickedButton = $derived(props.clickedButton);
    let headerMobileSlider: Element;
    let animationTimeout: number;

    $effect(() => {
        let clicked = clickedButton;

        if(!headerMobileSlider) {
            return;
        }

        if (clicked) {
            headerMobileSlider.classList.remove("hidden");
            headerMobileSlider.classList.add("slide-down");
            clearTimeout(animationTimeout);
            animationTimeout = setTimeout(() => {
                headerMobileSlider.classList.remove("slide-down");
            }, 400);
        } else {
            headerMobileSlider.classList.add("hidden");
            headerMobileSlider.classList.remove("slide-down");
            clearTimeout(animationTimeout);
        }
    });

    onMount(() => {
        headerMobileSlider = document.querySelector(".header-mobile-slider");
        headerMobileSlider.classList.remove("slide-down");

        return(() => {
            headerMobileSlider = null;
        });
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
    left: 0;
  }
</style>