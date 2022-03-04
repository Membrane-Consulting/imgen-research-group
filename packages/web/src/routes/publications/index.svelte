<script lang=ts context=module>
  import { sanity } from '$lib/client'
  import { title } from '$lib/stores/title'

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
      }
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
  export let data

  $:({ publications } = data)
</script>

{#each publications as text }
  <Publication 
    title={text.title}
    pdf={text.pdfURL}
    author={text.author.name}
    abstract={text.abstract}
  />
{/each}
