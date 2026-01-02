<script lang="ts">
    import HeaderNavLinks from "$lib/components/Header/HeaderNavLinks.svelte";
    import sitelogo from "$lib/images/logo/sitelogo.png";
    import {onMount} from "svelte";

    let {mobileNavClicked = $bindable()} = $props();
    let bodyElement: HTMLElement;
    let dashes: NodeListOf<HTMLElement>;

    const navButton = () => {
        if(bodyElement) {
            mobileNavClicked = !mobileNavClicked;
            if (mobileNavClicked) {
                bodyElement.classList.add("overflow-hidden");

                for (let i = 0; i< 3; i++){
                    dashes[i].classList.remove("paused");
                }

                dashes[0].classList.add("rotate-down");
                dashes[1].classList.add("slide-left");
                dashes[2].classList.add("rotate-up");

            } else {
                bodyElement.classList.remove("overflow-hidden");

                for (let i = 0; i< 3; i++){
                    dashes[i].classList.add("paused");
                }

                dashes[0].classList.remove("rotate-down");
                dashes[1].classList.remove("slide-left");
                dashes[2].classList.remove("rotate-up");
            }
        }
    }

    onMount(() => {
        bodyElement = document.querySelector("body");
        dashes = document.querySelectorAll(".hamburger-dash");

        return(() => {
            bodyElement = null;
            dashes = null;
        });
    });
</script>

<div class="header-menu relative flex justify-start items-center w-full h-full md:justify-center">
    <button id="button" class="relative w-18 h-18 md:hidden" onclick={navButton} title="hamburger">
        <div class="relative flex overflow-hidden items-center justify-center w-[4rem] h-[4rem]">
            <div class="dash-stack flex flex-col justify-between items-center w-[2.1rem] h-[1.5rem] overflow-hidden ">
                <div class="hamburger-dash hamburger-dash--1 rotate-down paused"></div>
                <div class="hamburger-dash hamburger-dash--2 slide-left paused"></div>
                <div class="hamburger-dash hamburger-dash--3 rotate-up paused"></div>
            </div>
        </div>
    </button>

    <div class="flex justify-between items-center md:w-full relative">
        <a href="/" id="siteLogo" class="text-3xl ml-6 opacity-0">
            <img src={sitelogo} alt="logo" class="w-[260px] object-contain"/>
        </a>

        <nav class="flex-nowrap hidden md:flex">
            <HeaderNavLinks />
        </nav>
    </div>

</div>

<style lang="scss">
  #siteLogo {
    transform: translateY($mobile-site-logo-animate-start);

    @include tablet {
      transform: translateX($desktop-site-logo-animate-start);
    }

  }

  @keyframes rotate-down {
    from {
        transform: rotate(0deg);
    }
    to {
      transform: rotate(44deg);
    }
  }

  @keyframes rotate-up {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-44deg);
    }
  }

  @keyframes slide-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-3rem);
    }
  }

  .rotate-down {
    animation: rotate-down 300ms forwards ease-out;
  }

  .slide-left {
    animation: slide-left 300ms forwards ease-out;
  }

  .rotate-up {
    animation: rotate-up 300ms forwards ease-out;
  }

  .paused {
    animation-play-state: paused;
  }

  .hamburger-dash {
    background: $primary;

    width: 2rem;
    height: 2px;
    border-radius: 4px;
    transform-origin: left;
  }
</style>