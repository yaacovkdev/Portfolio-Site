<script lang="ts">

  export let text: string;
  export let id: string;
  export let action;
  
</script>

<div class="connect-button">
  <button {id} class="button" on:click={action}>{text}</button>
</div>

<style lang="scss">
  .connect-button {
    margin-top: 3rem;
  }

  .button {
    @include interactive-radius;
    @include shine-effect;
    background-color: $purple;
    color: $white;
    min-width: 15rem;
    height: 3rem;
    margin: auto;
    padding: $mobile-padding;

    display: flex;
    justify-content: center;
    align-items: center;

    @include tablet {
      padding: $desktop-padding;
    }
  }
</style>
