<script lang="ts">
    import { page } from '$app/stores';

    function handleLinkClick(event) {
        const targetUrl = event.currentTarget.getAttribute('href');
        const currentPath = $page.url.pathname;

        //if target same as current, reload page
        if (targetUrl === currentPath) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = targetUrl; // Force full page reload
        }
    }
</script>

<a class="nav-link nav-link--1" href="/" on:click={handleLinkClick}>Home</a>
<a class="nav-link nav-link--2" href="/graphics" on:click={handleLinkClick}>Graphics</a>
<a class="nav-link nav-link--3" href="/fullstack" on:click={handleLinkClick}>Boolean Calculator</a>

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