<script lang="ts">
  export let title: string;
</script>

<h1 id="mainTitle">{title}</h1>

<style lang="scss">
  #mainTitle {
    @include title-margin;
    @include scale-fonts-title;
  }
</style>

