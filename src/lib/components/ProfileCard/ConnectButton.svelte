<script lang="ts">
  export let action;
  export let revAction;

  const text1: string = "Let's Stay in Touch!";
  const text2: string = "Return Card";
  let clicked: boolean = false;
</script>

<div class="connect-button">
  <button
    class="button"
    on:click={() => {
      if (!clicked) {
        action();
        setTimeout(() => {
          clicked = !clicked;
        }, 600);
      } else {
        revAction();
        clicked = !clicked;
      }
    }}>{clicked ? text2 : text1}</button
  >
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

    &:hover {
      background: linear-gradient(
        225deg,
        rgba($diamondblue, 0.7),
        rgba($purple, 0.2) 100%
      ),
      linear-gradient(
        157deg,
        rgba($darkpurple, 0.6),
        rgba($black, 0.3) 50%
      );
    }

    @include tablet {
      padding: $desktop-padding;
    }
  }
</style>
