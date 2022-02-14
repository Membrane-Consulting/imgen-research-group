<script lang=ts>
  import Image from './Image.svelte'
  export let portableText
  $: ({block} = portableText);
</script>

{#if block.asset}
  <figure>
    <Image image={block} border={true}/>
    {#if block.caption}
      <figcaption>{block.caption}</figcaption>
    {/if}
  </figure>
{/if}

<style>
  figure {
    max-width: 80%;
    margin: 2rem auto;
  }
</style>