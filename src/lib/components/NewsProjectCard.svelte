<script lang="ts">
    import { onMount } from "svelte";
    import {ChevronDown} from "@lucide/svelte";

    export let projectName: string;
    export let projectDescription: string;
    export let projectSourceHref: string = "";
    export let projectSourceButtonText: string = "View Source";
    export let projectLiveHref: string = "";
    export let projectLiveButtonText: string = "Visit!";

    let descriptionEl: HTMLDivElement;
    let isClamped = true;

    onMount(() => {
        if (descriptionEl) {
            isClamped = descriptionEl.scrollHeight > descriptionEl.clientHeight;
        }
    });
</script>

<div class="newsproject w-full min-h-[20rem] my-16 p-8 flex flex-col justify-between items-start text-left">
    <div class="newsproject__info">
        <h2 class="mb-[0.5em]">{projectName}</h2>
        <div
            class={`newsproject__description ${isClamped ? "newsproject__description--clamped relative max-h-[6em] overflow-hidden" : ""}`}
            bind:this={descriptionEl}
        >
            {@html projectDescription}
        </div>
        {#if isClamped}
            <button
                class="w-full flex justify-start items-center mt-2 cursor-pointer bg-transparent border-none text-[#0095E9] hover:text-[#780091]"
                on:click={() => (isClamped = false)}
                aria-label="Expand"
            >
                <ChevronDown size={24} />
            </button>
        {/if}
    </div>

    <div class="newsproject__panel w-full mt-6 flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <div class="newsproject__buttons w-full flex flex-col justify-end flex-shrink-1 md:flex-row">
            {#if projectLiveHref !== ""}
                <button class="w-auto text-center mt-4 md:mt-0 md:ml-4" on:click={() => open(projectLiveHref)}>{projectLiveButtonText}</button>
            {/if}
            {#if projectSourceHref !== ""}
                <button class="w-auto text-center mt-4 md:mt-0 md:ml-4" on:click={() => open(projectSourceHref)}>{projectSourceButtonText}</button>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .newsproject {
      @include box-shadow;

      h2 {
        @include scale-fonts-subtitle;
      }

      &__description {
        @include scale-fonts-regular;

        &--clamped::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 5em;
            background: linear-gradient(to bottom, transparent, $background);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black);
            mask-image: linear-gradient(to bottom, transparent, black);
            pointer-events: none;
        }
      }

      &__panel {
        @include scale-fonts-regular;
      }

      &__data-label {
        display: inline-block;
        @include scale-fonts-small;
        line-height: 2em;

        @include tablet {
          line-height: 40px;
        }

        &--no-col {
          background-color: $swamp;
        }

        &--yes-col {
          background-color: $rose;
        }

        &--unk-col {
          background-color: $scotch;
        }
      }

      &__buttons {
        :first-child {
          margin-left: 0;
          margin-top: 0
        }

        button {
          @include button-color($darkgreen, $amour, "blue");
          @include home-button;
        }
      }
    }

    .button-border-radius {
      border-radius: 4rem 0 4rem 0;
    }
</style>