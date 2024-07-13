<script lang="ts">
  import "../app.css";
  import "$lib/style/global.scss";
  import sveltekit_icon from "$lib/images/icons/favicon.png";
</script>

<header>
  <nav>
    <a id="nav-1" href="/home">Home</a>
    <a id="nav-2" href="/graphics">Graphics</a>
    <a id="nav-3" href="/fullstack">Boolean Calculator</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p class="text-base">By Jacob Kochatkov with power of SvelteKit</p>
  <span class="footer-dot">·</span>
  <img src={sveltekit_icon} alt="svelte_icon" />
</footer>

<style lang="scss">

  header {
    background-color: $purple;
    display: flex;
    justify-content: center;

    nav {
      a {
        display: inline-block;
        position: relative;

        line-height: 1rem;
        text-decoration: none;
        padding: 0 1rem;
        margin: 0;
        font-size: 1rem;

        @include tablet {
          font-size: 2rem;
          line-height: 2rem;
        }

        @keyframes shine {
          from {
            color: $white;
          }

          to {
            color: $gold;
          }
        }

        &:active {
          animation: shine 0.5s ease forwards;
        }
      }
    }
  }

  footer {
    bottom: 0;
    background-color: $white;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p, .footer-dot {
      color: gray;
    }

    img {
      width: 1.25rem;
      position: relative;
    }

    .footer-dot {
      font-size: 2em;
      line-height: 1em;
      padding: 0.25rem;
    }
  }
</style>
