<script>
  import "../app.css";
  import "$lib/style/global.scss";
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/webgl">Graphics</a>
  </nav>
</header>

<main>
  <slot></slot>
</main>

<footer>
  <p>By Jacob Kochatkov</p>
</footer>

<style lang="scss">
  header {
		display: flex;
		justify-content: center;
    border-bottom: 2px $gold solid;
    a {
      display: inline-block;
      position: relative;
      color: $white;
      line-height: 2rem;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $white;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &::after:hover {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
</style>
