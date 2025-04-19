<script lang="ts">
  export let title: string;
  export let icon: string;
</script>

<div class="subcard">
  <img class="icon" src={icon} alt="icon" />
  <div class="subcard__content">
    <h3 class="text-lg font-semibold">{title}</h3>
    <p class="text-base">
      <slot />
    </p>
  </div>
</div>

<style lang="scss">
  .subcard {
    position: relative;
    width: 18rem;
    padding: 1rem;
    padding-top: 1.25rem;
    border: 2px solid $darkpink;
    border-radius: 1rem;
    text-align: start;
    background-color: $background;

    .icon {
      position: absolute;
      top: -1.75rem;
      background-color: $background;
      
      height: 3rem;
      object-fit: fill;
      
    }
  }
</style>
