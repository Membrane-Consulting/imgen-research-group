<script lang=ts>
  import {urlFor} from '$lib/client'
  import type { Image } from '@sanity/types'
  import { browser } from '$app/env'
  import { onMount } from 'svelte'

  export let image:Image
  export let maxWidth:number = 1200
  export let alt:string = undefined
  export let style:string = undefined
  export let border:boolean
  $: dimensions = image?.asset?._ref?.split('-')[2]
  $: [width, height] = dimensions.split('x').map(Number)
  $: aspectRatio = width / height
  let imageRef
  $: loaded = false;
  onMount(() => {
    imageRef.onload = () => {
      loaded = true
    }
  }) 
</script>
<div class="img-wrap">
  {#if browser && image}
    <img
      loading="lazy"
      src={urlFor(image).width(maxWidth).fit('fillmax').url()}
      alt={alt|| ''}
      class:loaded
      bind:this={imageRef}
      style="aspect-ratio: {aspectRatio}; {style ? style : ''}"
    />
    {#if border }
      <div class="img-border"></div>
    {/if}
  {/if}
</div>

<style> 
  img {
    opacity: 0;
    transition: opacity 100ms ease-out;
    max-width: 100%;
  }
  img.loaded {
    opacity: 1;
  }

  .img-wrap {
    max-width: 100%;
    margin-bottom: 10px;
    position: relative;
  }
  .img-border {
    position: absolute;
    top: 3px;
    right: 3px;
    bottom: 7px;
    left: 3px;
    border: 3px dashed var(--white);
  }
</style>