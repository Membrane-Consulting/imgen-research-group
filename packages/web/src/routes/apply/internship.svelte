<script lang=ts context=module>
   import { title, siteTitle } from '$lib/stores/title'

   /**
    * @type {import('@sveltejs/kit').Load}
    */
   export async function load() {
    title.set('Apply for Internship')
    
    return { props: {} };
  }  
</script>
<script lang=ts>
   import SvelteSeo from 'svelte-seo'
</script>

<SvelteSeo 
  title='{$siteTitle} | Apply for an Internship at Imgen'
  description={'Apply for an Internship at Imgen'}
  openGraph={{
    title: `${$siteTitle} | Apply for an Internship at Imgen`,
    description: 'Apply for an Internship at Imgen',
    url: 'https://www.imgenresearchgroup.com/apply/internship',
    type: 'website'
  }}
/>

<section>
  <iframe 
    title="An embedded Google Form to apply to an internship at Imgen Research Group"
    src="https://docs.google.com/forms/d/e/1FAIpQLSd1PSV-Op_Fdtyd4Ofa0wOA8WJx2-F_lT-oBucWNMhsqXJgtA/viewform?embedded=true"
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