<script lang="ts">
    import {redirect} from "@sveltejs/kit";

    export let projectName: string;
    export let projectDescription: string;
    export let projectSourceHref: string = "";
    export let projectSourceButtonText: string = "View Source";
    export let projectLiveHref: string = "";
    export let projectLiveButtonText: string = "Visit!";
    export let datastatus: number = 2;

    const datastatus_to_label_tag: [string, string][] = [
        ['no-col', 'Data Not Collected'],
        ['yes-col', 'Data Is Collected'],
        ['unk-col', 'Unknown Data Collection Status']
    ]
</script>

<div class="newsproject w-full min-h-[20rem] my-16 p-8 flex flex-col justify-between items-start text-left">
    <div class="newsproject__info">
        <h2 class="mb-[0.5em]">{projectName}</h2>
        <div class="newsproject__description">{@html projectDescription}</div>
    </div>

    <div class="newsproject__panel w-full mt-6 flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <p class={`newsproject__data-label newsproject__data-label--${datastatus_to_label_tag[datastatus][0]} flex-shrink-0 px-6 py-[4px] w-fit button-border-radius`}>
            {datastatus_to_label_tag[datastatus][1]}
        </p>
        <div class="newsproject__buttons w-full flex flex-col justify-end flex-shrink-1 md:flex-row">
            {#if projectLiveHref !== ""}
                <button on:click={() => open(projectLiveHref)}>{projectLiveButtonText}</button>
            {/if}
            {#if projectSourceHref !== ""}
                <button on:click={() => open(projectSourceHref)}>{projectSourceButtonText}</button>
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

      &__description, &__panel {
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
          @apply w-auto text-center mt-4;
          @include button-color($darkgreen, $amour, "blue");
          @include home-button;

          @include tablet {
            @apply mt-0 ml-4;
          }
        }
      }
    }

    .button-border-radius {
      border-radius: 4rem 0 4rem 0;
    }
</style>