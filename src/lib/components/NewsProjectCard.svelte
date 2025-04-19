<script lang="ts">
    import {redirect} from "@sveltejs/kit";

    export let projectName: string;
    export let projectDescription: string;
    export let projectHref: string = null;
    export let projectButtonText: string = "Check it NOW!"
</script>

<div class="newsproject w-full min-h-[20rem] p-8 flex flex-col justify-between items-start">
    <div class="newsproject__info">
        <h2>{projectName}</h2>
        <div class="newsproject__description">{@html projectDescription}</div>
    </div>
    <div class="newsproject__panel w-full flex flex-row justify-center md:justify-end">
        <button class="newsproject__button w-full text-center md:w-72 xl:w-80" on:click={() => open("https://feedmenow-client.onrender.com/")}>{projectButtonText}</button>
    </div>
</div>

<style lang="scss">
    .newsproject {
      @include box-shadow;
      text-align: left;

      h2 {
        @include scale-fonts-subtitle;
      }

      &__description, &__panel {
        @include scale-fonts-regular;
      }

      &__panel {
        margin-top: 1.5rem;
      }

      &__button {
        @include button-color($black, $amour, "blue");

        padding: $mobile-padding;

        @include tablet {
          padding: $desktop-padding;
        }
      }
    }
</style>