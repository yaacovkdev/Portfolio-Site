<div class="main-title-light">
    <h1 class="h-[1.5em]">
        <slot />
    </h1>
</div>

<style lang="scss">
  .main-title-light {
    h1 {
      @include title-padding;
      @include title-margins;
      @include scale-fonts-title;
      @include title-radius;
      @include flashy-text;
    }
  }
</style>

