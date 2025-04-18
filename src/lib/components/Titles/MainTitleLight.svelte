<div class="main-title-light">
    <h1>
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
      background: $white;
    }


  }
</style>

