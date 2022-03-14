<script lang=ts context=module>
  import { sanity, urlFor } from '$lib/client'
  import { title, siteTitle } from '$lib/stores/title'

  export const load = async () => {
    title.set('Publications') 
    const query = `*[_type == 'publicationsPage'][0]{
      "publications": publications[]-> {
        abstract,
        author-> {
          name
        },
        "pdfURL": pdf.asset->url,
        pubDate,
        slug,
        title
      },
      seo
    }`
    const res = await sanity.fetch(query)

    return {
      props: {
        data: res,
      }
    }
  }
</script>
<script lang=ts>
  import Publication from '$lib/components/Publication.svelte'
  import SvelteSeo from 'svelte-seo'

  export let data

  $:({ publications, seo } = data)
</script>

<SvelteSeo 
  title='{$siteTitle} | {seo.title}'
  description={seo.description}
  openGraph={{
    title: `${$siteTitle} | ${seo.title}`,
    description: seo.description,
    url: 'https://www.imgenresearchgroup.com/publications',
    type: 'website',
    images: [
      {
        url: urlFor(seo.image).width(850).height(650).url(),
        width: 850,
        height: 650,
        alt: 'Imgen Research Group'
      }
     ]
  }}
/>

{#each publications as text }
  <Publication 
    title={text.title}
    pdf={text.pdfURL}
    author={text.author.name}
    abstract={text.abstract}
  />
{/each}
