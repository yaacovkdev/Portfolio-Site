<script lang="ts">
  export let action;
  export let revAction;

  const text1: string = "Let's Get in Touch!";
  const text2: string = "Return Card";
  let clicked: boolean = false;
  let timeoutStarted: boolean = false;
</script>

<div class="connect-button">
  <button
    class="button"
    on:click={() => {
      if (!clicked) {
        if(!timeoutStarted) {
           timeoutStarted = true;
           action();
           setTimeout(() => {
             clicked = !clicked;
             timeoutStarted = false;
           }, 600);
        }
      } else {
        revAction();
        clicked = !clicked;
      }
    }}>{clicked ? text2 : text1}</button>
</div>

<style lang="scss">
  .connect-button {
    margin-top: 2rem;

    @include tablet {
      margin-top: 3rem;
    }
  }

  .button {
    @include button-color($black, $amour, "blue");
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
