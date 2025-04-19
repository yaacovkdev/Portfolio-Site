<script lang="ts">
    export let href:string;
    export let end: boolean = false;
</script>

<a href={href}>
    <slot />

    {#if end}
        >>>
    {/if}
</a>

<style lang="scss">
  a {
    color: $azure;
    font-weight: 500;
  }
</style>