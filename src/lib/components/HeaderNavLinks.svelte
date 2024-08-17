<a class="nav-link nav-link--1" href="/">Home</a>
<a class="nav-link nav-link--2" href="/graphics">Graphics</a>
<a class="nav-link nav-link--3" href="/fullstack">Boolean Calculator</a>

<style lang="scss">
  a {
    @include shine-effect;
    position: relative;

    @apply text-3xl;
    margin: 1rem 0;

    @include tablet {
      @include scale-fonts-header;
      padding: 0 1rem;
      display: inline-block;
      margin: 0;
    }
  }
</style>