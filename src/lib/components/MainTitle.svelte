<h1 class="main-title"><slot /></h1>

<style lang="scss">
  .main-title {
    @include title-margin;
    @include scale-fonts-title;
    text-decoration: 2px solid underline;
    text-underline-offset: 0.25rem;
  }
</style>

