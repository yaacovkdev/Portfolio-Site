<a class="nav-link nav-link--1" href="/">Home</a>
<a class="nav-link nav-link--2" href="/graphics">Graphics</a>
<a class="nav-link nav-link--3" href="/fullstack">Boolean Calculator</a>

<style lang="scss">
  a {
    @include shine-effect;
    position: relative;

    @apply text-3xl;
    padding: 0 1rem;
    margin: 1rem 0;

    @include tablet {
      @include scale-fonts-header;
      display: inline-block;
      text-decoration: none;
      margin: 0;
    }
  }
</style>