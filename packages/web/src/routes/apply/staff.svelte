<script lang=ts context=module>
  import { title, siteTitle } from '$lib/stores/title'
  
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    title.set('Apply for Work')
    
    return { props: {} };
  }  
</script>
<script lang=ts>
  import SvelteSeo from 'svelte-seo'

  let form = undefined
</script>

<SvelteSeo 
  title='{$siteTitle} | Apply to work for Imgen'
  description={'Apply to work for Imgen Research Group'}
  openGraph={{
    title: `${$siteTitle} | Apply to work for Imgen`,
    description: 'Apply to work for Imgen Research Group',
    url: 'https://www.imgenresearchgroup.com/apply/staff',
    type: 'website'
  }}
/>

<section>
  {#if !form}
    <p>Loading...</p>
  {/if}
  <iframe 
    bind:this={form}
    title="An embedded Google Form to apply to work at Imgen Research Group"
    src="https://docs.google.com/forms/d/e/1FAIpQLSdudE0qELNss0i2gvRJfiw389-ckVxCMPjPJSVGV8VKAAlipg/viewform?embedded=true"
    frameborder="0"
  >
    Loading...
  </iframe>
</section>

<style>
   iframe {
      width: 100%;
      min-height: 1000px;
   }
</style>
