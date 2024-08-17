<script lang="ts">
    import HeaderNavLinks from "$lib/components/HeaderNavLinks.svelte";
    import {onMount} from "svelte";

    export let mobileNavClicked: boolean = false;
    let bodyElement;

    const navButton = () => {
        //Why Didn't I just make header position fixed
        //Because I want to feel special :)
        if(bodyElement) {
            mobileNavClicked = !mobileNavClicked;
            if (mobileNavClicked) {
                window.scrollTo(0,0);
                bodyElement.classList.add("overflow-hidden");
            } else {
                bodyElement.classList.remove("overflow-hidden");
            }
        }
    }

    onMount(() => {
        bodyElement = document.querySelector("body");
    });
</script>

<!--Add Animation Later-->
<div class="header-menu relative flex justify-start items-center w-full h-full md:justify-center">
    <button id="button" class="relative w-18 h-18 md:hidden" on:click={navButton}>
        <div class="relative flex overflow-hidden items-center justify-center w-[4rem] h-[4rem]">
            <div class="flex flex-col justify-between w-8 h-[1.5rem] overflow-hidden">
                <div class="hamburger-dash hamburger-dash--1 h-[2px] w-8 rounded "></div>
                <div class="hamburger-dash hamburger-dash--2 h-[2px] w-8 rounded"></div>
                <div class="hamburger-dash hamburger-dash--3 h-[2px] w-8 rounded"></div>
            </div>
        </div>
    </button>

    <nav class="flex-wrap w-auto hidden md:flex">
        <HeaderNavLinks />
    </nav>
</div>

<style lang="scss">
  .hamburger-dash {
    background: $purple;
  }
</style>