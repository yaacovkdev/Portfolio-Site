<script lang="ts">
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
    <div class="newsproject__panel w-full flex flex-row justify-end">
        <a class="newsproject__button self-end" href={projectHref}>{projectButtonText}</a>
    </div>

</div>

<style lang="scss">
    .newsproject {
      @include box-shadow;
      text-align: left;

      h2 {
        @include scale-fonts-subtitle;
      }

      &__description {
        @include scale-fonts-regular;
      }

      &__panel {
        margin-top: 1.5rem;
      }

      &__button {
        @include button-color($black, $lightpurple, "blue");

        padding: $mobile-padding;

        @include tablet {
          padding: $desktop-padding;
        }
      }
    }
</style>