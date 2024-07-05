<script lang="ts">
  import "../app.css";
  import "$lib/style/global.scss";
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/webgl">Graphics</a>
    <a href="/fullstack">Boolean Calculator</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>By Jacob Kochatkov</p>
</footer>

<style lang="scss">
  header {
    display: flex;
    justify-content: center;

    nav {
      a {
        display: inline-block;
        position: relative;

        color: $white;
        line-height: 2rem;
        text-decoration: none;
        padding: 1rem;
        margin: 0 1rem;
        font-size: 2rem;

        &::after {
          content: "";
          position: absolute;
          width: 10px;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $white;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        

        @keyframes zoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.5);
          }
        }

        &:hover {
          text-decoration: underline;
          animation: zoom 1s forwards ease;
        }
      }
    }
  }

  main {
    border-top: 2px $gold solid;
    z-index: 1;
  }
</style>
